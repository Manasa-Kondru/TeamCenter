import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'team-center-productsgraph',
  templateUrl: './productsgraph.component.html',
  styleUrls: ['./productsgraph.component.scss']
})
export class ProductsgraphComponent {
  constructor(private dialogRef: MatDialogRef<ProductsgraphComponent>, @Optional() @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    let labels: any = this.data?.map((ele: any) => { return ele.client_name });
    let values: any = this.data?.map((ele: any) => { return ele.no_of_products });
    // if (![undefined, null, ''].includes(this.data)) {
    //   let result: any = this.data.reduce((prv: any, curr: any) => {
    //     prv[0].push(curr.client_name);
    //     prv[1].push(curr.no_of_products);
    //     return prv;
    //   }, [])
    Highcharts.chart('container', {
      chart: {
        type: 'column', // line ,bar, pie, area
        zoomType:'xy', //for x-axis and y-axis zoom ,select the area which you want to zoom in
      },
      title: {
        text: 'Comparision of No.of Products'
      },
      xAxis: {
        categories: labels,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'No.of Products'
        }
      },
      credits:
      {
        enabled: false, //to remove watermark like highcharts.com
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'CLIENTS',
        data: values

      }]
    } as any);
  }

}
