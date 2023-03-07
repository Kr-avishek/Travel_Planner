import { Component,ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [CommonModule,NgbNavModule,FormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {
  @ViewChild('start',{static:false}) start !:ElementRef;
  @ViewChild('end') end!:ElementRef;
}
