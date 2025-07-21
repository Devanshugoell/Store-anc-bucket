import { Component } from "@angular/core";
import { ItemService } from "../service/item.service";
import { NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-store",
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: "./store.component.html",
  styleUrl: "./store.component.css",
})
export class StoreComponent {
  newItem = "";

  constructor(public itemService: ItemService) {}

  addItem() {
    if (this.newItem.trim()) {
      this.itemService.addToStore(this.newItem);
      this.newItem = "";
    }
  }

  moveToBucket(index: number) {
    this.itemService.moveToBucket(index);
  }

  remove(index: number) {
    this.itemService.removeFromStore(index);
  }
}
