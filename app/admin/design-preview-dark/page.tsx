import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function DesignPreviewDarkPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground p-8 lg:p-16 space-y-16 max-w-[1280px] mx-auto">
      <header className="space-y-4">
        <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary">Fiscalio Design System (Dark)</h1>
        <p className="text-xl text-muted-foreground font-sans max-w-2xl leading-relaxed">
          Visual catalog of Fiscalio's dark theme tokens and components.
        </p>
      </header>

      <Separator />

      {/* 1. Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">1. Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm leading-relaxed">
          <div className="space-y-2">
            <h3 className="font-bold uppercase tracking-tight text-xs text-muted-foreground">Dark Theme Philosophy</h3>
            <p>High-contrast readability with deep charcoal backgrounds and vibrant editorial highlights.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold uppercase tracking-tight text-xs text-muted-foreground">Aesthetic</h3>
            <p>Minimalist borders and refined tonal layering to prevent eye strain during late-night tax sessions.</p>
          </div>
        </div>
      </section>

      {/* 2. Colors */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">2. Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Swatch name="Background" color="bg-background" border />
          <Swatch name="Foreground" color="bg-foreground" />
          <Swatch name="Primary" color="bg-primary" />
          <Swatch name="Secondary" color="bg-secondary" border />
          <Swatch name="Muted" color="bg-muted" border />
          <Swatch name="Accent" color="bg-accent" border />
          <Swatch name="Destructive" color="bg-destructive" />
          <Swatch name="Amber" color="bg-accent-amber" />
          <Swatch name="Rust" color="bg-accent-rust" />
        </div>
      </section>

      {/* 3. Typography */}
      <section className="space-y-8 text-foreground">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">3. Typography</h2>
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-primary">H1 / Display Bold (4.5rem)</span>
            <h1 className="text-4xl lg:text-[4.5rem] font-display font-bold leading-tight">Tax reporting for freelancers.</h1>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-primary">H2 / Display Semibold (2.5rem)</span>
            <h2 className="text-3xl lg:text-[2.5rem] font-display font-semibold">Editorial precision.</h2>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-primary">H3 / Display Semibold (1.5rem)</span>
            <h3 className="text-xl lg:text-[1.5rem] font-display font-semibold">Financial Accuracy.</h3>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-primary">Body / Sans Regular (1rem)</span>
            <p className="text-base font-sans leading-relaxed max-w-xl text-muted-foreground">
              Fiscalio helps freelancers and small businesses in Mexico stay on top of their taxes. 
              Organize your CFDI, control your VAT and income, and avoid tax errors.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-primary">Label / Sans Medium (0.875rem)</span>
            <p className="text-sm font-sans font-medium text-muted-foreground">
              PRIMARY TAX CATEGORY: RESICO (PF)
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest text-primary">Data / Mono Regular (0.875rem)</span>
            <p className="text-sm font-mono text-foreground uppercase">
              $12,450.00 MXN — 2.5% TAX RATE
            </p>
          </div>
        </div>
      </section>

      {/* 4. Layout */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">4. Layout</h2>
        <div className="font-sans text-sm space-y-4">
          <p>Dark mode maintains the same 4px base spacing and 1280px container max-width.</p>
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-primary/20 border border-primary/30 flex items-center justify-center text-[8px] font-mono">4px</div>
            <div className="w-8 h-8 bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-mono">8px</div>
            <div className="w-16 h-16 bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-mono">16px</div>
          </div>
        </div>
      </section>

      {/* 5. Elevation & Depth */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">5. Elevation & Depth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-xs space-y-4">
            <h4 className="font-display font-semibold uppercase text-xs tracking-tighter">Surface: Tonal Card (Dark)</h4>
            <p className="text-sm text-muted-foreground font-sans">
              Shadows are less effective in dark mode, so we rely on background tonal shifts (bg-card).
            </p>
          </div>
          <div className="p-6 rounded-lg bg-secondary/20 border border-dashed border-muted-foreground/30 flex items-center justify-center">
            <p className="text-xs font-mono text-muted-foreground">Secondary / Layer 2</p>
          </div>
        </div>
      </section>

      {/* 6. Shapes */}
      <section className="space-y-8">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">6. Shapes</h2>
        <div className="flex flex-wrap gap-6">
          <div className="w-24 h-24 rounded-lg bg-primary flex flex-col items-center justify-center text-primary-foreground text-center p-2">
            <span className="text-[10px] font-mono">0.5rem</span>
            <span className="text-[10px] font-mono">(8px)</span>
          </div>
          <div className="w-32 h-24 border border-muted flex items-center justify-center rounded-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Subtle Border</span>
          </div>
        </div>
      </section>

      {/* 7. Components */}
      <section className="space-y-12">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">7. Components</h2>
        
        <div className="space-y-8">
          <h3 className="text-lg font-display font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="default">Primary Action</Button>
            <Button variant="outline">Secondary Action</Button>
            <Button variant="secondary">Tertiary Action</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Danger Action</Button>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-lg font-display font-semibold">Input Fields</h3>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium font-sans">Email Address</label>
              <Input placeholder="name@company.com" />
            </div>
            <div className="flex gap-2">
              <Badge variant="default">Status: Active</Badge>
              <Badge variant="outline">RESICO-PF</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Do's and Don'ts */}
      <section className="space-y-8 pb-16">
        <h2 className="text-2xl font-display font-semibold border-b pb-2">8. Do's and Don'ts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm">
          <ul className="space-y-2 list-disc list-inside text-primary">
            <li className="font-semibold">Do use DM Sans for display headings.</li>
            <li>Do ensure sufficient contrast in dark mode.</li>
            <li>Do use secondary backgrounds for layering.</li>
          </ul>
          <ul className="space-y-2 list-disc list-inside text-destructive">
            <li className="font-semibold">Don't use pure black for cards.</li>
            <li>Don't forget to adjust border colors for dark mode.</li>
            <li>Don't over-saturate accent colors.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function Swatch({ name, color, border = false }: { name: string; color: string; border?: boolean }) {
  return (
    <div className="space-y-2">
      <div className={`h-16 w-full rounded-lg ${color} ${border ? 'border' : ''}`} />
      <span className="text-xs font-mono font-medium block uppercase tracking-tighter">{name}</span>
    </div>
  );
}
