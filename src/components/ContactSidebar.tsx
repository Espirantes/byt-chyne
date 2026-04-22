import { contact } from "@/lib/data";

export default function ContactSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-20">
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Máte zájem?</h3>
          <p className="mt-1 text-sm text-muted">
            Kontaktujte mě pro více informací nebo domluvení prohlídky.
          </p>
          <div className="mt-3 rounded-lg bg-red-50 px-3 py-2">
            <p className="text-[11px] font-semibold text-red-700">
              RK nevolat — přímý prodej
            </p>
          </div>

          <div className="mt-5">
            <p className="text-base font-semibold">{contact.name}</p>

            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="mt-3 flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-accent hover:bg-accent-light/30"
            >
              <svg
                className="h-5 w-5 shrink-0 text-accent"
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
              <div>
                <p className="text-xs text-muted">Zavolejte mi</p>
                <p className="font-semibold text-accent">{contact.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="mt-2 flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3 transition-colors hover:border-accent hover:bg-accent-light/30"
            >
              <svg
                className="h-5 w-5 shrink-0 text-accent"
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
              <div>
                <p className="text-xs text-muted">Napište mi</p>
                <p className="font-medium">{contact.email}</p>
              </div>
            </a>
          </div>

          <a
            href="#kontakt"
            className="mt-5 block w-full rounded-lg bg-accent py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Mám zájem o tuto nemovitost
          </a>
        </div>
      </div>
    </aside>
  );
}
