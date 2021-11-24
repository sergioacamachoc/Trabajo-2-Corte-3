import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoccionComponent } from './coccion.component';

describe('CoccionComponent', () => {
  let component: CoccionComponent;
  let fixture: ComponentFixture<CoccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
