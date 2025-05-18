"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Code2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioModern() {
  const projects = [
    {
      title: "Silver Elven",
      description: "Host and Book Events",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ['TypeScript', 'NextJS', 'Firebase', 'Go', 'Stripe', 'AWS', 'Kafka', 'PostgreSQL', 'Gin', 'Monorepo', 'NX'],
      icon: Code2,
      page: '/ebs',
      repository: 'https://github.com/MisterLobo/ebs',
    },
    {
      title: "World Clock",
      description: "Track date and time from different timezones",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ['Flutter', 'Android', 'intl', 'clock'],
      icon: Code2,
      page: '/world-clock',
      repository: 'https://github.com/MisterLobo/world_clock',
    },
    {
      title: "webhooktest",
      description: "Webhook testing made easy",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ['NextJs', 'Firebase', 'Firestore'],
      icon: Code2,
      page: '/webhooktest',
      repository: 'https://github.com/MisterLobo/webhooktest',
      demo: 'https://webhooktest-taupe.vercel.app',
    },
    {
      title: "Portfolio",
      description: "Source repository for this portfolio web app",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ['NextJs'],
      icon: Code2,
      page: '#',
      repository: 'https://github.com/MisterLobo/misterlobo.github.io',
      demo: 'https://misterlobo.github.io',
    },
    {
      title: "learnwithme",
      description: "A platform for sharing educational content",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ['NextJS', 'Supabase', 'React'],
      icon: Code2,
      page: '#',
      repository: 'https://github.com/learnwithmeproject/web',
    },
    {
      title: "reactor",
      description: "Manage your docker images easily",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ["Tauri", "ReactJS", "TypeScript", "Rust", "Go"],
      icon: Code2,
      page: '/reactor',
      repository: 'https://github.com/MisterLobo/reactor',
    },
    {
      title: "pyzza",
      description: "Docker desktop client written in GTK+ and Python",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ["python", "GTK+", "Docker", "Desktop"],
      icon: Code2,
      page: '/pyzza',
      repository: 'https://github.com/0xd00bed00bed00/pyzza',
    },
    {
      title: 'mictest',
      description: 'simple audio recording app',
      category: 'Development',
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ['Angular', 'Audio'],
      icon: Code2,
      page: '#',
      repository: 'https://github.com/MisterLobo/mic-test',
    }
  ];

  return (
    <div className="relative bg-accent px-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/20%),transparent_80%)]"></div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
              Hobby Projects
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Here are my most recent projects made during my free time using multiple languages such as JavaScript/TypeScript, Python, Rust and Go
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title}>
                <Card className="group relative overflow-hidden border bg-card transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={
                          project.image ||
                          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        }
                        alt={project.title}
                        className="aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                        height={400}
                        width={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 space-y-4">
                        <div className="flex items-center gap-2">
                          <project.icon className="h-5 w-5 text-primary" />
                          <span className="y text-sm font-medium uppercase">
                            {project.category}
                          </span>
                        </div>
                        <Link href={`${project.page}`} className="text-xl font-semibold text-card-foreground">
                          {project.title}
                        </Link>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4 p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        className="flex flex-row items-center hover:bg-accent p-2 rounded gap-2 relative"
                        href={project.repository}
                        target="_blank"
                      >
                        <svg className="size-5" fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        <span>GitHub repo</span>
                        <ArrowUpRight className="h-5 w-5 absolute right-0" />
                      </Link>
                      {project.demo &&
                      <Link
                        className="flex flex-row items-center hover:bg-accent p-2 rounded gap-2 relative"
                        href={project.demo}
                      >
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-world-www"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" /><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" /><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" /><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" /><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" /><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" /><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" /><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" /></svg>
                        <span>Live demo</span>
                        <ArrowUpRight className="h-5 w-5 absolute right-0" />
                      </Link>
                      }
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}