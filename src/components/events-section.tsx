"use client";

import type { EventItem } from "@/lib/events";
import { fetchEvents } from "@/lib/get-events";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedText } from "./animated-text";

function formatEventDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function eventTypeLabel(type: EventItem["type"]) {
  switch (type) {
    case "meetup":
      return "Meetup";
    case "workshop":
      return "Workshop";
    case "talks":
      return "Palestras";
    case "networking":
      return "Networking";
    case "hackathon":
      return "Hackathon";
    default:
      return "Evento";
  }
}

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur"
    >
      <div className="relative h-52 md:h-56 lg:h-60 w-full overflow-hidden">
        <Image
          src={event.coverImage || "/placeholder.svg"}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.02]"
          priority={index < 2}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* ações no header */}
        <div className="absolute inset-0 p-4">
          {/* botão + preview do mapa (desktop): abre apenas ao hover no botão */}
          {event.venueMapUrl ? (
            <div className="hidden lg:block absolute bottom-4 left-4 right-4">
              <div className="relative" onMouseLeave={() => setMapOpen(false)}>
                <a
                  href={event.venueMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Abrir no mapa"
                  onMouseEnter={() => setMapOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 px-3 py-2 text-sm text-white hover:bg-black/70 relative z-20"
                >
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  Mapa
                </a>

                {event.venueMapEmbedUrl ? (
                  <div
                    className={
                      "absolute bottom-0 right-0 w-[280px] h-[168px] rounded-xl overflow-hidden border border-white/10 bg-black/40 transition-all duration-200 z-30 " +
                      (mapOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none")
                    }
                    onMouseEnter={() => setMapOpen(true)}
                  >
                    <iframe
                      src={event.venueMapEmbedUrl}
                      width="280"
                      height="168"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      title={`Mapa: ${event.location}`}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/75 text-white border border-green-500/85">
              {eventTypeLabel(event.type)}
            </span>
            <span
              className={
                "px-2.5 py-1 rounded-full text-xs font-semibold border " +
                (event.registrationOpen
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-white/10 text-white border-white/10")
              }
            >
              {event.registrationOpen ? "Inscrições abertas" : "Em breve"}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white leading-snug">{event.title}</h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-yellow-400" />
            {formatEventDate(event.startsAt)}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-yellow-400" />
            {event.location}
          </span>
        </div>

        {event.venueMapUrl ? (
          <div className="mt-4 lg:hidden">
            <a
              href={event.venueMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
            >
              <MapPin className="w-4 h-4 text-yellow-400" />
              Ver no mapa
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ) : null}

        <p className="mt-4 text-gray-300 line-clamp-3">{event.description}</p>

        <div className="mt-6">
          {event.registrationUrl ? (
            <div className="flex flex-col gap-3">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className={
                  "inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors " +
                  (event.registrationOpen
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-white/10 text-white hover:bg-white/15")
                }
              >
                {event.registrationOpen ? "Link do evento" : "Ver detalhes"}
                <ExternalLink className="h-4 w-4" />
              </a>

              {event.moreUrl ? (
                <a
                  href={event.moreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-white/10 text-white hover:bg-white/15 transition-colors"
                >
                  Saiba mais
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-white/5 text-gray-400 cursor-not-allowed"
            >
              Link em breve
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsSection() {
  const [events, setEvents] = useState<EventItem[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchEvents()
      .then((data) => {
        if (!cancelled) setEvents(data);
      })
      .catch(() => {
        if (!cancelled) setEvents([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  let content;
  if (events === null) {
    const skeletonCard = (
      <div className="animate-pulse bg-black/30 rounded-xl border border-white/10 p-0 overflow-hidden">
        <div className="h-52 md:h-56 lg:h-60 w-full bg-slate-700" />
        <div className="p-6">
          <div className="h-4 bg-slate-700 rounded w-3/4 mb-3" />
          <div className="h-3 bg-slate-700 rounded w-1/2 mb-3" />
          <div className="flex items-center gap-2 mt-4">
            <div className="h-8 w-20 bg-slate-700 rounded-full" />
            <div className="h-8 w-28 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    );

    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>{skeletonCard}</div>
        ))}
      </div>
    );
  } else if (events.length === 0) {
    content = (
      <div className="bg-black p-6 rounded-lg text-gray-300">
        Ainda não publicamos a agenda. Volte em breve.
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    );
  }

  return (
    <section
      id="events"
      className="relative overflow-hidden py-20 max-sm:mt-0 sm:mt-4 md:mt-12 lg:pt-[60px] bg-blue-950"
    >
      {/* degradê só em cima: do preto para a cor atual (transparente deixa aparecer bg-blue-950) */}
      <div className="absolute inset-x-0 top-0 h-20 pointer-events-none bg-gradient-to-b from-black to-transparent" />

      <div className="container mx-auto px-4 pt-8 relative z-10">
        <AnimatedText
          text="Próximos Eventos"
          className="text-4xl font-bold text-center mb-12 text-white"
        />
        {content}
      </div>
    </section>
  );
}
