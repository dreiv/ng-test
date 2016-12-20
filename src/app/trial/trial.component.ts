import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-trial',
  template: `<h1>trial data: {{data}}</h1>`,
  providers: [HelloService]
})
export class TrialComponent implements OnInit {
  data: any;

  constructor(private service: HelloService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe((data: string) => this.data = data);
  }

}
