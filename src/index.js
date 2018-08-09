/* global addEventListener */
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const getResponse = require("./response").getResponse;

async function handleRequest(request) {
  if (request.url.endsWith("/time")) {
    const canonicalUrl = request.url.replace("/time", "");
    const start = Date.now();
    await fetch(canonicalUrl);
    const end = Date.now();
    return new Response(`${(end - start) / 1000}ms`);
  } else if (request.url.endsWith("previewtime")) {
    console.time("response");
    const response = getResponse();
    console.timeEnd("response");
    return response;
  }
  return getResponse();
}
