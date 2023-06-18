import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDevice } from 'src/app/core/models/model-device';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceItemComponent implements OnInit, OnDestroy, OnChanges {

  device?: IDevice;
  deviceName!: string;
  subscription!: Subscription;

  deviceForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {

    // getting device item idicator (name) from route data 
    this.subscription = this.route.params
      .subscribe((params => {
        this.deviceName = params['name'];
      }))
    
    // getting needen device data
    this.device = this.deviceService.getDeviceByName(this.deviceName)

    // initiating form to edit device instantly
    this.deviceForm = this.fb.group({
      deviceName: new FormControl(this.device?.name),
      deviceTags: this.fb.array(this.device!.tags.map((tag: any, i: number) => new FormControl(tag))),
      deviceDescription: new FormControl(this.device?.description),
      reactiveCollections: null
    });
  }

  // making tags array as FormArray
  get deviceTags() {
    return this.deviceForm.controls["deviceTags"] as FormArray;
  }

  // listen to form changes
  ngOnChanges() {
    if (this.deviceForm) {
      this.deviceForm.setValue({ deviceName: this.device?.name, deviceTags: this.device?.tags, deviceDescription: this.device?.description });
    }
  }

  // handling form submit with edited data
  onSubmit() {

    // submit will only be handled if form is valid (name is required)
    if (this.deviceForm.valid) {
      if (this.device) {
        this.device.name = this.deviceForm.value.deviceName;
        this.device.tags = this.deviceForm.value.deviceTags;
        this.device.description = this.deviceForm.value.deviceDescription;
      }
    }
  }

  // method to remove tag from device
  removeTag(tag: string) {
    const tagsArray = this.deviceForm.get('deviceTags') as FormArray;
    const index = tagsArray.value.findIndex((value: string) => value === tag);

    if (index !== -1) {
      tagsArray.removeAt(index);
    }
  }

  // method to exit edit to be coded when task will be filled with respective requirements
  cancelEdit() { }

  // unsubscribing
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
