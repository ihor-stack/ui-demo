import { Component } from '@angular/core';
import { IBreadcrumb } from 'src/app/core/models/model-breadcrumb';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumbs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // constructor(private breadcrumbService: BreadcrumbService) {}

  // ngOnInit(): void {
  //   const homeBreadcrumb: IBreadcrumb = {
  //     label: 'Home',
  //     url: '/home'
  //   };

  //   this.breadcrumbService.setBreadcrumbTrail([homeBreadcrumb]);
  // }
}
