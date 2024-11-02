import { Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

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

  /* using the directives */
  @ContentChild('input') control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  onClick(){
    console.log("clicked");
    console.log(this.el);
    console.log(this.control);
  }

  /*   using the signal's

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick(){
    console.log("clicked");
    console.log(this.el);
    console.log(this.control());
  } */
}
