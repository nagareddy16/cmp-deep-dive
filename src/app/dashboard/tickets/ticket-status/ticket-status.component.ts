import { Component, input } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-status',
  standalone: true,
  imports: [],
  templateUrl: './ticket-status.component.html',
  styleUrl: './ticket-status.component.css'
})
export class TicketStatusComponent {

  data = input.required<Ticket>();
}
