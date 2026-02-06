export default function ChaoDetail() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">🐣 Your Chao</h1>

      {/* Chao Card */}
      <div className="bg-white rounded-2xl shadow p-6 text-center">
        <div className="text-6xl mb-2">🐥</div>

        <p className="text-gray-500 mb-4">Happy & energetic!</p>

        {/* Stats */}
        <div className="space-y-2 text-left">
          <Stat label="Swim" value={60} />
          <Stat label="Fly" value={40} />
          <Stat label="Run" value={30} />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3 mt-4">
          <button className="bg-yellow-200 px-4 py-2 rounded-lg">Feed</button>
          <button className="bg-blue-200 px-4 py-2 rounded-lg">Pet</button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-sm">{label}</p>
      <div className="bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-400 h-3 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
