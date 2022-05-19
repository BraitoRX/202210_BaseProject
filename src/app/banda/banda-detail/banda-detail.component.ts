import { Component, Input, OnInit } from '@angular/core';
import { banda } from '../banda';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {
  @Input() selectedSbanda!: banda;
  constructor() { }

  ngOnInit() {
  }

}
