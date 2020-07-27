import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesDetailComponent } from './coches-detail.component';

describe('CochesDetailComponent', () => {
  let component: CochesDetailComponent;
  let fixture: ComponentFixture<CochesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CochesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
