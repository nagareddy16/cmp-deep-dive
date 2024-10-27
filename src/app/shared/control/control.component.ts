import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation : ViewEncapsulation.None,
  host:{
    class:"control",
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  private el = inject(ElementRef);

  label = input.required<string>();

  onClick(){
    console.log("clicked");
    console.log(this.el);
  }
}
