// ✅ This function fetches fairy tale data from a remote JSON file hosted on GitHub

export async function fetchFairyTales() {
  // 🔄 Calls the URL where the fairy tale list is stored (a JSON file in a GitHub repo)
  const response = await fetch(
    "https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
  );

  // ⚠️ If the server or file is unreachable (e.g. 404 or 500), throw an error
  if (!response.ok) throw new Error("Failed to load fairy tales");

  // ✅ If the response is OK, parse the JSON and return it
  return await response.json();
}
