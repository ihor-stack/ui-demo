import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  breadcrumbTrail$ = this.breadcrumbService.breadcrumbTrail$;

  constructor(private breadcrumbService: BreadcrumbService) {}
}
