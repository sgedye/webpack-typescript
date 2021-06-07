import australia from "../assets/images/australia.png";
import infinity from "../assets/svg/infinity.svg";

export const Test: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <h2>{process.env.NODE_ENV}</h2>
      <img src={australia} alt="asdf" width={300} height={300} />
      <img src={infinity} alt="fff" />
    </div>
  );
};
