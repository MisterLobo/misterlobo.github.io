import CarouselWithPagination from "@/components/carousel/carousel-with-pagination";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'reactor - My Projects',
}

export default async function ReactorPage() {
  return (
    <>
    <h1 className="text-4xl mx-4">reactor</h1>
    <div className="flex flex-col mx-4 my-10">
      <h3 className="text-lg">reactor is a desktop app written in TypeScript and Rust using Tauri. This app serves as a client for managing docker containers and images. The app sends and receives data from a REST api written in Go programming language. See screenshots below</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-xl">Languages: TypeScript, Rust, Go</h3>
      <h3 className="text-md">Frontend: React for the UI, Rust with Tauri</h3>
      <h3 className="text-md">Backend: Go using the Gin REST api framwork</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-md">GitHub Repo: <Link href="https://github.com/MisterLobo/reactor">https://github.com/MisterLobo/reactor</Link></h3>
    </div>
    <CarouselWithPagination images={[]} />
    </>
  )
}