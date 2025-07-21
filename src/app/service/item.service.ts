import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor() {}

  storeItems: string[] = [];
  bucketItems: string[] = [];

  addToStore(item: string) {
    this.storeItems.push(item);
  }

  moveToBucket(index: number) {
    const item = this.storeItems.splice(index, 1)[0];
    this.bucketItems.push(item);
  }

  moveToStore(index: number) {
    const item = this.bucketItems.splice(index, 1)[0];
    this.storeItems.push(item);
  }

  removeFromStore(index: number) {
    this.storeItems.splice(index, 1);
  }

  removeFromBucket(index: number) {
    this.bucketItems.splice(index, 1);
  }
}
