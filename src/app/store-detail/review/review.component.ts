import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoresService } from '../../stores/stores.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tm-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews : Observable<any>

  constructor(private storeService: StoresService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.storeService.reviewsOfStore(this.route.parent.snapshot.params['id'])
  }

}
