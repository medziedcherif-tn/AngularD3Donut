import { Component } from '@angular/core';
import { DonutChartData } from '../models/donut-chart-data.model';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css']
})
export class ChartContainerComponent {
  // Define your portfolio data here or fetch it from a service
  portfolioData: DonutChartData[] = [
    { label: '1', value: 300, color: '#3366cc' }, // Blue
    { label: '2', value: 450, color: '#109618' }, // Green
    { label: '3', value: 250, color: '#ff9900' } // Orange
  ];

  // Handle dataset selection
  switchDataSet(dataSet: string): void {
    // Update or fetch data based on the selected dataset (dataSet)
    if (dataSet === '1') {
      this.portfolioData = [
        { label: '1', value: 300, color: '#3366cc' },
        { label: '2', value: 200, color: '#109618' },
        { label: '3', value: 150, color: '#ff9900' }
      ];
    } else if (dataSet === '2') {
      this.portfolioData = [
        { label: '1', value: 100, color: '#3366cc' },
        { label: '2', value: 400, color: '#109618' },
        { label: '3', value: 300, color: '#ff9900' }
      ];
    } else if (dataSet === '3') {
      this.portfolioData = [
        { label: '1', value: 200, color: '#3366cc' },
        { label: '2', value: 300, color: '#109618' },
        { label: '3', value: 500, color: '#ff9900' }
      ];
    }
  }
}





