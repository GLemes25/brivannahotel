const firePixelEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, params);
};

export const trackInitiateCheckout = () =>
  firePixelEvent("InitiateCheckout", { content_name: "Redirecionamento_Motor" });
