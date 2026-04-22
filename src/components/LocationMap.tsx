import { mapEmbedUrl } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function LocationMap() {
  return (
    <SectionWrapper id="lokalita" className="bg-surface">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">Lokalita</h2>
      <p className="mt-4 max-w-prose text-muted md:text-lg">
        Chýně nabízí skvělou dopravní dostupnost — vlaková zastávka je 500 m od
        domu (Smíchovské nádraží za 28 min), autobusová zastávka 300 m (metro
        Zličín za 16 min). Autem 9 min do OC Metropole Zličín, 15 min na
        letiště. V okolí škola, dvě školky, pošta, Billa, restaurace, přírodní
        koupaliště. Hned za domem nové Chýňské náměstí.
      </p>
      <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-gray-100">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          className="border-0"
          loading="lazy"
          title="Mapa lokality"
        />
      </div>
    </SectionWrapper>
  );
}
