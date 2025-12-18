"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "./animated-text"
import { useEffect, useMemo, useState } from "react"
import type { EventItem } from "@/lib/events"
import { fetchEvents } from "@/lib/get-events"

function formatEventDate(iso: string) {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
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
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black p-6 rounded-lg"
          >
            <div className="flex items-center justify-between mb-4 gap-4">
              <span className="text-sm font-semibold text-yellow-400">
                {formatEventDate(event.startsAt)}
              </span>
              <motion.span
                className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {event.registrationOpen ? "Inscrições Abertas" : "Em breve"}
              </motion.span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
            <p className="text-gray-300 mb-3">{event.description}</p>
            <p className="text-sm text-gray-400">{event.location}</p>
          </motion.div>
        ))}
      </div>
    )
  }, [events])

  return (
    <section id="events" className="py-20 max-sm:mt-0 sm:mt-4 md:mt-12 lg:mt-[50px] bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Próximos Eventos"
          className="text-4xl font-bold text-center mb-12 text-white"
        />
        {content}
      </div>
    </section>
  )
}

