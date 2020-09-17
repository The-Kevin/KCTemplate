import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private service:ApiService ) { }

  ngOnInit(): void {
    
  }

}
