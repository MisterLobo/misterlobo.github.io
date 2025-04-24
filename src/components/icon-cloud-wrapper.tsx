import { IconCloud } from "@/components/ui/icon-cloud"
import { cn } from "@/lib/utils"

export function IconCloudWrapper({ slugs, className }: { slugs: string[], className?: string }) {
  return (
    <div className={cn(
      "bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border px-20 pb-20 pt-8 ",
      className,
    )}>
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
