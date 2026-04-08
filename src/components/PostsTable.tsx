import { motion } from "framer-motion";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { mockPosts } from "@/lib/mock-data";

const platformBadge: Record<string, string> = {
  twitter: "bg-chart-2/15 text-chart-2",
  linkedin: "bg-chart-1/15 text-chart-1",
  instagram: "bg-chart-3/15 text-chart-3",
  facebook: "bg-chart-5/15 text-chart-5",
};

const PostsTable = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="rounded-xl border border-border bg-card overflow-hidden"
    >
      <div className="p-5 border-b border-border">
        <h3 className="text-base font-semibold text-foreground">Tracked Posts</h3>
        <p className="text-sm text-muted-foreground">Revenue attribution per post</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Post
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Platform
              </th>
              <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-5 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Conv.
              </th>
              <th className="px-5 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                <td className="px-5 py-4">
                  <p className="text-sm text-foreground line-clamp-1 max-w-xs">{post.content}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium capitalize ${
                      platformBadge[post.platform]
                    }`}
                  >
                    {post.platform}
                  </span>
                </td>
                <td className="px-5 py-4 text-right text-sm font-medium text-foreground">
                  {post.clicks.toLocaleString()}
                </td>
                <td className="px-5 py-4 text-right text-sm font-semibold text-primary">
                  ${post.revenue.toLocaleString()}
                </td>
                <td className="px-5 py-4 text-right text-sm text-foreground">{post.conversions}</td>
                <td className="px-5 py-4 text-center">
                  <button
                    onClick={() => copyUrl(post.id, post.trackedUrl)}
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {copiedId === post.id ? (
                      <Check className="h-3.5 w-3.5 text-success" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default PostsTable;
