export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ""

export const pageview = (url: string) => {
  if (!GA_ID) return;

  if (document.cookie.includes("ga_internal=true")) {
    return // DO NOT TRACK
  }

  window.gtag("config", GA_ID, {
    page_path: url,
  })
}
