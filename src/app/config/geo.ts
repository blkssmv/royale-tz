export type Geo = "KZ" | "EN" | "TR" | "DE" | "ES" | "BE";

import flagKZ from "../../shared/assets/icons/flag_kz.svg";
import flagUSA from "../../shared/assets/icons/flag_usa.svg";
import flagTR from "../../shared/assets/icons/flag_tr.svg";
import flagGR from "../../shared/assets/icons/flag_gr.svg";
import flagES from "../../shared/assets/icons/flag_es.svg";
import flagBE from "../../shared/assets/icons/flag_be.svg";

export const GEO_OPTIONS: { value: Geo; label: string; flag: string }[] = [
  { value: "KZ", label: "Kazakhstan", flag: flagKZ },
  { value: "EN", label: "USA", flag: flagUSA },
  { value: "TR", label: "Turkey", flag: flagTR },
  { value: "DE", label: "Germany", flag: flagGR },
  { value: "ES", label: "Spain", flag: flagES },
  { value: "BE", label: "Belarus", flag: flagBE },
];

export const GEO_TO_LANG: Record<Geo, string> = {
  KZ: "kk",
  EN: "en",
  TR: "tr",
  DE: "de",
  ES: "es",
  BE: "be",
};
