import { ReactNode } from "react";

export default function GardenArea({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        relative
        bg-linear-to-b
        from-green-200
        to-green-400
        rounded-3xl
        shadow-inner
        p-6
        min-h-100
        flex
        items-center
        justify-center
      "
    >
      {children}

      {/* Decorative grass */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-green-500 rounded-b-3xl" />
    </div>
  );
}
