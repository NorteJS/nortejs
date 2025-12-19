"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "./animated-text"
import { useEffect, useMemo, useState } from "react"
import type { EventItem } from "@/lib/events"
import { fetchEvents } from "@/lib/get-events"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

function formatEventDate(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

function eventTypeLabel(type: EventItem["type"]) {
  switch (type) {
    case "meetup":
      return "Meetup"
    case "workshop":
      return "Workshop"
    case "talks":
      return "Palestras"
    case "networking":
      return "Networking"
    case "hackathon":
      return "Hackathon"
    default:
      return "Evento"
  }
}

export default function EventsSection() {
  const [events, setEvents] = useState<EventItem[] | null>(null)

  useEffect(() => {
    let cancelled = false
    fetchEvents()
      .then((data) => {
        if (!cancelled) setEvents(data)
      })
      .catch(() => {
        if (!cancelled) setEvents([])
      })
    return () => {
      cancelled = true
    }
  }, [])

  const content = useMemo(() => {
    if (events === null) {
      return (
        <div className="bg-black p-6 rounded-lg text-gray-300">
          Carregando eventos…
        </div>
      )
    }

    if (events.length === 0) {
      return (
        <div className="bg-black p-6 rounded-lg text-gray-300">
          Ainda não publicamos a agenda. Volte em breve.
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-white/20 bg-black/40 backdrop-blur"
          >
            <div className="relative h-44 w-full">
              <Image
                src={event.coverImage || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.02]"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

              {/* overlay de ações visível ao passar o mouse */}
              <div className="absolute inset-0 p-4 pointer-events-none">
                {/* preview do mapa no hover (desktop) */}
                {event.venueMapEmbedUrl && (
                  <div className="hidden lg:block absolute right-4 top-4 w-[320px] h-[200px] rounded-xl overflow-hidden border border-white/10 bg-black/40 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 pointer-events-auto">
                    <iframe
                      src={event.venueMapEmbedUrl}
                      width="320"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      title={`Mapa: ${event.location}`}
                    />
                  </div>
                )}

                {/* botão para abrir mapa */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 pointer-events-auto">
                  {event.venueMapUrl && (
                    <a
                      href={event.venueMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="Abrir no mapa"
                      className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/10 px-3 py-2 text-sm text-white hover:bg-black/70"
                    >
                      <MapPin className="w-4 h-4 text-yellow-400" />
                      Mapa
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-200 border border-green-500/25">
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

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white leading-snug">
                {event.title}
              </h3>

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

              <p className="mt-4 text-gray-300 line-clamp-3">
                {event.description}
              </p>

              <div className="mt-6">
                {event.registrationUrl ? (
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
                    {event.registrationOpen ? "Inscrever" : "Ver detalhes"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
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
        ))}
      </div>
    )
  }, [events])

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
  )
}

