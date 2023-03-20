import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {} 
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
