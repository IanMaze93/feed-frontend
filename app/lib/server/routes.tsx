const API_URL = process.env.BACKEND_URL;

export async function backendPost<T>(endpoint: string, body: T): Promise<T> {
  if (!API_URL) {
    throw new Error("Backend URL is not configured");
  }

  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Backend request failed with status ${response.status}`);
  }

  return data;
}

export async function backendGet<T>(endpoint: string): Promise<T> {
  if (!API_URL) {
    throw new Error("Backend URL is not configured");
  }

  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // Disable caching for GET requests
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Backend request failed with status ${response.status}`);
  }

  return data;
}
