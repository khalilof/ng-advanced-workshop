import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITable } from '../../../model/table.interface';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {
  myData: ITable | undefined;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      this.myData = data;
      console.log(data);
    })
  }

}
