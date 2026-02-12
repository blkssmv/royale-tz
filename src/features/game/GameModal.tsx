import React from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const FrameWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
`;

const CloseBtn = styled(IconButton)`
  position: absolute !important;
  top: 10px;
  right: 10px;
  z-index: 2;
  background: white !important;
`;

export function GameModal({
  open,
  onClose,
  url,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <FrameWrap>
        <CloseBtn onClick={onClose} aria-label="close">
          <CloseIcon />
        </CloseBtn>

        <iframe
          title="Game"
          src={url}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </FrameWrap>
    </Dialog>
  );
}
