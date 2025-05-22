// src/api/fetchFairyTales.js

export async function fetchFairyTales() {
  const response = await fetch(
    "https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
  );
  if (!response.ok) throw new Error("Failed to load fairy tales");
  return await response.json();
}
