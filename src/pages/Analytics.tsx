import AppLayout from "@/components/AppLayout";
import RevenueChart from "@/components/RevenueChart";
import PlatformBreakdown from "@/components/PlatformBreakdown";
import { motion } from "framer-motion";
import { mockPosts, mockRevenueTimeline } from "@/lib/mock-data";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const pieData = [
  { name: "LinkedIn", value: 7330.5 },
  { name: "Twitter", value: 4230 },
  { name: "Instagram", value: 1287 },
];

const COLORS = [
  "hsl(173, 80%, 40%)",
  "hsl(262, 60%, 55%)",
  "hsl(38, 92%, 50%)",
];

const Analytics = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Deep dive into your social post performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <PlatformBreakdown />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h3 className="text-base font-semibold text-foreground mb-4">Revenue Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={4}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                    contentStyle={{
                      backgroundColor: "hsl(222, 25%, 12%)",
                      border: "1px solid hsl(222, 20%, 18%)",
                      borderRadius: "8px",
                      color: "hsl(210, 20%, 92%)",
                      fontSize: 13,
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <h3 className="text-base font-semibold text-foreground mb-1">AI Insights</h3>
            <p className="text-sm text-muted-foreground mb-4">Patterns detected in your data</p>
            <div className="space-y-3">
              {[
                { emoji: "📈", text: "LinkedIn posts generate 73% more revenue per click than Twitter" },
                { emoji: "⏰", text: "Posts published between 2-4 PM get 2.3x more conversions" },
                { emoji: "💡", text: "Thread-style content converts 45% better than single posts" },
                { emoji: "🎯", text: "Product launch posts have the highest ROI at $0.55/click" },
              ].map((insight, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                  <span className="text-lg">{insight.emoji}</span>
                  <p className="text-sm text-foreground">{insight.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Analytics;
