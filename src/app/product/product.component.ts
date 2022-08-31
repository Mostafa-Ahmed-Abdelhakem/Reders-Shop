import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [BooksService],
})
export class ProductComponent implements OnInit {
  // variables and data
  books: any = this.myService.getBooks();
  myFilter: any;

  constructor(private myService: BooksService) {}

  ngOnInit(): void {
    console.log(this.books);
  }
  //methods
  favorite(i: any) {
    i.isFavorite = !i.isFavorite;
  }
}
