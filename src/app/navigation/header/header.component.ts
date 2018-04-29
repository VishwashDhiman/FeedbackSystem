import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavTog = new EventEmitter<void>();
  constructor() { }
  user = true;

  ngOnInit() {
  }

  toggleOnCLick(){
    this.sideNavTog.emit();
  }
}
