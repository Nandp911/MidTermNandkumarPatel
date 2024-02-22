import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputComponent} from "./input/input.component";
import {OutputComponent} from "./output/output.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, OutputComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MidTermNandkumarPatel';
}
