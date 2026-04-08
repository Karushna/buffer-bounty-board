import AppLayout from "@/components/AppLayout";
import PostsTable from "@/components/PostsTable";
import CreatePostDialog from "@/components/CreatePostDialog";

const Posts = () => {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Posts</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your tracked social media posts
            </p>
          </div>
          <CreatePostDialog />
        </div>
        <PostsTable />
      </div>
    </AppLayout>
  );
};

export default Posts;
