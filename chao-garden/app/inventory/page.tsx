"use client";

import { useState } from "react";

const mockItems = [
  { id: 1, name: "🍎 Apple", qty: 5 },
  { id: 2, name: "🍌 Banana", qty: 3 },
  { id: 3, name: "🥕 Carrot", qty: 2 },
];

export default function InventoryPage() {
  const [items] = useState(mockItems);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎒 Inventory</h1>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <div className="text-xl">{item.name}</div>

            <p className="text-gray-500">x{item.qty}</p>

            <button className="mt-2 bg-green-200 hover:bg-green-300 px-3 py-1 rounded-lg">
              Use
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
