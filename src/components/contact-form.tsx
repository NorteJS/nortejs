"use client";

import { useState } from "react";

type Props = {
  toEmail: string;
};

export default function ContactForm({ toEmail }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const safeSubject = subject.trim() || "Contato - NorteJS";
  const bodyLines = [
    `Nome: ${name || "(não informado)"}`,
    `Email: ${email || "(não informado)"}`,
    "",
    message || "(mensagem em branco)",
  ];

  const params = new URLSearchParams({
    subject: safeSubject,
    body: bodyLines.join("\n"),
  });

  const mailtoHref = `mailto:${toEmail}?${params.toString()}`;

  return (
    <form
      className="mt-8 grid grid-cols-1 gap-4 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Nome</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-lg bg-white/5 border border-white/10 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
            placeholder="Seu nome"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-lg bg-white/5 border border-white/10 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
            placeholder="voce@exemplo.com"
            autoComplete="email"
            inputMode="email"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-white">Assunto</span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="h-11 rounded-lg bg-white/5 border border-white/10 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
          placeholder="Sobre o que você quer falar?"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-white">Mensagem</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[140px] resize-y rounded-lg bg-white/5 border border-white/10 px-3 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
          placeholder="Escreva sua mensagem..."
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition-colors"
        >
          Enviar email
        </button>

        <a
          href={mailtoHref}
          className="text-sm text-gray-300 hover:text-white underline underline-offset-4"
        >
          ou abrir no seu app de email
        </a>
      </div>

      <p className="text-xs text-gray-400">
        Observação: por ser um site estático, o envio abre seu cliente de email
        (Gmail/Outlook/etc.).
      </p>
    </form>
  );
}
