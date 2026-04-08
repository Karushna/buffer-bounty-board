import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Link2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const CreatePostDialog = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [trackedUrl, setTrackedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const generateUrl = () => {
    if (!url) return;
    const postId = `p_${Date.now().toString(36)}`;
    const tracked = `${window.location.origin}/track?post_id=${postId}&redirect=${encodeURIComponent(url)}`;
    setTrackedUrl(tracked);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(trackedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreate = () => {
    toast.success("Post created with tracking URL!");
    setOpen(false);
    setContent("");
    setPlatform("");
    setUrl("");
    setTrackedUrl("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Tracked Post</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div>
            <Label htmlFor="content">Post Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content..."
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="platform">Platform</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="url">Destination URL</Label>
            <div className="flex gap-2 mt-1.5">
              <Input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/landing"
              />
              <Button variant="outline" size="icon" onClick={generateUrl}>
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {trackedUrl && (
            <div className="rounded-lg bg-muted p-3">
              <Label className="text-xs text-muted-foreground">Tracking URL</Label>
              <div className="flex items-center gap-2 mt-1">
                <code className="text-xs text-primary flex-1 break-all">{trackedUrl}</code>
                <button onClick={copyUrl} className="shrink-0 text-muted-foreground hover:text-foreground">
                  {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}
          <Button onClick={handleCreate} className="w-full" disabled={!content || !platform || !url}>
            Create Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
