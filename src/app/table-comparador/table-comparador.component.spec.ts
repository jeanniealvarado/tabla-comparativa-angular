import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComparadorComponent } from './table-comparador.component';

describe('TableComparadorComponent', () => {
  let component: TableComparadorComponent;
  let fixture: ComponentFixture<TableComparadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComparadorComponent]
    });
    fixture = TestBed.createComponent(TableComparadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
