import React from "react"
import { Badge } from "@/components/ui/badge";
import { Building, Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Mercalli Freelance',
    period: '2023 - Present',
    description:
      'Tasked with the development of a custom SaaS job board for the company to find talents for remote work around the world. The app offers lots of features such as built-in Invoicing of projects that allows clients to send payments using Stripe and Wise. Clients can also set schedules for meetings as part of their hiring process with Calendly. We used NextJS for the frontend with Tailwind as the styling and Supabase for the backend and database. We also used other tools like Upstash for caching and running scheduled tasks.',
    technologies: ['NextJS', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'Shadcn/ui', 'Upstash', 'Redis', 'Stripe', 'Wise'],
    icon: Building,
  },
  {
    title: 'Software Engineer',
    company: 'Baton',
    period: '2021 - 2023',
    description:
      "Worked with a team of engineers on building a custom SaaS platform for businesses to automate parts of the business process. We used Angular for the frontend and NestJS as the backend with MongoDB as a database. I also worked other projects that cater the business needs.",
    technologies: ['VueJS', 'Angular', 'NestJS', 'Nuxt', 'Nhost', 'Hasura', 'GraphQL', 'PostgreSQL', 'Jasmine', 'Protractor', 'Strapi', 'Camunda BPM', 'Supabase'],
    icon: Building2,
  },
  {
    title: 'Full Stack Web Developer',
    company: 'Vizwoz Software Development Systems',
    period: '2018 - 2021',
    description: 'Worked with a team on building a platform for tracking data from the Fantasy Hurling and Football in Ireland. We used Laravel, Bootstrap and AngularJS for the development of the application.',
    technologies: ["AngularJS", "Bootstrap", "Laravel", "JavaScript", "PHP", "PayPal", "WordPress"],
    icon: Building,
  },
  {
    title: 'Intern',
    company: 'NextBPO Solutions',
    period: 'August - October 2016',
    description: 'Joined as an intern for the OJT program. I worked with a team on building a platform for recruitment in the company. We used CodeIgniter and MySQL for the development of the applciation',
    technologies: ['CodeIgniter', 'PHP', 'Bootstrap', 'MySQL'],
    icon: Building2,
  },
];

export function CareerTimeline() {
  return (
    <div className="max-w-screen-sm mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />
        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index
          ) => (
            <div key={index} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Icon className="h-5 w-5" />
              </div>
              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-base sm:text-lg font-semibold">{company}</p>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}