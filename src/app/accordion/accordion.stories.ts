import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

