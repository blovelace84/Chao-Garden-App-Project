type StatBarProps = {
  label: string;
  value: number; // 0–100
  color?: "green" | "blue" | "pink" | "yellow";
};

const barColors = {
  green: "bg-green-400",
  blue: "bg-blue-400",
  pink: "bg-pink-400",
  yellow: "bg-yellow-400",
};

export default function StatBar({
  label,
  value,
  color = "green",
}: StatBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className={`
            h-4
            rounded-full
            transition-all
            duration-500
            ${barColors[color]}
          `}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
