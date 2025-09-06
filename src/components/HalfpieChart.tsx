
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Train, MoreHorizontal } from "lucide-react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

export default function ExpenseSummary() {
  const data = [
    { name: "Groceries", value: 380, color: "#374151" },
    { name: "Transport", value: 120, color: "#9ca3af" },
    { name: "Other", value: 80, color: "#d1d5db" },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)

  const CustomTooltip = ({ active }: any) => {
    if (active) {
      return (
        <div className="rounded-lg bg-white px-3 py-2 shadow-md border">
          {data.slice().reverse().map((entry, index) => (
            <div
              key={`item-${index}`}
              className="flex items-center justify-between gap-4 text-sm mb-1 last:mb-0"
            >
              {/* Color box */}
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-gray-600">{entry.name}</span>
              </div>

              {/* Value */}
              <span className="font-medium text-gray-900">{entry.value}</span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }


  return (
    <Card className="w-full rounded-2xl shadow-sm border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Expense Summary</CardTitle>
      </CardHeader>
      <div className="px-5">
        <Separator />
      </div>
      <CardContent className="space-y-8">
        <div className="relative flex items-center justify-center h-32">
          <ResponsiveContainer width={240} height={160}>
            <PieChart>
              <Pie
                data={data}
                cx={120}
                cy={120}
                startAngle={180}
                endAngle={0}
                innerRadius={80}
                outerRadius={100}
                paddingAngle={3}
                dataKey="value"
                nameKey="name"
                cornerRadius={4}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} wrapperStyle={{ zIndex: 50 }} />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute bottom-3 text-center">
            <div className="text-3xl font-bold text-gray-900">${total}</div>
            <div className="text-gray-500 text-xs">Spent</div>
          </div>
        </div>
        <Separator />
        

        {/* Bottom grid */}
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {/* Groceries */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              GROCERIES
            </div>
            <div className="text-xl font-semibold text-gray-900">
              ${data[0].value}
            </div>
          </div>

          {/* Transport */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Train className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              TRANSPORT
            </div>
            <div className="text-xl font-semibold text-gray-900">
              ${data[1].value}
            </div>
          </div>

          {/* Other */}
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <MoreHorizontal className="w-6 h-6 text-gray-600" />
              </div>
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              OTHER
            </div>
            <div className="text-xl font-semibold text-gray-900">
              ${data[2].value}
            </div>
          </div>
        </div>

        <div className="text-left text-gray-500 text-sm">
          Weekly spending is capped at $2,000
        </div>
      </CardContent>
    </Card>
  )
}

