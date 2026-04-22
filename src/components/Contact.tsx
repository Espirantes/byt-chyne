"use client";

import { useState } from "react";
import { contact } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <SectionWrapper id="kontakt">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">Kontakt</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Contact info */}
        <div>
          <div className="rounded-xl border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-light">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.5-1.632Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold">{contact.name}</p>
                <p className="text-sm text-muted">Prodávající — přímý prodej bez RK</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-red-50 px-4 py-3">
              <p className="text-xs font-semibold text-red-700">
                Realitní kanceláře nevolat — jedná se o přímý prodej.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-lg font-medium text-accent transition-colors hover:text-accent/80"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-muted transition-colors hover:text-primary"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-xl border border-gray-100 p-6">
          <h3 className="text-lg font-semibold">Napište mi</h3>
          <p className="mt-1 text-sm text-muted">
            Vyplňte formulář a ozvu se vám co nejdříve.
          </p>
          {sent ? (
            <div className="mt-6 rounded-lg bg-green-50 p-6 text-center">
              <p className="font-semibold text-green-700">Zpráva odeslána!</p>
              <p className="mt-1 text-sm text-green-600">
                Děkuji, ozvu se vám co nejdříve.
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xaqapvjq"
              method="POST"
              noValidate
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitted(true);
                const form = e.currentTarget;
                if (!form.checkValidity()) return;
                await fetch(form.action, {
                  method: "POST",
                  body: new FormData(form),
                  headers: { Accept: "application/json" },
                });
                setSent(true);
              }}
              className={`mt-5 space-y-4 ${submitted ? "group/form submitted" : ""}`}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted"
                >
                  Jméno a příjmení *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-muted"
                  >
                    Telefon *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[\d\s\+\-]{9,}"
                    title="Zadejte platné telefonní číslo (min. 9 číslic)"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent "
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    title="Zadejte platný e-mail (např. jan@example.com)"
                    className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted"
                >
                  Dotaz *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  defaultValue="Dobrý den, zaujala mě tato nemovitost. Mohli bychom se domluvit na prohlídce?"
                  className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
              >
                Odeslat dotaz
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
