export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://192.168.0.127:1337";

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }
  // if (image.url.indexOf("/" === 0)) {
  //   return `${API_URL}${image.url}`;
  // }

  return image.url;
};
