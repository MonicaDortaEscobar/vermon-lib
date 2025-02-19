import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
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
      description: 'Button text',
    },
    customStyle: {
      table: {
        category: 'Text',
      },
      description: 'Button text',
    },
    customClass: {
      table: {
        category: 'Text',
      },
      description: 'Button text',
    },
    type: {
      table: {
        category: 'Configuration',
      },
      control: {
        type: 'select',
      },
      options: ['reset', 'button', 'submit'],
    },
    buttonStyle: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'select',
      },
      options: ['primary', 'secundary'],
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
    },
    shape: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'select',
      },
      options: ['normal', 'circle', 'square'],
    },
    disabled: {
      table: {
        category: 'Configuration',
      },
      control: {
        type: 'boolean',
      },
    },
    expanded: {
      table: {
        category: 'Style',
      },
      control: {
        type: 'boolean',
      },
    }
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
