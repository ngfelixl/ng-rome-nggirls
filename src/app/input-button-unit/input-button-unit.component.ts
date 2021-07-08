import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}