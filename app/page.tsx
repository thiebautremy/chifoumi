import PlayButton from "./components/PlayButton/playButton";
import UserChoices from "./components/userChoices/userChoices";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-xl py-5">Chifoumi</h1>
      <UserChoices />
      <PlayButton />
    </main>
  );
}
