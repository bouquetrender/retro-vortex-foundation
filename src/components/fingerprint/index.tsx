import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import fpLottieJSON from "./fp.json";
import "./index.css";

const FingerPrintPlayer = React.memo(() => {
  return (
    <>
      <Player
        className="finger-player"
        speed={2.5}
        hover
        loop
        src={fpLottieJSON}
      />
    </>
  );
});

export default FingerPrintPlayer;
