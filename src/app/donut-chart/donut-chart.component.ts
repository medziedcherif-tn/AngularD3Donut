import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import * as d3 from 'd3';
import { DonutChartData } from '../models/donut-chart-data.model';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent implements AfterViewInit, OnChanges {
  @Input() data: DonutChartData[] = [];
  @ViewChild('donutChart', { static: false }) donutChartContainer!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data && !changes['data'].isFirstChange()) {
      console.log(this.data)
      this.renderChart();
    }
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const container = this.donutChartContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    d3.select("svg").remove();
    const svg = d3.select(container).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const radius = Math.min(width, height) / 2;

   const color = d3.scaleOrdinal()
     .domain(this.data.map(d => d.color))
     .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), this.data.length).reverse());

    const arc = d3.arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);

    const pie = d3.pie<DonutChartData>()
      .value(d => d.value)
      .sort(null);

    const pieData = pie(this.data);

    svg.selectAll('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('d', <any>arc)
      .attr("fill" , d => d.data.color);
     
  }
}