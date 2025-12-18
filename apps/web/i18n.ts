import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => {
  // Fallback safety (important for TS + edge cases)
  const resolvedLocale = locale ?? "en"

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  }
})
