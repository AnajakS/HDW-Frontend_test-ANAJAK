import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from './../service/local-storage.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: any[] = [];
  check: any[] = [];
  p: number = 1;
  searchForm: FormGroup;

  constructor(
    private localStorageService: LocalStorageService,
    private _formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.stocks = this.localStorageService.getListStock().filter((stock: any) => stock.status == 1)
    this.searchForm = this._formBuilder.group({
      search: [''],
    });
  }

  removeById(id: number) {
    this.localStorageService.removeById(id);
    this.stocks = this.localStorageService.getListStock().filter((stock: any) => stock.status == 1)
    window.alert(
      'DELETED'
    );

  }
  removeBySelect() {
    this.check.forEach((id: any) => { this.localStorageService.removeById(id) })
    this.stocks = this.localStorageService.getListStock().filter((stock: any) => stock.status == 1)
    window.alert(
      'DELETED'
    );
  }

  search(event: any) {
    if (event.key == "Enter") {
      this.stocks = this.localStorageService.getListStock().filter((stock: any) => stock.name.includes(this.searchForm.value.search))
    }
  }

  checkId(event: any, stock: any) {

    if (event.checked) {
      this.check.push(stock.id)
    }
    else {
      this.check.splice(this.check.indexOf(stock.id), 1)
    }
  }



}
