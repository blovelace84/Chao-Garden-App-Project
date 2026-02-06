import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import StatBar from "@/app/components/ui/Statbar";

export default function ChaoDetail() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <Card>
        <h2 className="text-xl font-bold text-center mb-4">🐣 My Chao</h2>

        <div className="text-6xl text-center mb-4">🐥</div>

        <StatBar label="Swim" value={60} color="blue" />
        <StatBar label="Fly" value={40} color="pink" />
        <StatBar label="Run" value={75} color="yellow" />

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button color="yellow">Feed</Button>
          <Button color="blue">Pet</Button>
        </div>
      </Card>
    </div>
  );
}
