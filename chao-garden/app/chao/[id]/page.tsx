export default function ChaoDetail() {
  return (
    <div className="p-4 space-y-4">
      <div className="border p-2">⬅️ Back | Chao Name</div>

      <div className="border h-40 flex items-center justify-center">
        Chao Display
      </div>

      <div className="space-y-2">
        <div>Swim</div>
        <div className="border h-4" />
        <div>Fly</div>
        <div className="border h-4" />
      </div>

      <div className="border p-4 flex justify-around">
        <button className="border px-4 py-2">Feed</button>
        <button className="border px-4 py-2">Train</button>
        <button className="border px-4 py-2">Pet</button>
      </div>
    </div>
  );
}
