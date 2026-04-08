import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Link2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const SettingsPage = () => {
  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your account and integrations</p>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-base font-semibold text-foreground mb-4">Buffer Integration</h3>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 mb-4">
              <CheckCircle className="h-5 w-5 text-success" />
              <div>
                <p className="text-sm font-medium text-foreground">Connected</p>
                <p className="text-xs text-muted-foreground">3 channels synced • Last sync 5 min ago</p>
              </div>
            </div>
            <div className="space-y-2">
              {["Twitter - @yourhandle", "LinkedIn - Your Company", "Instagram - @yourbrand"].map((ch) => (
                <div key={ch} className="flex items-center justify-between py-2 px-3 rounded-md bg-muted/30">
                  <span className="text-sm text-foreground">{ch}</span>
                  <span className="text-xs text-success font-medium">Active</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 gap-2" onClick={() => toast.info("Buffer sync triggered")}>
              <Link2 className="h-4 w-4" />
              Sync Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-base font-semibold text-foreground mb-4">Conversion Tracking</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add this snippet to your website to track conversions:
            </p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-xs text-primary whitespace-pre-wrap">
{`<script>
  // PostRevenue Conversion Tracking
  function trackConversion(email, value, currency) {
    const postId = localStorage.getItem('pr_post_id');
    fetch('/conversions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, value, currency, post_id: postId })
    });
  }
</script>`}
              </code>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-base font-semibold text-foreground mb-4">Account</h3>
            <div className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input value="you@example.com" disabled className="mt-1.5" />
              </div>
              <div>
                <Label>Name</Label>
                <Input defaultValue="Your Name" className="mt-1.5" />
              </div>
              <Button onClick={() => toast.success("Settings saved!")}>Save Changes</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
