import { Component } from '@angular/core';
import { DummyTraficData } from '../../dummy.trafic';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {

  dummyTrafficdata = DummyTraficData;
  maxTraffic = 0;
}
