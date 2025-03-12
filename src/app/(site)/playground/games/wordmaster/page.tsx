import { WordMasterGame } from '@/components/playground/games/wordmaster';
import { BackButton } from '@/components/playground/ui/BackButton';

export default function WordMasterPage() {
  return (
    <main className="mt-20">
      <div className="container">
        <BackButton text="Back to Playground" href="/playground" />
      </div>
      <div className="container mt-8">
        <WordMasterGame />
      </div>
    </main>
  );
}
