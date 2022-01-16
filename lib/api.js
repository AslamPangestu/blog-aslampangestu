export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export const fetchAPI = async (path) => {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  console.debug(`RES ${path}:`, data)
  return data
}
