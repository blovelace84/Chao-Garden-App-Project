import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2"> Chao Garden</h1>

      <p className="text-gray-600 mb-8 text-center">
        Raise, feed, and play with your Chao!
      </p>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="space-y-4">
          <Link href="/garden">
            <button className="w-full bg-green-300 hover:bg-green-400 transition rounded-xl p-4 font-semibold shadow">
              🌱 Enter Garden
            </button>
          </Link>

          <Link href="/inventory">
            <button className="w-full bg-pink-300 hover:bg-pink-400 transition rounded-xl p-4 font-semibold shadow">
              🎒 Inventory
            </button>
          </Link>

          <Link href="/chao/1">
            <button className="w-full bg-yellow-300 hover:bg-yellow-400 transition rounded-xl p-4 font-semibold shadow">
              View Chao
            </button>
          </Link>
        </div>
      </div>

      {/* Footer vibe */}
      <p className="text-sm text-gray-500 mt-8">
        Your tiny friends are waiting 💛
      </p>
    </main>
  );
}
