import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Zone} from '../../zone/zone';
import {Plan} from '../plan';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {
  currentPlan: Plan;
  @Input() showInfoModal = false;
  @Output() showInfoModalChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cancel() {
    this.showInfoModal = false;
    this.showInfoModalChange.emit(this.showInfoModal);
  }

}
