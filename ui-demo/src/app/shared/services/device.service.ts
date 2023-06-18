import { Injectable } from '@angular/core';
import { IDevice } from 'src/app/core/models/model-device';
import { DeviseListService } from './devise-list.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  device!: IDevice;

  constructor(
    private DeviseListServise: DeviseListService
  ) {
  }

  //getting data by id wich is name here
  getDeviceByName(name: string) {
    return this.DeviseListServise.devices.find(e => e.name === name)
  }

  // getting all data
  getDevises() {
    return this.DeviseListServise.devices
  }
}
