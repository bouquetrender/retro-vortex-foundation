import { useEffect, useRef } from "react";
import "./index.css";

interface Props {
  accelerate?: boolean;
  enter?: boolean;
}

const Globe = ({ accelerate, enter }: Props) => {
  const globeRef = useRef<HTMLDivElement>(null);
  const currentRotation = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number | null = null;
    if (!globeRef.current) return;
    const globeElement = globeRef.current;

    const second = accelerate && !enter ? 4 : 25; // 完成一圈旋转的秒数
    const totalRotation = 360; // 总旋转角度
    const totalFrames = second * 60; // 总帧数
    const degreesPerFrame = totalRotation / totalFrames; // 每一帧转动的角度

    let rotatoin = currentRotation.current;

    function animate() {
      if (rotatoin < totalRotation) {
        rotatoin += degreesPerFrame;
        globeElement.style.transform = `rotateY(-${rotatoin}deg)`;
        if (rotatoin >= 360) rotatoin = 0;
        currentRotation.current = rotatoin;
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [accelerate, enter]);

  return (
    <div className="scene">
      <div className="scene-inner">
        <div ref={globeRef} className={`globe ${enter ? "globe-expend" : "globe-size"}`}>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
          <span className="ring"></span>
        </div>
      </div>
    </div>
  );
};

export default Globe;
