import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../stores/stores.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItens : Observable<MenuItem[]>

  constructor(private storeService : StoresService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.menuItens = this.storeService.menuOfStore(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item : MenuItem){
    console.log(item);
  }

}
