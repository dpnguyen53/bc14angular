import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  status: boolean = false;
  @Output() eventSeat = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectSeat() {
    this.status = !this.status;
    //truyền seat ra ngoài listSeat
    this.eventSeat.emit({ seat: this.seat, status: this.status });
  }
}
