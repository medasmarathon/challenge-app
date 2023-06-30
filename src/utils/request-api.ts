import { ApiResponse } from "@/interfaces/api-response";

export async function postApi<T>(endpoint: string, data: any) {
  return await fetch(endpoint, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(r => 
    r.json() as Promise<ApiResponse<T>>)
  .catch(err => {
    let message = (err instanceof Error) ? err.message : String(err);
    return {
      status: "error", 
      message: message
    } as ApiResponse<never>;
  });
}