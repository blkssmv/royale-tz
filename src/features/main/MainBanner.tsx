import { Button } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import bgStars from "../../shared/assets/bg-stars.png";
import slotImg from "../../shared/assets/slot.png";
import logoImg from "../../shared/assets/logo.png";

const Wrapper = styled.section`
  flex: 1;
  background: url(${bgStars}) center/cover no-repeat;
  min-height: 944px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1440px) {
    min-height: 910px;
  }
  @media (max-width: 1200px) {
    min-height: 854px;
  }
`;

const CenterBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 263px;
  height: 120px;
  margin-bottom: 48px;
`;

const Slot = styled.img`
  width: 326px;
  height: 200px;
  margin-bottom: 32px;
`;

const PlayButton = styled(Button)`
  && {
    width: 358px;
    height: 56px;
    background: linear-gradient(90deg, #ff8d6b 0%, #ffba47 100%);

    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    border-radius: 8px;

    &:hover {
      background: linear-gradient(90deg, #ff9a7a 0%, #ffc157 100%);
    }
    @media (max-width: 375px) {
      width: 343px;
    }
  }
`;

export function MainBanner({ onOpenGame }: { onOpenGame: () => void }) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CenterBlock>
        <Content>
          <Logo src={logoImg} alt="logo" />
          <Slot src={slotImg} alt="slot" />

          <PlayButton onClick={onOpenGame}>{t("openGame")}</PlayButton>
        </Content>
      </CenterBlock>
    </Wrapper>
  );
}
