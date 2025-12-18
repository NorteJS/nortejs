import type { EventItem } from "./events";

type EventsResponse = { events: EventItem[] };

export async function fetchEvents(): Promise<EventItem[]> {
  // Prefer API route (works on Vercel/Node). On GitHub Pages (static), fallback to /events.json.
  try {
    const res = await fetch("/api/events", { cache: "no-store" });
    if (res.ok) {
      const data = (await res.json()) as EventsResponse;
      return Array.isArray(data.events) ? data.events : [];
    }
  } catch {
    // ignore and fallback
  }

  const res = await fetch("/events.json", { cache: "no-store" });
  if (!res.ok) return [];
  const data = (await res.json()) as EventItem[];
  return Array.isArray(data) ? data : [];
}
