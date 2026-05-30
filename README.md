# NewEdge Wealth — Design System

A React + TypeScript component library, built from the **NewEdge Wealth —
Foundations & Guidelines** design tokens in Figma and documented in Storybook.

🔗 **Live Storybook:** _published automatically to GitHub Pages on every push to `main`._

## What's inside

- **Foundations** — colors, typography, spacing, radius, and elevation tokens,
  visualized. Source of truth: [`src/tokens/tokens.css`](src/tokens/tokens.css).
- **Components** — Button, Input, Card, Badge, Avatar, Checkbox, Toggle, Alert.

## Run it locally

```bash
npm install
npm run storybook      # opens the component workshop at http://localhost:6006
```

## Other commands

```bash
npm run build-storybook   # build the static Storybook site (what gets published)
npm run build             # build the demo app (Vite)
```

## Using a component

```tsx
import { Button, Card, Badge } from './src/components';

<Card eyebrow="Total portfolio" title="Net worth $247.8M"
      action={<Badge variant="positive">+4.2%</Badge>}>
  Allocation is on target.
</Card>
```

All styling comes from CSS variables in `src/tokens/tokens.css`. Change a token
there and every component updates at once.

---

Generated with Storybook 10 · Vite · React 19.
