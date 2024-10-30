import { Component,  DestroyRef,  inject,  OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{

  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroRef = inject(DestroyRef);

  constructor(){}
  
  ngOnInit(){
    const interval = setInterval(() => {
      const rmd = Math.random();
      if(rmd < 0.5){
        this.currentStatus = 'online';
      }else if(rmd < 0.9){
        this.currentStatus = 'offline';
      }else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

}
