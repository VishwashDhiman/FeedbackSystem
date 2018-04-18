import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() listclose = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  listClose(){
    this.listclose.emit();
  }

}
