import CarouselWithPagination from '@/components/carousel/carousel-with-pagination'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'World Clock - My Projects',
}

export default async function WebhooktestPage() {
  return (
    <>
    <h1 className="text-4xl mx-4">World Clock</h1>
    <div className="flex flex-col mx-4 my-10">
      <h3 className="text-lg">World Clock is a simple app for android devices that lets users add clocks for different timezones. The app does not need internet access to work and does not call any external api to provide functionality.</h3>
      <h3 className="text-lg">Write a feedback or feel free to clone the repository and build for iOS</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-xl">Frontend: Flutter, Dart, Material3</h3>
      <h3 className="text-xl">Backend: Sqlite</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-md">GitHub Repo: <Link href="https://github.com/MisterLobo/teachme">https://github.com/MisterLobo/teachme</Link></h3>
    </div>
    </>
  )
}