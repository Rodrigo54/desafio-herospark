import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Section1Component implements OnInit {

  constructor() { }

  cards = [1, 2, 3, 4];

  ngOnInit(): void {
  }

}
