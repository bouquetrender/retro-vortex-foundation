import "./index.css";

const LoadingCircle = () => {
  return (
    <div className="center-wrap">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingCircle;
