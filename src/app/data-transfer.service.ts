import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private teacherData = new BehaviorSubject<any>({});
  currentData = this.teacherData.asObservable();

  constructor() { }

  updateData(data: any) {
    this.teacherData.next(data);
  }

}
