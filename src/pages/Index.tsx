import AppLayout from "@/components/AppLayout";
import StatCard from "@/components/StatCard";
import RevenueChart from "@/components/RevenueChart";
import PlatformBreakdown from "@/components/PlatformBreakdown";
import PostsTable from "@/components/PostsTable";
import CreatePostDialog from "@/components/CreatePostDialog";
import { mockOverview } from "@/lib/mock-data";
import { DollarSign, MousePointerClick, TrendingUp, Users } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Track revenue attribution from your social posts
            </p>
          </div>
          <CreatePostDialog />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Revenue"
            value={`$${mockOverview.totalRevenue.toLocaleString()}`}
            change={mockOverview.revenueChange}
            icon={DollarSign}
            delay={0}
          />
          <StatCard
            title="Total Clicks"
            value={mockOverview.totalClicks.toLocaleString()}
            change={mockOverview.clicksChange}
            icon={MousePointerClick}
            delay={0.05}
          />
          <StatCard
            title="Conversions"
            value={mockOverview.totalConversions.toString()}
            change={5.2}
            icon={Users}
            delay={0.1}
          />
          <StatCard
            title="Conversion Rate"
            value={`${mockOverview.conversionRate}%`}
            change={-0.3}
            icon={TrendingUp}
            delay={0.15}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <PlatformBreakdown />
        </div>

        <PostsTable />
      </div>
    </AppLayout>
  );
};

export default Index;
