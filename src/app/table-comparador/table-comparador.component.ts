import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-comparador',
  templateUrl: './table-comparador.component.html',
  styleUrls: ['./table-comparador.component.css']
})
export class TableComparadorComponent implements OnInit {
  data: any[] = []; 
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.data = data;
    });
  }
}

