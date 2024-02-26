import Header from "./components/Header/header";
import Result from "./components/Result/result";
import PlayButton from "./components/PlayButton/playButton";
import UserChoices from "./components/UserChoices/userChoices";

import "./styles/home.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mainContainer">
        <Result />
        <div className="flex grow flex-col">
          <UserChoices />
          <PlayButton />
        </div>
      </div>
    </main>
  );
}
