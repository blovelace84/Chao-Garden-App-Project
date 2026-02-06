import Button from "@/app/components/ui/Button";

type Rarity = "common" | "rare" | "legendary";

type ItemCardProps = {
  name: string;
  icon: string; // emoji or image path
  quantity: number;
  rarity?: Rarity;
  onUse?: () => void;
};

const rarityStyles = {
  common: "border-gray-300",
  rare: "border-blue-400 shadow-blue-200",
  legendary: "border-yellow-400 shadow-yellow-200",
};

export default function ItemCard({
  name,
  icon,
  quantity,
  rarity = "common",
  onUse,
}: ItemCardProps) {
  const isEmpty = quantity <= 0;

  return (
    <div
      className={`
        relative
        bg-white
        rounded-2xl
        shadow-md
        p-4
        flex flex-col items-center
        border-2
        ${rarityStyles[rarity]}
        ${isEmpty ? "opacity-50" : ""}
        transition
        hover:scale-105
      `}
    >
      {/* Quantity badge */}
      <div className="absolute top-2 right-2 bg-gray-200 text-xs px-2 py-1 rounded-full">
        x{quantity}
      </div>

      {/* Icon */}
      <div className="text-4xl mb-2">{icon}</div>

      {/* Name */}
      <p className="font-semibold text-center">{name}</p>

      {/* Use button */}
      <div className="mt-3 w-full">
        <Button color="green" onClick={onUse}>
          Use
        </Button>
      </div>
    </div>
  );
}
