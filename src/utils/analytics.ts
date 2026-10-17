export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''

export const pageview = (url: URL) => {
  if (!GA_TRACKING_ID) return
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  if (!GA_TRACKING_ID) return
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  })
}
