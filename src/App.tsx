import { Test } from "./components/Test";
import gym from "./assets/images/gym.jpg";

export const App: React.FC<Record<string, never>> = () => {
  return (
    <div>
      <h1>this is a heading</h1>
      <img src={gym} alt="s" width={500} />
      <Test />
    </div>
  );
};
