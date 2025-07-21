import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { ItemService } from "../service/item.service";

@Component({
  selector: "app-bucket",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./bucket.component.html",
  styleUrl: "./bucket.component.css",
})
export class BucketComponent {
  constructor(public itemService: ItemService) {}

  moveToStore(index: number) {
    this.itemService.moveToStore(index);
  }

  remove(index: number) {
    this.itemService.removeFromBucket(index);
  }
}
