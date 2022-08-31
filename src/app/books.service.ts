import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // our books array
  books = [
    {
      id: 1,
      name: 'Clean Code',
      photo:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY327_FMwebp_QL65_.jpg',
      price: '30$',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Grokking Algo',
      photo:
        'https://m.media-amazon.com/images/I/91p7WLtvCAL._AC_UY327_FMwebp_QL65_.jpg',
      price: '28$',
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Head First OO D&A',
      photo:
        'https://m.media-amazon.com/images/I/91mi4Cysj-L._AC_UY327_FMwebp_QL65_.jpg',
      price: '33$',
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Software Architect',
      photo:
        'https://m.media-amazon.com/images/I/713o0wK9yYL._AC_UY327_FMwebp_QL65_.jpg',
      price: '35$',
      isFavorite: false,
    },
    {
      id: 5,
      name: 'You Are a Badass',
      photo:
        'https://m.media-amazon.com/images/I/81KUJ56sW3L._AC_UY327_FMwebp_QL65_.jpg',
      price: '10$',
      isFavorite: false,
    },
    {
      id: 6,
      name: 'Atomic Habits',
      photo:
        'https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg',
      price: '20$',
      isFavorite: false,
    },
    {
      id: 7,
      name: 'Stop Overthinking',
      photo:
        'https://m.media-amazon.com/images/I/71Lvac+tHQL._AC_UY327_FMwebp_QL65_.jpg',
      price: '9$',
      isFavorite: false,
    },
    {
      id: 8,
      name: 'Whatever it takes',
      photo:
        'https://m.media-amazon.com/images/I/71ZWm0rmwmL._AC_UY327_FMwebp_QL65_.jpg',
      price: '15$',
      isFavorite: false,
    },
    {
      id: 9,
      name: 'Rich Dad Poor Dad',
      photo:
        'https://m.media-amazon.com/images/I/814XbqXAz-L._AC_UY327_FMwebp_QL65_.jpg',
      price: '17$',
      isFavorite: false,
    },
    {
      id: 10,
      name: 'Think grow rich',
      photo:
        'https://m.media-amazon.com/images/I/718wzK6mymL._AC_UY327_FMwebp_QL65_.jpg',
      price: '12$',
      isFavorite: false,
    },
    {
      id: 11,
      name: 'Mindful discipline',
      photo:
        'https://m.media-amazon.com/images/I/61EJP-4paRL._AC_UY327_FMwebp_QL65_.jpg',
      price: '8$',
      isFavorite: false,
    },
    {
      id: 12,
      name: 'Make your bed',
      photo:
        'https://m.media-amazon.com/images/I/81tqQak257L._AC_UY327_FMwebp_QL65_.jpg',
      price: '7$',
      isFavorite: false,
    },
    {
      id: 13,
      name: 'Good vibes & life',
      photo:
        'https://m.media-amazon.com/images/I/61TGDPQr+YL._AC_UY327_FMwebp_QL65_.jpg',
      price: '14$',
      isFavorite: false,
    },
    {
      id: 14,
      name: 'The Road',
      photo:
        'https://images-na.ssl-images-amazon.com/images/I/41OYjTKJ8eL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      price: '11$',
      isFavorite: false,
    },
    {
      id: 15,
      name: 'Bad Guys',
      photo:
        'https://m.media-amazon.com/images/I/71VZGrjyqCL._AC_UY327_FMwebp_QL65_.jpg',
      price: '3$',
      isFavorite: false,
    },
    {
      id: 16,
      name: 'Guid to Murder',
      photo:
        'https://m.media-amazon.com/images/I/81jasyjB5LL._AC_UY327_FMwebp_QL65_.jpg',
      price: '3$',
      isFavorite: false,
    },
  ];
  constructor() {}

  getBooks() {
    return this.books;
  }
}
