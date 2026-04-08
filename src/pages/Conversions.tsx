import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import { DollarSign, TrendingUp, Users, ArrowUpRight } from "lucide-react";

const conversions = [
  { email: "john@example.com", amount: 49.99, currency: "USD", post: "Just launched our new AI...", platform: "twitter", time: "1 hour ago" },
  { email: "sarah@startup.io", amount: 199.00, currency: "USD", post: "How we grew from 0 to 10k...", platform: "linkedin", time: "3 hours ago" },
  { email: "dev@company.com", amount: 29.99, currency: "USD", post: "New feature drop: Real-time...", platform: "twitter", time: "5 hours ago" },
  { email: "marketing@brand.co", amount: 99.00, currency: "USD", post: "5 productivity hacks...", platform: "linkedin", time: "8 hours ago" },
  { email: "jane@freelance.com", amount: 49.99, currency: "USD", post: "Behind the scenes...", platform: "instagram", time: "12 hours ago" },
];

const Conversions = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Conversions</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track purchases attributed to your social posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard title="Today's Revenue" value="$427.97" change={18.5} icon={DollarSign} />
          <StatCard title="Conversions Today" value="12" change={6.3} icon={Users} delay={0.05} />
          <StatCard title="Avg. Order Value" value="$85.59" change={3.1} icon={TrendingUp} delay={0.1} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="p-5 border-b border-border">
            <h3 className="text-base font-semibold text-foreground">Recent Conversions</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Email</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Amount</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Attributed Post</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Platform</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Time</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((conv, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 text-sm text-foreground">{conv.email}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-primary">
                    ${conv.amount.toFixed(2)}
                  </td>
                  <td className="px-5 py-3 text-sm text-foreground max-w-xs truncate">{conv.post}</td>
                  <td className="px-5 py-3 text-sm capitalize text-muted-foreground">{conv.platform}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{conv.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Conversions;
