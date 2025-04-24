import CarouselWithPagination from "@/components/carousel/carousel-with-pagination";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'webhooktest - My Projects',
}

export default async function WebhooktestPage() {
  return (
    <>
    <h1 className="text-4xl mx-4">webhooktest</h1>
    <div className="flex flex-col mx-4 my-10">
      <h3 className="text-lg">webhooktest is a simple app for testing webhooks. You can view the webhook&amp;s headers and payload for POST requests. You can instantly see updates without refreshing the page</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-xl">Frontend: NextJS, TypeScript</h3>
      <h3 className="text-xl">Backend: Firebase</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-md">Live Demo: <Link href="https://webhooktest-taupe.vercel.app/" target="_blank">https://webhooktest-taupe.vercel.app</Link></h3>
      <h3 className="text-md">GitHub Repo: <Link href="https://github.com/MisterLobo/webhooktest">https://github.com/MisterLobo/webhooktest</Link></h3>
    </div>
    <CarouselWithPagination images={[
      '/assets/images/webhooktest/Screenshot_20250424_195109.png',
    ]} />
    </>
  )
}