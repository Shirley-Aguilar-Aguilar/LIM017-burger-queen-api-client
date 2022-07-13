import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceOutputService {
  @Output() triggerOutput: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
