export type EventType = "meetup" | "workshop" | "talks" | "networking" | "hackathon";

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  startsAt: string; // ISO date-time
  location: string;
  description: string;
  registrationOpen: boolean;
  registrationUrl?: string | null;
};
