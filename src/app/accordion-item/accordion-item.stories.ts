import {
  moduleMetadata,
  StoryFn,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

export default {
  title: 'Components/Accordion',
  component: AccordionItemComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, AccordionItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    disabled: {
      table: {
        category: 'Options',
      },
      control: {
        type: 'boolean',
      },
      description: 'Disable or enable accordion item.',
    },
  },
} as Meta;

const Template: StoryFn = (args: any) => ({
  props: args,
  template: `
  <app-accordion-item 
    [header]="'${args.header}'"
    [disabled]="${args.disabled}" 
    [rightIcon]="'${args.rightIcon}'"
    [itemId]="'${args.itemId}'"
    [titleIcon]="'${args.titleIcon}'"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie,
    eros at iaculis lacinia, orci nulla molestie diam, eget gravida massa urna
    aliquam neque. Fusce ut nisl id felis suscipit fringilla. Integer eu erat
    aliquam, gravida purus eget, finibus arcu. Vivamus rutrum lorem et lacus
    fermentum, a rutrum nisl iaculis. Nunc ullamcorper nisi sed sapien vehicula
    porttitor. Integer congue erat ac augue vehicula malesuada. Cras et
    imperdiet tortor, id rutrum sem. Fusce sagittis, est ac malesuada finibus,
    libero risus tincidunt mi, ut auctor nulla purus maximus est. Aliquam
    consequat facilisis ligula, a suscipit neque sollicitudin nec. Nullam
    blandit est et arcu feugiat, eget elementum neque faucibus.
  </app-accordion-item>`,
});

const TemplateIcons: StoryFn = (args: any) => ({
  props: args,
  template: `
  <app-accordion-item 
    [header]="'${args.header}'"
    [disabled]="${args.disabled}" 
    [rightIcon]="'${args.rightIcon}'"
    [itemId]="'${args.itemId}'"
    [leftIcon]="'${args.leftIcon}'"
    [titleIcon]="'${args.titleIcon}'"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie,
    eros at iaculis lacinia, orci nulla molestie diam, eget gravida massa urna
    aliquam neque. Fusce ut nisl id felis suscipit fringilla. Integer eu erat
    aliquam, gravida purus eget, finibus arcu. Vivamus rutrum lorem et lacus
    fermentum, a rutrum nisl iaculis. Nunc ullamcorper nisi sed sapien vehicula
    porttitor. Integer congue erat ac augue vehicula malesuada. Cras et
    imperdiet tortor, id rutrum sem. Fusce sagittis, est ac malesuada finibus,
    libero risus tincidunt mi, ut auctor nulla purus maximus est. Aliquam
    consequat facilisis ligula, a suscipit neque sollicitudin nec. Nullam
    blandit est et arcu feugiat, eget elementum neque faucibus.
  </app-accordion-item>`,
});

const TemplateMultiple: StoryFn = (args: any) => ({
  props: args,
  template: `
  <app-accordion-item 
    [header]="'Primer Item'"
    [disabled]="${args.disabled}" 
    [rightIcon]="'${args.rightIcon}'"
    [itemId]="'${args.itemId}'"
    [leftIcon]="'${args.leftIcon}'"
    [titleIcon]="'${args.titleIcon}'"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie,
    eros at iaculis lacinia, orci nulla molestie diam, eget gravida massa urna
    aliquam neque. Fusce ut nisl id felis suscipit fringilla. Integer eu erat
    aliquam, gravida purus eget, finibus arcu. Vivamus rutrum lorem et lacus
    fermentum, a rutrum nisl iaculis. Nunc ullamcorper nisi sed sapien vehicula
    porttitor. Integer congue erat ac augue vehicula malesuada. Cras et
    imperdiet tortor, id rutrum sem. Fusce sagittis, est ac malesuada finibus,
    libero risus tincidunt mi, ut auctor nulla purus maximus est. Aliquam
    consequat facilisis ligula, a suscipit neque sollicitudin nec. Nullam
    blandit est et arcu feugiat, eget elementum neque faucibus.
  </app-accordion-item>
  
  <app-accordion-item 
    [header]="'Segundo Item'"
    [disabled]="true" 
    [rightIcon]="'${args.rightIcon}'"
    [itemId]="'${args.itemId}'"
    [leftIcon]="'${args.leftIcon}'"
    [titleIcon]="'${args.titleIcon}'"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie,
    eros at iaculis lacinia, orci nulla molestie diam, eget gravida massa urna
    aliquam neque. Fusce ut nisl id felis suscipit fringilla. Integer eu erat
    aliquam, gravida purus eget, finibus arcu. Vivamus rutrum lorem et lacus
    fermentum, a rutrum nisl iaculis. Nunc ullamcorper nisi sed sapien vehicula
    porttitor. Integer congue erat ac augue vehicula malesuada. Cras et
    imperdiet tortor, id rutrum sem. Fusce sagittis, est ac malesuada finibus,
    libero risus tincidunt mi, ut auctor nulla purus maximus est. Aliquam
    consequat facilisis ligula, a suscipit neque sollicitudin nec. Nullam
    blandit est et arcu feugiat, eget elementum neque faucibus.
  </app-accordion-item>
  
  <app-accordion-item 
    [header]="'Tercer Item'"
    [disabled]="${args.disabled}" 
    [rightIcon]="'${args.rightIcon}'"
    [itemId]="'${args.itemId}'"
    [leftIcon]="'${args.leftIcon}'"
    [titleIcon]="'${args.titleIcon}'"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie,
    eros at iaculis lacinia, orci nulla molestie diam, eget gravida massa urna
    aliquam neque. Fusce ut nisl id felis suscipit fringilla. Integer eu erat
    aliquam, gravida purus eget, finibus arcu. Vivamus rutrum lorem et lacus
    fermentum, a rutrum nisl iaculis. Nunc ullamcorper nisi sed sapien vehicula
    porttitor. Integer congue erat ac augue vehicula malesuada. Cras et
    imperdiet tortor, id rutrum sem. Fusce sagittis, est ac malesuada finibus,
    libero risus tincidunt mi, ut auctor nulla purus maximus est. Aliquam
    consequat facilisis ligula, a suscipit neque sollicitudin nec. Nullam
    blandit est et arcu feugiat, eget elementum neque faucibus.
  </app-accordion-item>
  `,
});

export const Default = Template.bind({});

Default.args = {
  header: 'Título',
  disabled: false,
  rightIcon: 'fa fa-chevron-down',
  itemId: 0,
};

export const AccordionIcons = TemplateIcons.bind({});

AccordionIcons.args = {
  header: 'Título',
  disabled: false,
  rightIcon: 'fa fa-chevron-down',
  leftIcon: 'fa fa-user',
  titleIcon: 'fa fa-exclamation-triangle',
  itemId: 0,
};

export const AccordionMultiple = TemplateMultiple.bind({});

AccordionMultiple.args = {
  disabled: false,
  rightIcon: 'fa fa-chevron-down',
  leftIcon: 'fa fa-user',
  titleIcon: 'fa fa-exclamation-triangle',
  itemId: 0,
};
