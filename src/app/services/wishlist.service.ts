import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist = [];

  constructor() { }

  addToWishlist(item) {
    this.wishlist.push(item);
  }

  getWishlist() {
    return this.wishlist;
  }

  isItemInWishlist(item) {
    return this.wishlist.some(wishItem => wishItem.id === item.id);
  }

  removeFromWishlist(item) {
    this.wishlist = this.wishlist.filter(wishItem => wishItem.id !== item.id);
  }
}
