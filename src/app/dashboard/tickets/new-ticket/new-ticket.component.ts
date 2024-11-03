import { afterNextRender, afterRender, Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
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
  add = output<{title: string, text: string}>();

  constructor(){}


  onSubmit(title : string, request : string){
    this.add.emit({
      title : title,
      text : request
    });
    this.form?.nativeElement.reset();
  }

}
