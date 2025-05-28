export async function serverFetch({
  url,
  method = "GET",
  data,
  headers = {},
  cache = "no-store",
  tags,
  revalidate,
}) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache,
      ...(tags && { next: { tags } }),
      ...(revalidate && { next: { revalidate } }),
    };

    // Add body for non-GET requests
    if (method !== "GET" && data) {
      options.body = JSON.stringify(data);
    }

    // Add query params for GET requests
    const queryUrl =
      method === "GET" && data
        ? `${url}?${new URLSearchParams(data).toString()}`
        : url;

    const response = await fetch(queryUrl, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Server fetch error:", error);
    throw error;
  }
}

//! use
// async function getData() {
//   const data = await serverFetch({
//     url: "https://api.example.com/data",
//     cache: "force-cache", // Default caching
//     tags: ["collection"], // For revalidation
//     revalidate: 3600, // Cache for 1 hour
//   });
//   return data;
// }