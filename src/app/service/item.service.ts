import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor() {
    this.loadFromStorage();
  }

  storeItems: string[] = [];
  bucketItems: string[] = [];

  private saveToStorage() {
    localStorage.setItem("storeItems", JSON.stringify(this.storeItems));
    localStorage.setItem("bucketItems", JSON.stringify(this.bucketItems));
  }

  private loadFromStorage() {
    const store = localStorage.getItem("storeItems");
    const bucket = localStorage.getItem("bucketItems");
    this.storeItems = store ? JSON.parse(store) : [];
    this.bucketItems = bucket ? JSON.parse(bucket) : [];
  }

  addToStore(item: string) {
    this.storeItems.push(item);
    this.saveToStorage();
  }

  moveToBucket(index: number) {
    const item = this.storeItems.splice(index, 1)[0];
    this.bucketItems.push(item);
    this.saveToStorage();
  }

  moveToStore(index: number) {
    const item = this.bucketItems.splice(index, 1)[0];
    this.storeItems.push(item);
    this.saveToStorage();
  }

  removeFromStore(index: number) {
    this.storeItems.splice(index, 1);
    this.saveToStorage();
  }

  removeFromBucket(index: number) {
    this.bucketItems.splice(index, 1);
    this.saveToStorage();
  }
}
