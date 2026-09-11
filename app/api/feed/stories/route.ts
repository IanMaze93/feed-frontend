import { backendGet } from "@/app/lib/server/routes";

export async function GET(request: Request) {
  const userId = request.headers.get("userId");
  if (!userId) {
    return new Response("Missing userId header", { status: 400 });
  }

  const url = `/users/${userId}/stories`;
  const data = await backendGet(url);

  return Response.json(data, {
    status: 200,
  });
}
