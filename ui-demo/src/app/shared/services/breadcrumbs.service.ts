import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IBreadcrumb } from 'src/app/core/models/model-breadcrumb';

@Injectable()
export class BreadcrumbService {
  private breadcrumbTrail: IBreadcrumb[] = [];
  breadcrumbTrail$ = new BehaviorSubject<IBreadcrumb[]>(this.breadcrumbTrail);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbTrail = this.generateBreadcrumbTrail(this.router.routerState.snapshot.root);
        this.breadcrumbTrail$.next(this.breadcrumbTrail);
      });
  }

  // method to create breadcrumps
  generateBreadcrumbTrail(route: ActivatedRouteSnapshot): IBreadcrumb[] {
    const breadcrumbs: IBreadcrumb[] = [];

    if (route.data && route.data['breadcrumb']) {
      breadcrumbs.push({
        label: route.data['breadcrumb'],
        url: this.createUrl(route)
      });
    }

    // Check if the route has a child
    if (route.firstChild) {
      const childBreadcrumbs = this.generateBreadcrumbTrail(route.firstChild);
      breadcrumbs.push(...childBreadcrumbs);
    }

    // Check if the route has a :name parameter
    if (route.params && route.params['name']) {
      breadcrumbs[breadcrumbs.length - 1].label = route.params['name'];
    }

    return breadcrumbs;
  }


  // Make respective url 
  createUrl(route: ActivatedRouteSnapshot): string {
    const urlSegments: string[] = [];

    if (route.url.length) {
      const segmentStrings = route.url.map(segment => segment.toString());
      urlSegments.unshift(...segmentStrings);
    }

    return `/${urlSegments.join('/')}`;
  }
}
