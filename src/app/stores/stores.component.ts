import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.model';
import { StoresService } from './stores.service';

@Component({
  selector: 'tm-stores',
  templateUrl: './stores.component.html'
})
export class StoresComponent implements OnInit {

  stores: Store[]

  constructor(private storesService: StoresService) { }

  ngOnInit() {
     this.storesService.getStores().subscribe(stores => this.stores = stores)
  }

}
