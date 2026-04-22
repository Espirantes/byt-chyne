import { mapEmbedUrl } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import NearbyServices from "./NearbyServices";

export default function LocationMap() {
  return (
    <SectionWrapper id="lokalita" className="bg-surface">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">Lokalita</h2>
      <p className="mt-4 max-w-prose text-muted md:text-lg">
        Chýně nabízí skvělou dopravní dostupnost a veškerou občanskou
        vybavenost v docházkové vzdálenosti. Hned za domem se nachází nové
        Chýňské náměstí.
      </p>
      <NearbyServices />
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
