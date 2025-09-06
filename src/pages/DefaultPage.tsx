import { ChartAreaInteractive } from "@/components/AreaChart";
import StatsCards from "@/components/StatsCard";

export default function DefaultPage() {
  return (
    <div className="space-y-6">
      <StatsCards />
      <ChartAreaInteractive />
    </div>
  )
}