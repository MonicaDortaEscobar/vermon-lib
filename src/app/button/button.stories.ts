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
    type: 'button',
    buttonStyle: 'primary',
    size: 'medium',
    shape: 'normal',
    disabled: false,
    expanded: false,
    customClass: '',
    iconPosition:'left'
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
    icon: {
      table: {
        category: 'Icon',
      },
      control: {
        type: 'text',
      },
      description: 'Icon class.',
    },
    iconPosition: {
      table: {
        category: 'Icon',
      },
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
      description: 'Select icon position.',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Normal: Story = {
  args: {
    label: 'Botón',
    type: 'button',
    buttonStyle: 'primary',
    size: 'medium',
    shape: 'normal',
    disabled: false,
    expanded: false,
    customClass: '',
  },
};

export const Icon_Text: Story = {
  args: {
    label: 'Botón',
    type: 'button',
    buttonStyle: 'primary',
    size: 'medium',
    shape: 'normal',
    disabled: false,
    expanded: false,
    icon: 'fa fa-user',
    customStyle: {
      'text-transform': 'uppercase',
    },
    customClass: ''
  },
};

export const Icon: Story = {
  args: {
    type: 'button',
    buttonStyle: 'primary',
    size: 'medium',
    shape: 'circle',
    disabled: false,
    expanded: false,
    icon: 'fa fa-user',
    customClass: ''
  },
};

export const Custom_Button: Story = {
  args: {
    // ...Normal.args,
    label: 'Botón',
    type: 'button',
    buttonStyle: 'primary',
    size: 'large',
    shape: 'normal',
    disabled: false,
    expanded: true,
    icon: 'fa fa-user',
    customStyle: {
      'text-transform': 'uppercase',
      'color': 'darkgray',
      'background-color': 'pink'
    },
    customClass: ''
  },
};
