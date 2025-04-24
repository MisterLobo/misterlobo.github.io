import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
import { cn } from "@/lib/utils"

export function TerminalWrapper({ className }: { className?: string }) {
  return (
    <Terminal className={cn(className)}>
      <TypingAnimation>&gt; git clone https://github.com/MisterLobo/portfolio.git</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Fullstack Web Developer with 7 years experience</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ JavaScript/TypeScript, HTML and CSS</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ ReactJS, VueJS, Angular</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ TailwindCSS, Bootstrap, Material UI</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ PHP and Laravel</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ ReactJS, NextJS, Angular, VueJS, NestJS</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500 w-96">
        <span>✔ Supabase, Graphql, MySQL, MongoDB, Postgres</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Git, Docker, CI/CD</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Go, Rust, Python</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-green-500">
        <span>✔ Tauri, GTK+</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6500} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan>

      <TypingAnimation delay={7000} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>
    </Terminal>
  )
}
