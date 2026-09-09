import { backendPost } from "@/app/lib/server/routes";

export async function POST(request: Request) {
  const response = await backendPost(request, "users");

  const data = await response.json();

  return Response.json(data, {
    status: response.status,
  });
}
