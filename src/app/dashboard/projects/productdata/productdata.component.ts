// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { AddProductComponent } from '../add-product/add-product.component';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';

// @Component({
//   selector: 'team-center-productdata',
//   templateUrl: './productdata.component.html',
//   styleUrls: ['./productdata.component.scss']
// })
// export class ProductdataComponent implements OnInit {
//   displayedColumns: string[] = ['sno', 'products', 'onboardingtime', 'createdby', 'view'];
//   dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
//   allData: any;

//   constructor(
//     private matdialog: MatDialog,
//     private service: AuthService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = parseInt(this.router.url.split('/')[3]);
//     this.displayProducts(id);
//   }

//   addProduct(): void {
//     this.matdialog.open(AddProductComponent, {
//       disableClose: true,
//       enterAnimationDuration: '200ms',
//       exitAnimationDuration: '200ms'
//     });
//   }

//   on_change(event: any): void {
//     const filteredData = this.allData.filter((ele: any) =>
//       ele.product_name.toLowerCase().includes(event)
//     );
//     this.dataSource.data = filteredData;
//   }

//   private async displayProducts(id: any): Promise<void> {
//     try {
//       const res: any = await this.service.productData(id).toPromise();
//       this.allData = res.status === 1 ? res.products : [];
//       this.dataSource.data = this.allData;
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'team-center-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.scss']
})
export class ProductdataComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'products', 'onboardingtime', 'createdby', 'view'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  allData: any[] = [];

  constructor(
    private matdialog: MatDialog,
    private service: AuthService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = parseInt(this.router.url.split('/')[3]);
    await this.displayProducts(id);
  }

  async addProduct(): Promise<void> {
    const dialogRef = this.matdialog.open(AddProductComponent, {
      disableClose: true,
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms'
    });

    await dialogRef.afterClosed().toPromise();
    // Refresh data after the dialog is closed, if needed
    const id = parseInt(this.router.url.split('/')[3]);
    await this.displayProducts(id);
  }

  on_change(event: any): void {
    this.dataSource.filter = event.trim().toLowerCase();
  }

  private async displayProducts(id: any): Promise<void> {
    try {
      let token:any=localStorage.getItem('token');
      const res: any = await this.service.productData(id,token).toPromise();
      this.allData = res.status === 1 ? res.products : [];
      this.dataSource.data = this.allData;
      this.dataSource.filterPredicate = (data, filter: string) =>
        data.product_name.toLowerCase().includes(filter);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}

