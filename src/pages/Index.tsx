
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { SalesOverview } from "@/components/SalesOverview";
import { ActiveUsers } from "@/components/ActiveUsers";
import { ProjectsTable } from "@/components/ProjectsTable";
import { OrdersOverview } from "@/components/OrdersOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Main Dashboard</h1>
              <p className="text-gray-400">Hello Mark, welcome back!</p>
            </div>
            
            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SalesOverview />
              <ActiveUsers />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProjectsTable />
              </div>
              <div className="lg:col-span-1">
                <OrdersOverview />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
