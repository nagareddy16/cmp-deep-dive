import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-tem',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-tem.component.html',
  styleUrl: './dashboard-tem.component.css'
})
export class DashboardTemComponent {

  @Input({required:true}) image!:{src:string; alt:string};
  @Input({required : true}) title!:string;

  /* image = input.required<{src:string; alt:string}>();
  title = input.required<string>(); */
}
