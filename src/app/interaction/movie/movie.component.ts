import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  @Output() eventLike = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  like() {
    //emit giúp truyền dữ liệu ra ngoài cmp cha
    this.eventLike.emit(this.movie);
  }
}
