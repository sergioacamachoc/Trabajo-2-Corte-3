import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaboracionComponent } from './elaboracion.component';

describe('ElaboracionComponent', () => {
  let component: ElaboracionComponent;
  let fixture: ComponentFixture<ElaboracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElaboracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
