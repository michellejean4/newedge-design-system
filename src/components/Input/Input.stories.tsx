import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Account name',
    placeholder: 'e.g. Growth portfolio',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: 'Visible only to you and your advisor.' },
};

export const WithError: Story = {
  args: { value: 'abc', error: 'Enter a valid account number.' },
};

export const WithPrefix: Story = {
  args: { label: 'Initial deposit', prefix: '$', placeholder: '0.00', mono: true },
};

export const Disabled: Story = {
  args: { value: 'Locked account', disabled: true },
};
