import React from "react";
import styled from "styled-components";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Geo, GEO_OPTIONS } from "../../app/config/geo";
import mascotDefault from "../../shared/assets/mascot.png";
import mascotKz from "../../shared/assets/mascots/mascot_kz.png";
import mascotUsa from "../../shared/assets/mascots/mascot_usa.png";
import mascotTr from "../../shared/assets/mascots/mascot_tr.png";
import mascotGr from "../../shared/assets/mascots/mascot_gr.png";
import mascotEs from "../../shared/assets/mascots/mascot_es.png";
import mascotBe from "../../shared/assets/mascots/mascot_be.png";
import logoImg from "../../shared/assets/logo.png";
import igIcon from "../../shared/assets/instagram.png";
import tgIcon from "../../shared/assets/telegram.png";
import xIcon from "../../shared/assets/x.png";
import mailIcon from "../../shared/assets/mail.png";
import downloadIcon from "../../shared/assets/icons/download.svg";
import icon18 from "../../shared/assets/icons/18+.svg";
import licenseIcon from "../../shared/assets/icons/license.svg";

const FooterWrap = styled.footer`
  background: linear-gradient(90deg, #0b0f25 0%, #0d1634 45%, #0b2d56 100%);
  padding: 60px 32px;
`;

const Inner = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MascotWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  width: 288px;
  height: 288px;
  margin-right: 64px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Mascot = styled.img`
  width: 288px;
  height: 288px;
  object-fit: cover;
  @media (max-width: 1440px) {
    width: 240px;
    height: 240px;
    margin-right: 40px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Card = styled.div`
  background: rgba(9, 12, 30, 0.6);
  border: 1px dashed rgba(255, 156, 67, 0.6);
  border-radius: 16px;

  padding: 24px;
  display: flex;
  flex-direction: column !important;
  flex-wrap: nowrap;
  min-width: 390px;
  align-items: center;
  min-height: 294px;
  margin-right: 64px;
  @media (max-width: 1440px) {
    margin-right: 40px;
  }
  @media (max-width: 1200px) {
    margin-bottom: 52px;
    margin-right: 0;
  }

  @media (max-width: 375px) {
    justify-self: center;
    min-width: 320px;
    padding: 24px 4px;
  }
`;

const Logo = styled.img`
  width: 175px;
  height: 80px;
  margin-bottom: 24px;
`;

const CardText = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
`;

const CardTitle = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 860;
  color: #ffffff;
`;

const CardSub = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: rgba(186, 186, 186, 1);
`;

const InstallBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  font-size: 16px;
  line-height: 22px;

  background: linear-gradient(90deg, #ff8d6b 0%, #ffba47 100%);

  color: #fff;
  font-weight: 700;
  width: 250px;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  flex-shrink: 0;

  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #ff9a7a 0%, #ffc157 100%);
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const RightRow = styled.div`
  padding-top: 32px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin-left: 0;
    padding-top: 0;
  }
`;

const LeftRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  @media (max-width: 1200px) {
    flex-direction: row;
    width: 100%;
    padding: 0 250px;
    margin-top: 52px;
    gap: 24px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Badge18 = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  gap: 12px;
  color: rgba(251, 251, 251, 0.7);
  @media (max-width: 1200px) {
    flex-direction: column;
    flex: 1;
  }
`;

const BadgeIcon = styled.img`
  width: 58px;
  height: 58px;
`;

const Cert = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-line;
  font-size: 16px;
  line-height: 20px;
  gap: 12px;
  color: rgba(251, 251, 251, 0.7);
  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
    flex: 1;
  }
`;

const CertIconImg = styled.img`
  width: 58px;
  height: 58px;
`;

const RightBottomRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 10px;
  @media (max-width: 1200px) {
    text-align: center;
    align-items: center;
    margin-top: 60px;
  }
`;

const SocialLabel = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialBtn = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SocialIcon = styled.img`
  width: 52px;
  height: 52px;
`;

export function Footer({
  geo,
  onGeoChange,
}: {
  geo: Geo;
  onGeoChange: (geo: Geo) => void;
}) {
  const { t } = useTranslation();

  const MASCOT_MAP: Record<Geo, string> = {
    KZ: mascotKz,
    EN: mascotUsa,
    TR: mascotTr,
    DE: mascotGr,
    ES: mascotEs,
    BE: mascotBe,
  };

  return (
    <FooterWrap>
      <Inner>
        <MascotWrapper>
          <Mascot src={MASCOT_MAP[geo] || mascotDefault} alt="mascot" />
        </MascotWrapper>

        <Card>
          <Logo src={logoImg} alt="logo" />
          <CardText>
            <CardTitle>{t("title")}</CardTitle>
            <CardSub>{t("subtitle")}</CardSub>
          </CardText>

          <InstallBtn type="button">
            <img src={downloadIcon} alt="download" width={24} height={24} />
            {t("download")}
          </InstallBtn>
        </Card>

        <Right>
          <LeftRow>
            <Badge18>
              <BadgeIcon src={icon18} alt="18+" />
              {t("only18")}
            </Badge18>
            <Cert>
              <CertIconImg src={licenseIcon} alt="license" />
              {t("cert")}
            </Cert>
          </LeftRow>

          <RightRow>
            <FormControl size="small" sx={{ minWidth: 180, minHeight: 56 }}>
              <Select
                value={geo}
                onChange={(e) => onGeoChange(e.target.value as Geo)}
                renderValue={(selected) => {
                  const sel = selected as Geo;
                  const opt = GEO_OPTIONS.find((o) => o.value === sel);
                  if (!opt) return "";
                  return (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <img
                        src={opt.flag}
                        alt={opt.label}
                        style={{
                          width: 24,
                          height: 24,
                          objectFit: "cover",
                          borderRadius: "999px",
                        }}
                      />
                      <span>{opt.label}</span>
                    </div>
                  );
                }}
                sx={{
                  height: "100%",
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.12)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  ".MuiSvgIcon-root": { color: "rgba(255,255,255,0.7)" },
                }}
              >
                {GEO_OPTIONS.map((x) => (
                  <MenuItem key={x.value} value={x.value}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <img
                        src={x.flag}
                        alt={x.label}
                        style={{
                          width: 24,
                          height: 24,
                          objectFit: "cover",
                          borderRadius: "999px",
                        }}
                      />
                      <span>{x.label}</span>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <RightBottomRow>
              <SocialLabel>{t("social")}:</SocialLabel>
              <Socials>
                <SocialBtn href="#" aria-label="instagram">
                  <SocialIcon src={igIcon} alt="ig" />
                </SocialBtn>

                <SocialBtn
                  href="https://t.me/blkssmv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="telegram"
                >
                  <SocialIcon src={tgIcon} alt="telegram" />
                </SocialBtn>
                <SocialBtn href="#" aria-label="x">
                  <SocialIcon src={xIcon} alt="x" />
                </SocialBtn>
                <SocialBtn href="#" aria-label="email">
                  <SocialIcon src={mailIcon} alt="mail" />
                </SocialBtn>
              </Socials>
            </RightBottomRow>
          </RightRow>
        </Right>
      </Inner>
    </FooterWrap>
  );
}
