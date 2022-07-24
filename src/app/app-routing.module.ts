import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './stocks/create-stock/create-stock.component';
import { EditStockComponent } from './stocks/edit-stock/edit-stock.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  {
    path: 'stocks',
    component: StocksComponent,
  },
  // { path: 'stocks', component: StocksComponent },
  { path: 'edit_stock/:stock_id', component: EditStockComponent },
  { path: 'create_stock', component: CreateStockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
