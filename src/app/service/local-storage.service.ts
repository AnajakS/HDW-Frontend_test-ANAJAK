import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

  }


  getStockById(id: number) {
    let stock = this.getListStock().find((item: any) => item.id == id);
    return stock
  }

  removeById(id: number) {
    let stocks = this.getListStock()
    stocks.forEach((item: any) => {
      item.id == id ? item.status = 0 : item.status
    }
    );
    console.log(stocks);

    localStorage["stocks"] = JSON.stringify(stocks)
  }

  createStock(stock: any) {
    let stocks = this.getListStock()
    console.log(stock);
    stocks.push(stock);
    localStorage["stocks"] = JSON.stringify(stocks);
  }

  editStock(id: number, stock: any) {
    let stocks = this.getListStock()
    let objIndex = stocks.findIndex((obj: any) => obj.id === id);
    stocks[objIndex].name = stock.name
    stocks[objIndex].price = stock.price
    stocks[objIndex].image = stock.image
    stocks[objIndex].detail = stock.detail
    stocks[objIndex].rate = stock.rate
    stocks[objIndex].status = stock.status
    localStorage["stocks"] = JSON.stringify(stocks);
  }

  getListStock(): any {
    if (!localStorage["stocks"]) {
      localStorage["stocks"] = JSON.stringify([
        {
          id: 'HDW001',
          name: 'Oversize-T-shirt',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          detail: 'Black',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW002',
          name: 'Oversize-T-shirt',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
          detail: 'Whtite',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW003',
          name: 'T-shirt',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
          detail: 'Grey',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW004',
          name: 'Women-T-shirt',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
          detail: 'Pink',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW005',
          name: 'Bottle',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          detail: 'Pink',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW006',
          name: 'Bottle',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          detail: 'Green',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW007',
          name: 'Short note',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          detail: 'note',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW008',
          name: 'Pen',
          price: 35,
          image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          detail: 'Black',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW009',
          name: 'Accessories',
          price: 70,
          image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
          detail: 'note + pen',
          rate: 5,
          status: 1,
        },
        {
          id: 'HDW0010',
          name: 'Note set',
          price: 100,
          image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
          detail: 'note *3',
          rate: 5,
          status: 1,
        },
      ]
      );
    }
    let stocks = localStorage["stocks"];
    stocks = JSON.parse(stocks);
    return stocks
  }


}
