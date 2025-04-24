import Link from 'next/link'
import PortfolioModern from '@/components/portfolio'
import { TerminalWrapper } from '@/components/terminal-wrapper'
import { IconCloudWrapper } from '@/components/icon-cloud-wrapper'
import { CareerTimeline } from '@/components/career'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Portfolio',
}

export default async function Home() {
  const frontendSkills = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Vue',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Bootstrap',
    'Material UI',
    'GTK+',
    'Flutter',
  ]
  const backendSkills = [
    'NodeJS',
    'Deno',
    'NextJS',
    'NuxtJS',
    'NestJS',
    'PHP',
    'Laravel',
    'WordPress',
    'Rust',
    'Go',
    'Gin',
    'Python',
    'Supabase',
    'GraphQL',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'Upstash',
    'Algolia',
    'PostHog',
    'Firebase',
    'Dart',
    'Strapi',
    'OctobarCMS',
  ]
  const other = [
    'Stripe',
    'Wise',
    'Camunda',
    'Tauri',
    'CI/CD',
    'Vercel',
  ]
  const tools = [
    'git',
    'docker',
    'GitHub',
    'GitLab',
    'Linux',
    'Protractor',
    'Jasmine',
  ]
  return (
    <>
      <div id="about" className="w-full mt-20">
        <Link href="#about">
          <h1 className="text-3xl">#about</h1>
        </Link>
        <p className="text-xl">Hi I&apos;m Aljonis Garrido, a software developer from the Philippines. In my professional career I have built apps for the web platform using JavaScript/TypeScript and PHP. I also build hobby projects for Web, Desktop and mobile.</p>
        <p className="text-xl">I continously explore and learn new technologies to use on my personal projects and also learn new skills.</p>
        <p className="text-xl">In the next sections you can check out some of my personal projects</p>
        <div className="flex mt-10">
          <h2 className="text-4xl">SKILLS</h2>
        </div>
        <div className="flex my-2 items-center gap-2 flex-wrap">
          <h2 className="text-2xl">FRONTEND:</h2>
          {frontendSkills.map((skill, index) => (
            <span key={index} className="inline-flex bg-muted p-2 rounded">{skill}</span>
          ))}
        </div>
        <div className="flex my-2 items-center gap-2 flex-wrap">
          <h2 className="text-2xl">BACKEND:</h2>
          {backendSkills.map((skill, index) => (
            <span key={index} className="inline-flex bg-muted p-2 rounded">{skill}</span>
          ))}
        </div>
        <div className="flex my-2 items-center gap-2 flex-wrap">
          <h2 className="text-2xl">OTHER SKILLS:</h2>
          {other.map((skill, index) => (
            <span key={index} className="inline-flex bg-muted p-2 rounded">{skill}</span>
          ))}
        </div>
        <div className="flex my-2 items-center gap-2 flex-wrap">
          <h2 className="text-2xl">DEVELOPMENT TOOLS:</h2>
          {tools.map((tool, index) => (
            <span key={index} className="inline-flex bg-muted p-2 rounded">{tool}</span>
          ))}
        </div>
        <div className="flex flex-col my-10 gap-2">
          <TerminalWrapper className="mx-auto min-w-96 w-full" />
          <IconCloudWrapper className="mx-auto max-h-96" slugs={[
            'github',
            'supabase',
            'html',
            'css',
            'javascript',
            'express',
            'typescript',
            'tailwindcss',
            'docker',
            'postgresql',
            'mysql',
            'mongodb',
            'php',
            'laravel',
            'react',
            'vuejs',
            'go',
            'python',
            'rust',
            'git',
            'react',
          ]}/>
        </div>
        <div className="flex w-full min-h-96 py-10">
          <div className="flex mt-10">
            <h2 className="text-4xl">EXPERIENCE</h2>
          </div>
          <CareerTimeline />
        </div>
      </div>
      <div id="projects" className="min-h-screen">
        <Link href="#projects">
          <h1 className="text-3xl">#projects</h1>
        </Link>
        <PortfolioModern />
      </div>
    </>
  );
}
