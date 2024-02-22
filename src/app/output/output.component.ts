import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../data-transfer.service";

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements OnInit {
  data: any = {};

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.dataTransferService.currentData.subscribe(data => this.data = data);
  }
}
