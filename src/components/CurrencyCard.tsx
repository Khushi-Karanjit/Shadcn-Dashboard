import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeftRight, RefreshCw } from "lucide-react" 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CurrencyExchange() {
  return (
    <Card className="w-full rounded-2xl shadow-sm border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Currency Exchange</CardTitle>
      </CardHeader>

      {/* ↓ smaller vertical gaps */}
      <CardContent className="space-y-4">
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            
            {/* ↓ reduced padding */}
            <div className="grid grid-cols-3 items-center p-3 text-center">
              <div className="flex justify-center">
                <Select>
                  <SelectTrigger className="w-[70px] h-8 text-sm">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                      <SelectItem value="inr">INR</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-center">
                <ArrowLeftRight className="w-4 h-4 text-gray-400" />
              </div>

              <div className="flex justify-center">
                <Select>
                  <SelectTrigger className="w-[70px] h-8 text-sm">
                    <SelectValue placeholder="EUR" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                      <SelectItem value="inr">INR</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Separator />

            {/* ↓ reduced vertical padding */}
            <div className="text-center space-y-1 py-4">
              <div className="text-3xl font-semibold text-gray-900">$100.00</div>
              <div className="text-gray-500 text-sm">
                Available: <span className="font-medium">$13,100.06</span>
              </div>
            </div>
            
            <Separator />

            <div className="text-center bg-gray-50 py-2 -mx-px -mb-px rounded-b-xl text-sm">
              <div className="text-gray-600">
                1 USD = <span className="font-semibold">0.85 EUR</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ↓ reduced space between fee items */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Tax (2%)</span>
            <span className="font-medium">$2.00</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Exchange Fee (1%)</span>
            <span className="font-medium">$1.00</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-700">Total Amount</span>
            <span className="font-medium">€82.77</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-1.5 text-sm bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
          <RefreshCw className="w-4 h-4 text-gray-600" />
          <span className="font-medium text-gray-900">Exchange</span>
        </button>
      </CardContent>
    </Card>
  )
}
