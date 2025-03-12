import { BackButton } from '@/components/playground/ui/BackButton';
import { Game } from '@/components/playground/games/wordmaster/Game';

export default function WordMasterPlayPage() {
  return (
    <main className="mt-20">
      <div className="container">
        <BackButton text="Back to Instructions" href="/playground/games/wordmaster" />
      </div>
      <div className="container mt-8">
        <div className="flex justify-center">
          <Game />
        </div>
      </div>
    </main>
  );
}
