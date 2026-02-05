export default function StatBar({ value }: { value: number }) {
  return (
    <div className="border w-full h-4">
      <div className="bg-gray-400 h-full" style={{ width: `${value}%` }} />
    </div>
  );
}
