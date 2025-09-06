import { AppSidebar } from "@/components/AppSidebar";
import Cardlayout from "@/components/Cardlayout";
import CurrencyExchange from "@/components/CurrencyCard";
import FinancialOverviewCard from "@/components/FinancialOverviewLayout";
import ExpenseSummary from "@/components/HalfpieChart";
import TopNav from "@/components/NavigationLayout";

export default function FinancePage() {
  return (
    <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col rounded-2xl border m-4 overflow-hidden">
          <header>
            <TopNav />
          </header>
          <main className="flex-1 p-4">
            <div className="grid gap-4 md:grid-cols-[380px_1fr] w-full">
              {/* Left column */}
              <Cardlayout />

              {/* Right column */}
              <div className="space-y-6">
                
                <FinancialOverviewCard />
                <div className="grid grid-cols-2 gap-6 items-stretch">
                  <ExpenseSummary />
                  <CurrencyExchange />
                </div>
              </div>
            </div>


          </main>
        </div>
      </div>
  )
}