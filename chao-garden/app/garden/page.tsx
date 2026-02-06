import Link from "next/link";

export default function GardenPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">🌱 Chao Garden</h1>

      {/* Garden Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 h-72 flex items-center justify-center">
        <p className="text-gray-500">Your Chao are playing here 🐣</p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Link href="/chao/1">
          <button className="w-full bg-yellow-300 hover:bg-yellow-400 rounded-xl p-4 font-semibold shadow">
            View Chao
          </button>
        </Link>

        <Link href="/inventory">
          <button className="w-full bg-pink-300 hover:bg-pink-400 rounded-xl p-4 font-semibold shadow">
            Inventory
          </button>
        </Link>
      </div>
    </div>
  );
}
