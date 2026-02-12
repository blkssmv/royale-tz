import React from "react";
import { AppProviders } from "./providers/AppProviders";
import { MainBanner } from "../features/main/MainBanner";
import { GameModal } from "../features/game/GameModal";
import { Geo, GEO_TO_LANG } from "./config/geo";
import i18n from "i18next";
import { Footer } from "../features/footer/Footer";

const GAME_URL =
  "https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en";

export default function App() {
  const [geo, setGeo] = React.useState<Geo>("EN");
  const [isGameOpen, setIsGameOpen] = React.useState(false);

  React.useEffect(() => {
    i18n.changeLanguage(GEO_TO_LANG[geo]);
  }, [geo]);

  return (
    <AppProviders>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <MainBanner onOpenGame={() => setIsGameOpen(true)} />

        <Footer geo={geo} onGeoChange={setGeo} />
      </div>

      <GameModal
        open={isGameOpen}
        onClose={() => setIsGameOpen(false)}
        url={GAME_URL}
      />
    </AppProviders>
  );
}
