import CarouselWithPagination from "@/components/carousel/carousel-with-pagination";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'pyzza - My Projects',
}

export default async function PyzzaPage() {
  return (
    <>
    <h1 className="text-4xl mx-4">Pyzza</h1>
    <div className="flex flex-col mx-4 my-10">
      <h3 className="text-lg">Pyzza is a desktop app written in Python using GTK+ as UI. This app serves as a client for managing docker containers and images. See screenshots below</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-xl">Language: Python</h3>
      <h3 className="text-md">GUI: GTK+</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-md">GitHub Repo: <Link href="https://github.com/0xd00bed00bed00/pyzza">https://github.com/0xd00bed00bed00/pyzza</Link></h3>
    </div>
    <CarouselWithPagination images={[
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203329.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203410.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203426.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203445.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203455.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203517.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203638.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203655.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203702.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203709.png',

      '/assets/images/pyzza/screenshots/Screenshot_20231003_203715.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203732.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203740.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203813.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203839.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203905.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_203931.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231003_204359.png',
      '/assets/images/pyzza/screenshots/Screenshot_20231112_185743.png',
    ]} />
    </>
  )
}