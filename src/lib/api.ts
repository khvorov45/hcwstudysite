import { API_ROOT } from "./config"

const STATUS_CODES = {
  OK: 200,
  NO_CONTENT: 204,
}

export async function apireq<T>({
  path,
  method,
  headers,
  body,
}: {
  path: "registration-of-interest"
  method?: "GET" | "POST"
  headers?: Record<string, string>
  body?: any
}): Promise<T> {
  const res = await fetch(`${API_ROOT}/${path}`, {
    method: method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (res.status === STATUS_CODES.NO_CONTENT) {
    return
  }
  return await res.json()
}
