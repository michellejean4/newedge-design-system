import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Badge } from '../Badge/Badge';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    eyebrow: 'Total portfolio',
    title: 'Net worth $247.8M',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Allocation drifted 2.1% above the target band as of close, 16 May.',
  },
};

export const WithAction: Story = {
  args: {
    action: <Badge variant="positive">+4.2%</Badge>,
    children: 'Performance is ahead of benchmark this quarter.',
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    eyebrow: 'Workspace',
    title: 'Growth portfolio',
    children: 'Click to open. Hover to see the lift and glow.',
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 280px)', gap: 16 }}>
      <Card eyebrow="Cash" title="$12.4M" action={<Badge variant="neutral">Idle</Badge>}>
        Awaiting allocation.
      </Card>
      <Card eyebrow="Equities" title="$180.2M" action={<Badge variant="positive">+1.8%</Badge>}>
        72% of total portfolio.
      </Card>
      <Card eyebrow="Fixed income" title="$48.9M" action={<Badge variant="negative">-0.4%</Badge>}>
        Duration shortened this week.
      </Card>
      <Card eyebrow="Alternatives" title="$6.3M" action={<Badge variant="warning">Review</Badge>}>
        Lock-up expires next month.
      </Card>
    </div>
  ),
};
