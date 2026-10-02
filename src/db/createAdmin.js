import "dotenv/config";
import { usersCol } from "./index.js";

// Change this to your real phone number (digits only, no spaces or +)
const ADMIN_PHONE = process.env.ADMIN_PHONE || "9344075202";
const ADMIN_NAME  = process.env.ADMIN_NAME  || "Admin";

async function createAdmin() {
  const cleanPhone = ADMIN_PHONE.replace(/\D/g, "");

  // Check if admin already exists with this phone
  const existing = await usersCol.where("phoneNumber", "==", cleanPhone).limit(1).get();
  if (!existing.empty) {
    const doc = existing.docs[0];
    console.log(`[WARN] User already exists for ${cleanPhone} (id: ${doc.id}, role: ${doc.data().role})`);
    if (doc.data().role !== "admin") {
      await doc.ref.update({ role: "admin", verificationStatus: "approved" });
      console.log("[INFO] Upgraded to admin.");
    } else {
      console.log("[INFO] Already an admin. Nothing to do.");
    }
    process.exit(0);
  }

  const ref = usersCol.doc();
  const adminUser = {
    id: ref.id,
    phoneNumber: cleanPhone,
    name: ADMIN_NAME,
    role: "admin",
    verificationStatus: "approved",
    createdAt: new Date().toISOString()
  };

  await ref.set(adminUser);
  console.log("[INFO] Admin user created:");
  console.log(JSON.stringify(adminUser, null, 2));
  process.exit(0);
}

createAdmin().catch(err => {
  console.error("[ERROR] Failed:", err.message);
  process.exit(1);
});
