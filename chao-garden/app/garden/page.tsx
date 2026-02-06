"use client";

import GardenArea from "@/app/components/garden/GardenArea";
import ChaoAvatar from "@/app/components/garden/ChaoAvatar";
import ActionBar from "@/app/components/garden/ActionBar";

export default function GardenPage() {
  return (
    <main className="p-6 max-w-md mx-auto space-y-6">
      <GardenArea>
        <ChaoAvatar name="Bubbles" mood="happy" />
      </GardenArea>

      <ActionBar
        onFeed={() => alert("Feeding!")}
        onPet={() => alert("Petting!")}
        onPlay={() => alert("Playing!")}
      />
    </main>
  );
}
