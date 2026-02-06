"use client";
import Button from "@/app/components/ui/Button";

type ActionBarProps = {
  onFeed?: () => void;
  onPet?: () => void;
  onPlay?: () => void;
};

export default function ActionBar({ onFeed, onPet, onPlay }: ActionBarProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex gap-3">
      <Button color="yellow" onClick={onFeed}>
        Feed
      </Button>
      <Button color="pink" onClick={onPet}>
        Pet
      </Button>
      <Button color="yellow" onClick={onPlay}>
        Play
      </Button>
    </div>
  );
}
