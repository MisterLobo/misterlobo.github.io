import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Silver Elven - My Projects',
}

export default async function WebhooktestPage() {
  return (
    <>
    <h1 className="text-4xl mx-4">Silver Elven</h1>
    <div className="flex flex-col mx-4 my-10">
      <h3 className="text-lg">Silver Elven is an Events Booking System which allows users to Host events and sell tickets. Guests can book tickets for either 1 or multiple slots. With payments integration via Stripe and authentication using Firebase Auth. Backend is written in Go and uses some AWS services such as S3, SQS, SNS, EventBridge, and RDS using PostgreSQL as the database provider</h3>
      <h3>Deployment is done automatically via GitHub actions integration with AWS ECS Fargate</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-xl">Frontend: NextJS, TypeScript</h3>
      <h3 className="text-xl">Backend: Go, gin, gorm</h3>
      <h3 className="text-xl">Database: PostgreSQL, Kafka</h3>
      <h3 className="text-xl">Service integrations: Firebase, Stripe, AWS</h3>
    </div>
    <div className="mx-4 my-10">
      <h3 className="text-md">Live Demo: <Link href="https://silver-elven.cc" target="_blank">https://silver-elven.cc</Link></h3>
      <h3 className="text-md">GitHub Repo: <Link href="https://github.com/MisterLobo/ebs">https://github.com/MisterLobo/ebs</Link></h3>
    </div>

    </>
  )
}