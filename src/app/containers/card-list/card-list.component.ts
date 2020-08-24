import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MediaMatcher } from '@angular/cdk/layout';
import { takeWhile } from 'rxjs/internal/operators/takeWhile';

import { CardListService } from './card-list.service';
import { Cards } from './card-list.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  mobileQuery: MediaQueryList;
  pageEvent: PageEvent;
  cardsList: Cards;
  alive = true;
  loading = true;

  listItensLength: number;
  pageSize = 9;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchValue: string;

  private _mobileQueryListener: () => void;

  constructor(
    private service: CardListService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 720px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getData(this.pageSize, 1);
  }

  getData(pageSize, pageIndex, name?) {
    this.service.get(pageSize, pageIndex, name)
      .pipe(takeWhile(() => this.alive))
      .subscribe(res => {
        this.cardsList = res.body;
        this.listItensLength = Number(res.headers.get('Total-Count'));
      }, error => {
        console.error(error);
        this.loading = false;
      }, () => this.loading = false);
  }

  handlePagination(e: any): PageEvent {
    this.getData(e.pageSize, e.pageIndex + 1, this.searchValue);
    return e;
  }

  search(e: Event) {
    this.getData(this.pageSize, 1, (e.target as HTMLInputElement).value);
    this.paginator.firstPage();
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
