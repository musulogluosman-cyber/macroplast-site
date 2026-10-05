import { cn } from '@/lib/utils'

// The source PNG is a 200x200 square with padding; the emblem sits roughly in the 63–137 x 40–114 box.
const EMBLEM_SIZE = 44
const SCALE = EMBLEM_SIZE / 74

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <a href="#anasayfa" className={cn('flex items-center gap-2.5', className)} aria-label="Macroplast Hazar – Ana Sayfa">
      <span
        className="relative shrink-0 overflow-hidden"
        style={{ width: EMBLEM_SIZE, height: EMBLEM_SIZE }}
        aria-hidden="true"
      >
        <img
          src="/images/macroplast-logo.png"
          alt=""
          width={200 * SCALE}
          height={200 * SCALE}
          className={cn('absolute max-w-none', inverted && 'brightness-0 invert')}
          style={{ left: -63 * SCALE, top: -40 * SCALE }}
        />
      </span>
      <span className="flex flex-col items-center leading-none">
        <span
          className={cn(
            'text-lg font-extrabold tracking-tight',
            inverted ? 'text-navy-foreground' : 'text-foreground',
          )}
        >
          MACROPLAST
        </span>
        <span
          className={cn(
            'mt-1 flex w-full items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.25em]',
            inverted ? 'text-navy-foreground' : 'text-foreground',
          )}
        >
          <span className="h-px flex-1 bg-current" />
          Hazar
          <span className="h-px flex-1 bg-current" />
        </span>
      </span>
    </a>
  )
}
