// API and Socket.IO configuration
// When deployed separately (e.g. Firebase Hosting + Render backend),
// set VITE_API_URL=https://your-backend.onrender.com

export const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

export function apiUrl(path) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}
