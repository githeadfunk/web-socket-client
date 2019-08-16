import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  id;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('uid');
    console.log('id: ', this.id);
  }

}
