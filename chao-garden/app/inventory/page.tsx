"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Item = {
  id: string;
  item_name: string;
  category: string;
  quantity: number;
};

const itemEffects: Record<string, any> = {
  Apple: { stamina: 2 },
  Banana: { run: 1 },
  Carrot: { fly: 2 },
};

export default function InventoryPage() {
  const [tab, setTab] = useState("food");
  const [items, setItems] = useState<Item[]>([]);

  // TEMP selected chao
  const activeChaoId = "YOUR_CHAO_ID";

  async function fetchItems() {
    const { data } = await supabase
      .from("inventory")
      .select("*")
      .eq("category", tab);

    if (data) setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, [tab]);

  // ✅ PUT useItem HERE
  async function useItem(item: Item) {
    const effect = itemEffects[item.item_name];

    if (!effect) return;
    if (item.quantity <= 0) return;

    // Update chao stats
    await supabase.from("chaos").update(effect).eq("id", activeChaoId);

    // Reduce quantity
    await supabase
      .from("inventory")
      .update({
        quantity: item.quantity - 1,
      })
      .eq("id", item.id);

    fetchItems();
  }

  return (
    <div>
      <h1>Inventory</h1>

      {items.map((item) => (
        <div key={item.id}>
          {item.item_name} x{item.quantity}
          <button onClick={() => useItem(item)}>Use</button>
        </div>
      ))}
    </div>
  );
}
