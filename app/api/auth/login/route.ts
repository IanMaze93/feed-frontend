import { backendPost } from "@/app/lib/server/routes";

export async function POST(request: Request) {
  const body = await request.json();
  const data = await backendPost("auth/login", body);

  return Response.json(data, {
    status: 200,
  });
}
