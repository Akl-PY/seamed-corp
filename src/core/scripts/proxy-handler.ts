// src/utils/proxyHandler.ts
import type { APIContext } from "astro";

export async function handleProxyRequest(targetBaseUrl: string, { params, request }: APIContext) {
  const path = params.path || "";
  const url = new URL(request.url);
  

  const targetUrl = `${targetBaseUrl}/${path}${url.search}`;


  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("content-length");
  headers.delete("connection");


  const realIP = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "";
  headers.set("X-Forwarded-For", realIP);
  headers.set("X-Real-IP", realIP);

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: request.method !== "GET" && request.method !== "HEAD" 
        ? await request.arrayBuffer() 
        : undefined,
      redirect: "follow",
    });

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    console.error(`[Proxy Error] en ${targetUrl}:`, error);
    return new Response("Proxy Error", { status: 502 });
  }
}