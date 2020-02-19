import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Section2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
