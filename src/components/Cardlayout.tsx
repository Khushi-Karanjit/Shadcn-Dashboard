// src/components/Cardlayout.tsx
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
    <Card className="max-w-md w-full rounded-2xl shadow-sm border">
      {/* Header */}
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle className="text-lg">My Cards</CardTitle>
          <CardDescription>
            Your card summary, balance, and recent transactions in one view.
          </CardDescription>
        </div>
        <button className="p-1 rounded-full border hover:bg-gray-100">
          <Plus className="w-4 h-4" />
        </button>
      </CardHeader>

      <CardContent className="space-y-4">
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
            <Apple/>
            </div>
         <div className="mt-auto flex justify-between items-center">
  <p className="tracking-widest font-semibold">ARHAM KHAN</p>
  <CardSim className="w-12 h-8 text-black bg-white rounded-md p-1" />
</div>

        </div>

        {/* Card Info */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Card Number</span>
            <span className="font-medium">•••• 5416</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Expiry Date</span>
            <span className="font-medium">06/09</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">CVC</span>
            <span className="font-medium">•••</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Spending Limit</span>
            <span className="font-medium">$62,000.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Available Balance</span>
            <span className="font-medium">$13,100.06</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
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

        {/* Recent Payments */}
        <div className="space-y-3">
          <p className="text-xs font-medium text-gray-500">RECENT PAYMENTS</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6" />
              <div>
                <p className="text-sm font-medium">Advance Payment</p>
                <p className="text-xs text-gray-500">Received via PayPal for Website Project</p>
              </div>
            </div>
            <span className="text-green-600 font-medium">+$1,200</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <p className="text-sm font-medium">ChatGPT Subscription</p>
                <p className="text-xs text-gray-500">OpenAI monthly subscription</p>
              </div>
            </div>
            <span className="text-red-500 font-medium">-$20</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Triangle className="w-6 h-6" />
              <div>
                <p className="text-sm font-medium">Vercel Team Subscription</p>
                <p className="text-xs text-gray-500">Vercel cloud hosting charges</p>
              </div>
            </div>
            <span className="text-red-500 font-medium">-$160</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Figma className="w-6 h-6" />
              <div>
                <p className="text-sm font-medium">Figma Pro</p>
                <p className="text-xs text-gray-500">Figma professional plan</p>
              </div>
            </div>
            <span className="text-red-500 font-medium">-$35</span>
          </div>
        </div>
      </CardContent>

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
