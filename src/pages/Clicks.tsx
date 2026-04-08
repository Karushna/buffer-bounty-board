import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { mockPosts } from "@/lib/mock-data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = mockPosts.map((p) => ({
  name: p.content.slice(0, 30) + "...",
  clicks: p.clicks,
  platform: p.platform,
}));

const Clicks = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Click Tracking</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitor clicks across your tracked posts
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-card p-5 mb-6"
        >
          <h3 className="text-base font-semibold text-foreground mb-4">Clicks by Post</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 90%)" horizontal={false} />
                <XAxis type="number" tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" width={200} tick={{ fill: "hsl(220, 10%, 46%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(222, 25%, 12%)",
                    border: "1px solid hsl(222, 20%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 20%, 92%)",
                    fontSize: 13,
                  }}
                />
                <Bar dataKey="clicks" fill="hsl(173, 80%, 40%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="p-5 border-b border-border">
            <h3 className="text-base font-semibold text-foreground">Recent Clicks</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Post</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Platform</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Time</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase">Source</th>
              </tr>
            </thead>
            <tbody>
              {[
                { post: "Just launched our new AI...", platform: "twitter", time: "2 min ago", source: "Chrome / macOS" },
                { post: "How we grew from 0 to 10k...", platform: "linkedin", time: "5 min ago", source: "Safari / iOS" },
                { post: "New feature drop: Real-time...", platform: "twitter", time: "12 min ago", source: "Firefox / Windows" },
                { post: "5 productivity hacks...", platform: "linkedin", time: "18 min ago", source: "Chrome / Android" },
                { post: "Behind the scenes...", platform: "instagram", time: "25 min ago", source: "Instagram App / iOS" },
              ].map((click, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 text-sm text-foreground">{click.post}</td>
                  <td className="px-5 py-3 text-sm capitalize text-muted-foreground">{click.platform}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{click.time}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{click.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Clicks;
