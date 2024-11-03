import { Component,  DestroyRef,  effect,  inject,  OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{

  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroRef = inject(DestroyRef);

  constructor(){
    effect((onCleanup) => {
      console.log(this.currentStatus());
    });
    
  }
  
  ngOnInit(){
    const interval = setInterval(() => {
      const rmd = Math.random();
      if(rmd < 0.5){
        this.currentStatus.set('online');
      }else if(rmd < 0.9){
        this.currentStatus.set('offline');
      }else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

}
