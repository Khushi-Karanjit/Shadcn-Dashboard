import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ArrowDownLeft, ArrowUpRight, Calendar } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { m: "Jan", income: 11400, expenses: 4920, scheduled: 2520 },
  { m: "Feb", income: 12000, expenses: 5000, scheduled: 2400 },
  { m: "Mar", income: 12500, expenses: 5100, scheduled: 2600 },
  { m: "Apr", income: 11800, expenses: 4700, scheduled: 2300 },
  { m: "May", income: 12200, expenses: 5200, scheduled: 2500 },
  { m: "Jun", income: 13000, expenses: 5400, scheduled: 2700 },
  { m: "Jul", income: 12800, expenses: 5300, scheduled: 2650 },
  { m: "Aug", income: 13100, expenses: 5500, scheduled: 2750 },
  { m: "Sep", income: 12900, expenses: 5200, scheduled: 2600 },
  { m: "Oct", income: 13500, expenses: 5600, scheduled: 2800 },
  { m: "Nov", income: 13200, expenses: 5400, scheduled: 2700 },
  { m: "Dec", income: 13800, expenses: 5700, scheduled: 2900 },
]

// Custom tooltip with color boxes
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow border text-xs">
        {payload.map((item: any) => (
          <div key={item.name} className="flex items-center gap-2 mb-1 last:mb-0">
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-gray-700">{item.name}:</span>
            <span className="font-medium text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function FinancialOverviewCard() {
  return (
    <Card className="w-full rounded-2xl shadow-sm border mb-3">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-base">Financial Overview</CardTitle>
          <p className="text-m text-muted-foreground">
            Track your your income, expenses and scheduled amount at a glance.
          </p>
        </div>
        <Select defaultValue="Last Year">
          <SelectTrigger className="w-[100px] h-8 text-xs">
            <SelectValue placeholder="Last Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last Year">Last Year</SelectItem>
            <SelectItem value="Last Month">Last Month</SelectItem>
            <SelectItem value="Year to Date">Year to Date</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-4 pt-0">
        {/* Metrics Section */}
        <div className="flex items-center justify-between text-sm divide-x divide-gray-200 ">
          {/* Income */}
          <div className="flex items-center space-x-2 px-10 pr-10">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted">
              <ArrowDownLeft className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[11px] tracking-wider text-muted-foreground">INCOME</div>
              <div className="text-lg font-semibold">$114,000</div>
            </div>
          </div>

          {/* Expenses */}
          <div className="flex items-center space-x-2 px-5 pr-20">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted">
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[11px] tracking-wider text-muted-foreground">EXPENSES</div>
              <div className="text-lg font-semibold">$49,200</div>
            </div>
          </div>

          {/* Scheduled */}
          <div className="flex items-center space-x-2 pr-10">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted">
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[11px] tracking-wider text-muted-foreground">SCHEDULED</div>
              <div className="text-lg font-semibold">$25,200</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Chart Section */}
        <div className="h-[200px] sm:h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
              <XAxis dataKey="m" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.05)" }} />
              {/* Bars without Legend */}
              <Bar dataKey="income" stackId="a" fill="hsl(220 10% 50%)" />
              <Bar dataKey="expenses" stackId="a" fill="hsl(220 10% 60%)" />
              <Bar dataKey="scheduled" stackId="a" fill="hsl(220 10% 70%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
