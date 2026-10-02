import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

// Initialize the Firebase Admin App
if (!getApps().length) {
  let certConfig = null;
  let projectId = process.env.FIREBASE_PROJECT_ID;

  // If GOOGLE_APPLICATION_CREDENTIALS points to a non-existent file (e.g., /etc/secrets on local dev), remove it to avoid ENOENT crashes
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS && !fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
    delete process.env.GOOGLE_APPLICATION_CREDENTIALS;
  }

  // 1. Check if raw JSON string is provided in environment variables (for Render, Railway, etc.)
  const rawSaEnv = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_CREDENTIALS;
  if (rawSaEnv) {
    try {
      const sa = typeof rawSaEnv === "string" ? JSON.parse(rawSaEnv) : rawSaEnv;
      certConfig = cert(sa);
      if (sa.project_id) {
        projectId = sa.project_id;
      }
    } catch (err) {
      console.warn("Could not parse service account from environment variable:", err.message);
    }
  }

  // 2. Try finding service-account.json from file paths
  if (!certConfig) {
    const possiblePaths = [
      process.env.GOOGLE_APPLICATION_CREDENTIALS,
      "/etc/secrets/service-account.json",
      path.resolve(process.cwd(), "service-account.json"),
      path.resolve(process.cwd(), "..", "service-account.json"),
    ].filter(Boolean);

    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        try {
          const sa = JSON.parse(fs.readFileSync(p, "utf8"));
          certConfig = cert(sa);
          if (sa.project_id) {
            projectId = sa.project_id;
          }
          break;
        } catch (err) {
          console.warn("Could not parse service account file at:", p);
        }
      }
    }
  }

  const options = {};
  if (certConfig) {
    options.credential = certConfig;
  }
  if (projectId) {
    options.projectId = projectId;
  }

  const app = initializeApp(options);
  console.log(`[Firebase Admin] Initialized with project ID: ${projectId || "default"}`);
}

export const db = getFirestore();
console.log(`[Firestore DB] Connected to project: ${db.projectId}`);

// Export Collection References
export const usersCol = db.collection("users");
export const tasksCol = db.collection("tasks");
export const taskClaimsCol = db.collection("task_claims");
export const auditLogCol = db.collection("audit_log");
export const ratingsCol = db.collection("ratings");
export const flagsCol = db.collection("flags");
export const locationsCol = db.collection("locations");
export const chatMessagesCol = db.collection("chat_messages");

// Export Types
export { Timestamp, FieldValue };