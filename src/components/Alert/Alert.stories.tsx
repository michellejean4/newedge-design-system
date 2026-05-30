import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'inline-radio', options: ['info', 'positive', 'warning', 'negative'] },
  },
  args: {
    tone: 'info',
    title: 'Market data delayed',
    children: 'Prices are delayed by 15 minutes. As of close, 16 May 2026.',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Dismissible: Story = {
  args: { onDismiss: () => alert('dismissed') },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert tone="info" title="Heads up">Rebalancing window opens Monday.</Alert>
      <Alert tone="positive" title="Trade confirmed">Bought 1,200 VTI at $241.30.</Alert>
      <Alert tone="warning" title="Allocation drift">Equities are 2.1% above target.</Alert>
      <Alert tone="negative" title="Transfer failed">Insufficient settled cash.</Alert>
    </div>
  ),
};
