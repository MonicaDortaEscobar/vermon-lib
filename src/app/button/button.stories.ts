import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  tags: ['autodocs'],
  args: {
    label: 'Botón',
    type: 'button',
    buttonStyle: 'primary',
    size: 'medium',
    shape: 'normal',
    disabled: false,
    expanded: false,
    customStyle: {
      'text-transform': 'uppercase',
    },
    customClass: '',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
      control: {
        type: 'text',
      },
      description: 'Button text.',
    },
    customStyle: {
      table: {
        category: 'Text',
      },
      description: 'Set custom CSS.',
    },
    customClass: {
      table: {
        category: 'Text',
      },
      description: 'Set custom class.',
    },
    type: {
      table: {
        category: 'Configuration',
      },
      control: {
        type: 'select',
      },
      options: ['reset', 'button', 'submit'],
      description: 'Button type.',
    },
    buttonStyle: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'select',
      },
      options: ['primary', 'secundary'],
      description: 'Button style.',
    },
    size: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'select',
      },
      if: { arg: 'shape', eq: 'normal' },
      options: ['small', 'medium', 'large'],
      description: 'Button size.',
    },
    shape: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'select',
      },
      options: ['normal', 'circle', 'square'],
      description: 'Button shape.',
    },
    disabled: {
      table: {
        category: 'Configuration',
      },
      control: {
        type: 'boolean',
      },
      description: 'Enabled a disabled button.',
    },
    expanded: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'boolean',
      },
      description: 'Button with width: 100%.',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Botón',
    type: 'button',
    buttonStyle: 'primary',
  },
};
