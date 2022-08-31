import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  myFilter: any;

  // variables and data
  books: any = this.myService.getBooks();

  constructor(private myService: BooksService) {}

  ngOnInit(): void {
    console.log(this.books);
  }
  //methods
  favorite(i: any) {
    i.isFavorite = !i.isFavorite;
  }
}
