export default function GardenPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="border p-4 flex justify-between">
        <div>Profile</div>
        <div>Rings</div>
        <div>Settings</div>
      </div>

      <div className="flex-1 border m-4 flex items-center justify-center">
        Garden Area
      </div>

      <div className="border p-4 flex justify-around">
        <button className="border px-4 py-2">Feed</button>
        <button className="border px-4 py-2">Pet</button>
        <button className="border px-4 py-2">Play</button>
      </div>
    </div>
  );
}
