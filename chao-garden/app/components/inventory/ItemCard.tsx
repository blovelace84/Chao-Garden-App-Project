export default function ItemCard({ name, qty }: { name: string; qty: number }) {
  return (
    <div className="border p-4 flex flex-col items-center">
      <div className="h-12 w-12 border mb-2" />
      <div>{name}</div>
      <div>x{qty}</div>
      <button onClick={() => useItem(item)}></button>
    </div>
  );
}
