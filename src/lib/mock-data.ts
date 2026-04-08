// Mock data for the dashboard MVP
export interface Post {
  id: string;
  content: string;
  platform: "twitter" | "linkedin" | "facebook" | "instagram";
  originalUrl: string;
  trackedUrl: string;
  publishedAt: string;
  clicks: number;
  revenue: number;
  conversions: number;
}

export interface Click {
  id: string;
  postId: string;
  createdAt: string;
  userAgent: string;
  ipAddress: string;
}

export interface Conversion {
  id: string;
  email: string;
  amount: number;
  currency: string;
  postId: string;
  createdAt: string;
}

export interface AnalyticsOverview {
  totalRevenue: number;
  totalClicks: number;
  totalConversions: number;
  conversionRate: number;
  revenueChange: number;
  clicksChange: number;
}

export const mockOverview: AnalyticsOverview = {
  totalRevenue: 12847.50,
  totalClicks: 34521,
  totalConversions: 487,
  conversionRate: 1.41,
  revenueChange: 12.3,
  clicksChange: 8.7,
};

export const mockPosts: Post[] = [
  {
    id: "p1",
    content: "🚀 Just launched our new AI writing tool! Try it free for 14 days.",
    platform: "twitter",
    originalUrl: "https://example.com/ai-writer",
    trackedUrl: "/track?post_id=p1&redirect=https://example.com/ai-writer",
    publishedAt: "2026-04-07T10:00:00Z",
    clicks: 4230,
    revenue: 2340.00,
    conversions: 52,
  },
  {
    id: "p2",
    content: "How we grew from 0 to 10k users in 90 days — a thread on product-led growth strategies.",
    platform: "linkedin",
    originalUrl: "https://example.com/blog/growth",
    trackedUrl: "/track?post_id=p2&redirect=https://example.com/blog/growth",
    publishedAt: "2026-04-06T14:30:00Z",
    clicks: 8920,
    revenue: 4120.50,
    conversions: 134,
  },
  {
    id: "p3",
    content: "New feature drop: Real-time collaboration is here! Work with your team simultaneously.",
    platform: "twitter",
    originalUrl: "https://example.com/collab",
    trackedUrl: "/track?post_id=p3&redirect=https://example.com/collab",
    publishedAt: "2026-04-05T09:15:00Z",
    clicks: 6340,
    revenue: 1890.00,
    conversions: 87,
  },
  {
    id: "p4",
    content: "5 productivity hacks that doubled our team's output. #productivity #startup",
    platform: "linkedin",
    originalUrl: "https://example.com/blog/productivity",
    trackedUrl: "/track?post_id=p4&redirect=https://example.com/blog/productivity",
    publishedAt: "2026-04-04T16:45:00Z",
    clicks: 12100,
    revenue: 3210.00,
    conversions: 156,
  },
  {
    id: "p5",
    content: "Behind the scenes of our latest product shoot 📸",
    platform: "instagram",
    originalUrl: "https://example.com/bts",
    trackedUrl: "/track?post_id=p5&redirect=https://example.com/bts",
    publishedAt: "2026-04-03T11:00:00Z",
    clicks: 2931,
    revenue: 1287.00,
    conversions: 58,
  },
];

export const mockPlatformData = [
  { platform: "LinkedIn", clicks: 21020, revenue: 7330.50, conversions: 290, color: "hsl(var(--chart-1))" },
  { platform: "Twitter", clicks: 10570, revenue: 4230.00, conversions: 139, color: "hsl(var(--chart-2))" },
  { platform: "Instagram", clicks: 2931, revenue: 1287.00, conversions: 58, color: "hsl(var(--chart-3))" },
];

export const mockRevenueTimeline = [
  { date: "Apr 1", revenue: 420, clicks: 1200 },
  { date: "Apr 2", revenue: 680, clicks: 2100 },
  { date: "Apr 3", revenue: 1287, clicks: 2931 },
  { date: "Apr 4", revenue: 3210, clicks: 12100 },
  { date: "Apr 5", revenue: 1890, clicks: 6340 },
  { date: "Apr 6", revenue: 4120, clicks: 8920 },
  { date: "Apr 7", revenue: 2340, clicks: 4230 },
];
