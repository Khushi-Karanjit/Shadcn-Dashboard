import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Plus,
  Apple,
  CardSim,
  CreditCard,
  Bot,
  Triangle,
  Figma,
} from "lucide-react"

function Cardlayout() {
  return (
    <Card className="w-full rounded-2xl shadow-sm border">

      {/* Header */}
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-lg">My Cards</CardTitle>
          <CardDescription>
            Your card summary, balance, and recent transactions in one view.
          </CardDescription>
        </div>
        <button className="p-1 rounded-sm border hover:bg-gray-100">
          <Plus className="w-4 h-4" />
        </button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1 text-sm font-medium">
          <button className="flex-1 px-3 py-1 bg-white rounded-md shadow-sm">
            Virtual
          </button>
          <button className="flex-1 px-3 py-1 text-gray-500">Physical</button>
        </div>

        {/* Card Preview */}
        <div className="bg-black text-white rounded-xl p-6 flex flex-col justify-between h-40 relative">
          <div className="absolute top-4 left-4 text-3xl">
            <Apple />
          </div>
          <div className="mt-auto flex justify-between items-center">
            <p className="tracking-widest font-semibold">ARHAM KHAN</p>
            <CardSim className="w-12 h-8 text-black bg-white rounded-md p-1" />
          </div>
        </div>

        {/* Card Info */}
        <div className="space-y-2 text-sm">
          {[
            ["Card Number", "•••• •••• 5416"],
            ["Expiry Date", "06/09"],
            ["CVC", "•••"],
            ["Spending Limit", "$62,000.00"],
            ["Available Balance", "$13,100.06"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="text-gray-500">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-wrap">
          <button className="flex-1 py-2 border rounded-md text-sm flex items-center justify-center gap-1 hover:bg-gray-100">
            Freeze Card
          </button>
          <button className="flex-1 py-2 border rounded-md text-sm hover:bg-gray-100">
            Set Limit
          </button>
          <button className="flex-1 py-2 border rounded-md text-sm hover:bg-gray-100">
            More
          </button>
        </div>
<hr></hr>
        {/* Recent Payments */}
        <div className="space-y-3">
          <p className="text-l font-medium text-gray-500">RECENT PAYMENTS</p>

          {[
            {
              icon: CreditCard,
              title: "Advance Payment",
              desc: "Received via PayPal for Website Project",
              amount: "+$1,200",
              color: "text-green-600",
            },
            {
              icon: Bot,
              title: "ChatGPT Subscription",
              desc: "OpenAI monthly subscription",
              amount: "-$20",
              color: "text-red-500",
            },
            {
              icon: Triangle,
              title: "Vercel Team Subscription",
              desc: "Vercel cloud hosting charges",
              amount: "-$160",
              color: "text-red-500",
            },
            {
              icon: Figma,
              title: "Figma Pro",
              desc: "Figma professional plan",
              amount: "-$35",
              color: "text-red-500",
            },
          ].map(({ icon: Icon, title, desc, amount, color }) => (
            <div key={title} className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <Icon className="w-6 h-6 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{title}</p>
                  <p className="text-xs text-gray-500 truncate">{desc}</p>
                </div>
              </div>
              <span className={`${color} font-medium shrink-0 ml-2`}>
                {amount}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
<br></br>
      {/* Footer */}
      <CardFooter>
        <button className="w-full py-2 border rounded-md text-sm font-medium hover:bg-gray-100">
          View All Payments
        </button>
      </CardFooter>
    </Card>
  )
}

export default Cardlayout
