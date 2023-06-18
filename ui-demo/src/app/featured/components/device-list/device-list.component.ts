import { Component, OnInit } from '@angular/core';
import { IDevice } from 'src/app/core/models/model-device';
import { DeviseListService } from 'src/app/shared/services/devise-list.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  devices: IDevice[] = []
  currentPage = 1
  limit = 10
  total = this.deviceListService.devicesList.length

  constructor(
    private deviceListService: DeviseListService
  ) {
  }

  ngOnInit(): void {
    this.devisesPerPage();
  }

  // listening to page change and recalculating list of data to display
  changePage(page: any) {
    this.currentPage = page;
    this.devisesPerPage()
  }

  // listening to items per page limit change and recalculating list of data to display starting from page 1
  changeLimit(limit: number) {
    this.limit = limit
    this.currentPage = 1
    this.devisesPerPage()
  }

  // method to modify data list according to page
  devisesPerPage() {
    const start = (this.currentPage - 1) * this.limit;
    const end = start + this.limit > this.total ? this.total : start + this.limit
    this.devices = this.deviceListService.devicesList
      .slice(start, end);
  }

}
