import { getStrapiURL } from "./api"

export const getMediaURL = (media) => {
  if (!media) {
    return ""
  }
  const imageUrl = media.startsWith("/") ? getStrapiURL(media) : media
  return imageUrl
}
