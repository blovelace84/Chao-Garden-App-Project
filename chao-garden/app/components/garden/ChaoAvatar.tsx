type ChaoAvatarProps = {
  name: string;
  mood?: "happy" | "neutral" | "sad";
};

const moodMap = {
  happy: "😊",
  neutral: "😐",
  sad: "😢",
};

export default function ChaoAvatar({ name, mood = "happy" }: ChaoAvatarProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Chao Body */}
      <div className="text-7xl animate-bounce">{/* chao goes here */}</div>

      {/* Name */}
      <p className="font-semibold mt-2">{name}</p>

      {/* Mood */}
      <p className="text-xl">{moodMap[mood]}</p>
    </div>
  );
}
