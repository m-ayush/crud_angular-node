// gst-get.component.ts

import { Component, OnInit } from "@angular/core";
import Business from "../ Business";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-gst-get",
  templateUrl: "./gst-get.component.html",
  styleUrls: ["./gst-get.component.css"]
})
export class GstGetComponent implements OnInit {
  businesses: Business[];

  constructor(private bs: BusinessService) {}

  ngOnInit() {
    this.getData();
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log("Deleted");
      this.getData();
    });
  }

  getData() {
    this.bs.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }
}
