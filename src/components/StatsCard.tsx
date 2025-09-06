import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    change: "+12.5%",
    positive: true,
    subtitle: "Trending up this month",
    description: "Visitors for the last 6 months",
  },
  {
    title: "New Customers",
    value: "1,234",
    change: "-20%",
    positive: false,
    subtitle: "Down 20% this period",
    description: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    change: "+12.5%",
    positive: true,
    subtitle: "Strong user retention",
    description: "Engagement exceed targets",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    change: "+4.5%",
    positive: true,
    subtitle: "Steady performance increase",
    description: "Meets growth projections",
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.positive ? TrendingUp : TrendingDown

        return (
          <Card key={stat.title} className="p-6 shadow-sm" 
           style={{
              background:
                "linear-gradient(to top, oklab(0.205 0 0 / 0.05) 0px, oklch(1 0 0) 100%)",
            }}>
                
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center justify-between m-0">
                <span className="text-sm text-gray-600">{stat.title}</span>
                <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg border-1 bg-white text-black">
                  <Icon className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                {stat.value}
              </div>

              <div className="text-sm font-semibold flex items-center gap-1 mb-1 text-black">
                {stat.subtitle}
                <Icon className="w-3 h-3" />
              </div>

              <div className="text-sm text-gray-500">{stat.description}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
