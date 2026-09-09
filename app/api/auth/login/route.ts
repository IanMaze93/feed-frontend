const API_URL = process.env.BACKEND_URL;

export async function POST(request: Request) {
  if (!API_URL) {
    return Response.json(
      { error: "Backend URL is not configured" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data, {
    status: response.status,
  });
}
