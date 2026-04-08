import { motion } from "framer-motion";
import { mockPlatformData } from "@/lib/mock-data";

const platformColors: Record<string, string> = {
  LinkedIn: "bg-chart-1",
  Twitter: "bg-chart-2",
  Instagram: "bg-chart-3",
};

const PlatformBreakdown = () => {
  const maxRevenue = Math.max(...mockPlatformData.map((p) => p.revenue));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-foreground">Revenue by Platform</h3>
        <p className="text-sm text-muted-foreground">Breakdown across channels</p>
      </div>
      <div className="space-y-4">
        {mockPlatformData.map((platform) => (
          <div key={platform.platform}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-foreground">{platform.platform}</span>
              <span className="text-sm font-semibold text-foreground">
                ${platform.revenue.toLocaleString()}
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(platform.revenue / maxRevenue) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`h-full rounded-full ${platformColors[platform.platform] || "bg-primary"}`}
              />
            </div>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-xs text-muted-foreground">
                {platform.clicks.toLocaleString()} clicks
              </span>
              <span className="text-xs text-muted-foreground">
                {platform.conversions} conversions
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlatformBreakdown;
