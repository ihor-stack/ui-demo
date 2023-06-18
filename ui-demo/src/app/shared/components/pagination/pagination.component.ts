import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() limit!: number;
  @Input() total!: number;

  @Output() changePage = new EventEmitter<number>();
  @Output() changeLimit = new EventEmitter<number>();

  pages: number [] = []

  ngOnInit(): void {
    this.countPages()
  }

  // creating range of pages according to data size
  range(start: number, end: number): number[]{
    return [...Array(end).keys()].map((e) => e + start)
  }

  // handling limit of data items per page
  onSelected(limit:string){
    this.changeLimit.emit(+limit)
    this.limit = +limit
    this.countPages();
  }

  // counting number of pages needed according to the limit and data size
  countPages(){
    const pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.range(1, pagesCount)
  }

}
