import { Component, OnInit } from '@angular/core';
import { PublicApiClient } from 'src/app/services/public-api.client';
@Component({
  selector: 'app-adm-list-inventory',
  templateUrl: './adm-list-inventory.component.html',
  styleUrls: ['./adm-list-inventory.component.scss']
})
export class AdmListInventoryComponent implements OnInit {

  list;
  posts;
  loading= false;
  constructor(private publicApi: PublicApiClient) { }

  ngOnInit() {
    this.fetchList();
    this.fetchPost();
  }

  fetchList() {
    this.loading = true;
    this.list = null;
    setTimeout(() => {
      this.publicApi.get('users')
      .subscribe((res: any) => {
        this.loading = false;
        this.list = res.data;
      }, (err) => {
        this.loading = false;
        console.warn("Error while fetching list", err);
      }, () => {
        console.log("Request completed");
      })
    }, 1000);
  }

  fetchPost() {
    this.publicApi.get('posts')
      .subscribe((res: any) => {
        this.posts = res.data;
      }, (err) => {
        console.warn("Error while fetching list", err);
      }, () => {
        console.log("Request completed");
      })
  }

}
