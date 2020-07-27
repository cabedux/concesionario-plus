import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesGridComponent } from './coches-grid.component';

describe('CochesGridComponent', () => {
  let component: CochesGridComponent;
  let fixture: ComponentFixture<CochesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
