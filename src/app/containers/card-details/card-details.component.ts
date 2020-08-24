import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardDetailsService } from './card-details.service';
import { Location } from '@angular/common';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';

import { Card } from 'src/app/components/card/card.model';
import { AttackDetailsComponent } from '../../components/attack-details/attack-details.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})

export class CardDetailsComponent implements OnInit, OnDestroy {
  id: string;
  card: Card;
  alive = true;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private service: CardDetailsService,
    public dialog: MatDialog,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(takeWhile(() => this.alive))
      .subscribe(params => {
        this.id = params['id'];
      }, error => console.error(error));

    this.service.get(this.id)
      .pipe(takeWhile(() => this.alive))
      .subscribe(res => {
        this.card = res.cards[0];
      }, error => {
        console.error(error);
        this.loading = false;
      }, () => this.loading = false);
  }

  openDialog(item): void {
    this.dialog.open(AttackDetailsComponent, {
      width: '600px',
      data: item
    });
  }

  closePage() {
    this._location.back();
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
