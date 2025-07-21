import { Component } from "@angular/core";
import { StoreComponent } from "./store/store.component";
import { BucketComponent } from "./bucket/bucket.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [StoreComponent, BucketComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
