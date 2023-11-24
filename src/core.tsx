import React, { useEffect, useRef, useState } from "react";
import LoadingCircle from "@/components/loadingCircle";
import Globe from "@/components/globe";
import FingerPrintPlayer from "@/components/fingerprint";
import About from "./about";
import "./core.css";

const init = false;

const Screen = React.memo(() => {
  const [enter, setEnter] = useState(init);
  const [accelerate, setAccelerate] = useState(init);

  const timer = useRef<number | null>(null);
  const pressingSec = useRef<number>(0);

  const timerCB = () => {
    if (pressingSec.current === 1) {
      setAccelerate(false);
      setEnter(true);
    } else {
      pressingSec.current = pressingSec.current + 1;
      timer.current = window.setTimeout(timerCB, 500);
    }
  };

  const timerStar = () => {
    timer.current = window.setTimeout(timerCB, 500);
  };

  const pressing = () => {
    setAccelerate(true);
    timerStar();
  };
  const release = () => {
    window.clearTimeout(timer.current as number);
    pressingSec.current = 0;
    setAccelerate(false);
  };

  return (
    <>
      <Globe accelerate={accelerate} enter={enter} />

      <div className={`title glitch title-font ${enter && "title-enter"}`}>
        <div className="stroke">RETROVORTEX FOUNDATION</div>
        <div className="title-sub">founded by ve</div>
      </div>

      <div className={`center-bg ${enter && "center-bg-show"}`}></div>
      <About enter={enter} />

      <div className="footer">
        {!enter && (
          <div className="finger-print-wrap">
            <div
              className={`finger-print ${accelerate && "finger-print-press"}`}
              onTouchStart={() => {
                pressing();
              }}
              onTouchEnd={() => {
                release();
              }}
              onMouseDown={() => {
                pressing();
              }}
              onMouseUp={() => {
                release();
              }}
            >
              <FingerPrintPlayer />
            </div>
          </div>
        )}
      </div>
    </>
  );
});

const Core = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return <>{loading ? <Screen /> : <LoadingCircle />}</>;
};

export default Core;
