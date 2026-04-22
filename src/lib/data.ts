export const apartment = {
  title: "Prodej bytu 4+kk, Chýně",
  subtitle: "Vzdušný mezonetový byt v novostavbě na ulici Příhodova",
  price: "11 000 000 Kč",
  location: "Příhodova, Chýně, Praha-západ",
  address: "Příhodova, Chýně 253 01",
};

export const parameters: { label: string; value: string }[] = [
  { label: "Dispozice", value: "4+kk" },
  { label: "Typ", value: "Mezonet" },
  { label: "Užitná plocha", value: "80 m²" },
  { label: "Podlaží", value: "4. / 4 (poslední)" },
  { label: "Stav", value: "Novostavba 2019" },
  { label: "Balkon", value: "Ano" },
  { label: "Sklep", value: "Ano" },
  { label: "Parkování", value: "2× stání u domu" },
  { label: "Vlastnictví", value: "Osobní" },
  { label: "Vytápění", value: "Elektrokotel" },
  { label: "PENB", value: "E" },
  { label: "Výtah", value: "Ano" },
];

export const description = `Prodej krásného, vzdušného mezonetového bytu o dispozici 4+kk a užitné ploše 80 m², který se nachází ve 4. (posledním) podlaží novostavby z roku 2019, na ulici Příhodova v Chýni.

Bytová jednotka sestává z předsíně, koupelny s WC, pokoje a prostorného obývacího pokoje s kuchyňským koutem, ze kterého vede vstup na balkon. Po schodech se dostaneme do druhého podlaží bytu, kde se nachází dvě menší místnosti, které mohou sloužit jako ložnice, dětský pokoj nebo pracovna.

K bytu náleží také sklep a dvě parkovací stání vedle domu. Měsíční náklady činí 3 300 Kč (fond oprav, služby, stočné) + 3 500 Kč za elektřinu — včetně vytápění a ohřevu vody, které jsou řešeny elektrokotlem.

V okolí se nachází veškerá občanská vybavenost — škola, dvě školky, pošta, Billa, restaurace, pivní lázně, přírodní koupaliště a další. Je zde skvělá dopravní dostupnost. 500 metrů od domu se nachází vlaková zastávka, ze které dojedete na Smíchovské nádraží za 28 minut. 300 m od domu leží autobusová zastávka, ze které se dostanete za 16 minut na stanici metra Zličín. Autem je to 9 minut do OC Metropole Zličín nebo 15 minut na Letiště Václava Havla. Hned za domem se nachází nové Chýňské náměstí.

Bytová jednotka je v osobním vlastnictví a lze financovat hypotečním úvěrem.`;

export const photos: { src: string; alt: string }[] = [
  { src: "/photos/0.webp", alt: "Kuchyňský kout s jídelním stolem" },
  { src: "/photos/1.webp", alt: "Obývací pokoj s kuchyní" },
  { src: "/photos/2.webp", alt: "Obývací pokoj s TV a kuchyní" },
  { src: "/photos/3.webp", alt: "Obývací pokoj — pohovka" },
  { src: "/photos/4.webp", alt: "Obývací pokoj se schodištěm do podkroví" },
  { src: "/photos/5.webp", alt: "Balkon — výhled na okolí" },
  { src: "/photos/6.webp", alt: "Balkon — druhý pohled" },
  { src: "/photos/7.webp", alt: "Kuchyně s jídelnou — celkový pohled" },
  { src: "/photos/8.webp", alt: "Kuchyňská linka — detail" },
  { src: "/photos/9.webp", alt: "Jídelna s kuchyní a schodištěm" },
  { src: "/photos/10.webp", alt: "Dětský pokoj" },
  { src: "/photos/11.webp", alt: "Dětský pokoj — druhý" },
  { src: "/photos/12.webp", alt: "Pracovna v podkroví" },
  { src: "/photos/13.webp", alt: "Pracovna v podkroví — širší pohled" },
  { src: "/photos/14.webp", alt: "Herna v podkroví" },
  { src: "/photos/15.webp", alt: "Herna v podkroví — druhý pohled" },
  { src: "/photos/16.webp", alt: "Schodiště do podkroví" },
  { src: "/photos/17.webp", alt: "Koupelna s vanou a pračkou" },
  { src: "/photos/18.webp", alt: "Koupelna — vana a umyvadlo" },
  { src: "/photos/19.webp", alt: "Předsíň" },
  { src: "/photos/20.webp", alt: "Předsíň se schodištěm" },
  { src: "/photos/22.webp", alt: "Společné prostory — chodba" },
  { src: "/photos/23.webp", alt: "Výtah" },
  { src: "/photos/24.webp", alt: "Bytový dům — pohled zepředu" },
  { src: "/photos/25.webp", alt: "Bytový dům — pohled zezadu" },
  { src: "/photos/26.webp", alt: "Chýňské náměstí za domem" },
];

export const contact = {
  name: "Dominik Vána",
  phone: "+420 733 501 957",
  email: "dominik@digitalmakers.cz",
};

export const penb = {
  classification: "E" as const,
  primaryEnergy: 172, // kWh/m².rok
  totalDeliveredEnergy: 66, // kWh/m².rok — třída B
  buildingType: "Bytový dům",
  address: "Příhodova 936, 253 03 Chýně",
  validUntil: "04.08.2033",
  indicators: [
    { label: "Celková dodaná energie", value: 66, unit: "kWh/(m².rok)", grade: "B" },
    { label: "Vytápění", value: 33, unit: "kWh/(m².rok)", grade: "C" },
    { label: "Příprava teplé vody", value: 25, unit: "kWh/(m².rok)", grade: "C" },
    { label: "Osvětlení", value: 7, unit: "kWh/(m².rok)", grade: "C" },
    { label: "Chlazení", value: 1, unit: "kWh/(m².rok)", grade: "" },
  ],
  heatTransferCoefficient: 0.37, // W/(m².K) — třída C
  heatingDemand: 31, // kWh/(m².rok)
};

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d14.2231320!3d50.0551627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x0!5e0!3m2!1scs!2scz";
