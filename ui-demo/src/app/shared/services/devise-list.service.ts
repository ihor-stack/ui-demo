import { Injectable } from '@angular/core';
import { IDevice } from 'src/app/core/models/model-device';
import DevidesJson from './../../../devices.json'

@Injectable({
  providedIn: 'root'
})
export class DeviseListService {

  devices: IDevice[] = DevidesJson

  constructor(

  ) {
  }

  // get data to display as a list
  get devicesList() {
    return this.devices
  }

}


