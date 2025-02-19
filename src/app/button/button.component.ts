import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input() buttonStyle: 'primary' | 'secundary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() shape: 'normal' | 'circle' | 'square' = 'normal';
  @Input() expanded: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() customClass: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize' =
    'none';
  @Input() customStyle: { [key: string]: string } = {};
}
