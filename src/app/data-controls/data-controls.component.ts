import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-controls',
  templateUrl: './data-controls.component.html',
  styleUrls: ['./data-controls.component.css']
})
export class DataControlsComponent {
  @Output() dataSetSelected = new EventEmitter<string>();

  onSelectDataSet(dataSet: string): void {
    this.dataSetSelected.emit(dataSet);
  }
}
