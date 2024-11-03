import { afterNextRender, afterRender, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  /* using the directives*/
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; 

  constructor(){}

  /* using the viewChild signal function 
  private form = viewChild<ElementRef<HTMLFormElement>>('form');
  onSubmit(title : string, request : string){
    console.log("title: ", title);
    console.log("request: ", request);
    this.form()?.nativeElement.reset();
  }
     (or) 
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title : string, request : string){
    console.log("title: ", title);
    console.log("request: ", request);
    this.form().nativeElement.reset();
  }
  */

  onSubmit(title : string, request : string){
    console.log("title: ", title);
    console.log("request: ", request);
    this.form?.nativeElement.reset();
  }

}
