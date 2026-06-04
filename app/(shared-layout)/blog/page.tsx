import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Read our latest articles",
  category: "NextJS Tutorial",
  authors: [{ name: "Wesley Olivier" }],
};

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Blog
        </h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Insights, thoughts and trends from our team!
        </p>
      </div>
      <Suspense fallback={<SkeletonLoadingUi />}>
        <LoadBlogList />
      </Suspense>
    </div>
  );
}

async function LoadBlogList() {
  const data = await fetchQuery(api.posts.getPosts);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((p) => (
        <Card key={p._id} className="pt-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={
                p.imageUrl ??
                "https://images.pexels.com/photos/11166361/pexels-photo-11166361.jpeg"
              }
              alt="image"
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
          <CardContent>
            <Link href={`/blog/${p._id}`} prefetch>
              <h1 className="text-2xl font-bold hover:text-teal-500 text-center">
                {p.title}
              </h1>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {p.body}
            </p>
          </CardContent>
          <CardFooter>
            <Link
              className={buttonVariants({
                className: "w-full rounded-t-lg",
              })}
              href={`/blog/${p._id}`}
            >
              Read More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function SkeletonLoadingUi() {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <div className="flex flex-col space-y-3" key={i}>
          <Skeleton className="h-48 w-full rounded-xl" />
          <div className="space-y-2 flex flex-col">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
