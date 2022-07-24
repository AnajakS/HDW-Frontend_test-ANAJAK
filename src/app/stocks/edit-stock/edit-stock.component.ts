import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  stocks: any[] = [];
  stock: any

  cover: any = "";
  name = new FormControl('');
  stockForm: FormGroup;
  constructor(
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.stock = this.localStorageService.getStockById(params['stock_id'])
    })

    this.stockForm = this._formBuilder.group({
      id: [''],
      name: [''],
      image: [''],
      price: [''],
      detail: [''],
      rate: [''],
      status: [''],
    });
    this.stockForm.patchValue(this.stock)
    this.cover = this.stockForm.value.image

  }

  onUploadCover(event: any) {

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      if (this.checkImage(event.target.files[0].name) == false) {
        window.alert(
          'Only .jpg , .jpeg , .png files can be uploaded'
        );
        return;
      }

      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.cover = reader.result as string;
        this.stockForm.value.image = this.cover;
      };

    }

  }

  getExtension(filename: any) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

  checkImage(filename: any) {
    var ext = this.getExtension(filename);

    switch (ext.toLowerCase()) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        //etc
        return true;
    }
    return false;
  }

  onDeleteCover() {
    this.cover = null;
    // this.data_cover.splice(0, 1);
    // this.inputCover.nativeElement.value = null;

  }

  editStock() {
    this.stockForm.value.image = this.cover;
    this.localStorageService.editStock(this.stockForm.value.id, this.stockForm.value)
    window.alert(
      'EDITED'
    );
  }

}
