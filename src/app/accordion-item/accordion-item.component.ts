import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [CommonModule],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
})
export class AccordionItemComponent {
  @ViewChild('accordionItem') accordionItem!: ElementRef;
  @Input() rightIcon: string = '';
  @Input() leftIcon: string = '';
  @Input() titleIcon: string = '';
  @Input() header: string = '';
  @Input() itemId: number = 0;
  @Input() disabled: boolean = false;
  @Input() customStyle: { [key: string]: string } = {};
  @Input() customleftIconStyle: { [key: string]: string } = {};
  @Input() customTitleStyle: { [key: string]: string } = {};
  @Input() customtitleIconStyle: { [key: string]: string } = {};
  @Input() customrightIconStyle: { [key: string]: string } = {};
  @Input() customDescriptionStyle: { [key: string]: string } = {};
  collapsed: boolean = true;

  toggleDiv(event: any) {
    if (!this.disabled) {
      event.preventDefault();
      this.collapsed = !this.collapsed;
    }
  }
}
