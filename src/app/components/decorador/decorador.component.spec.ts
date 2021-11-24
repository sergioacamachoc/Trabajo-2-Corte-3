import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradorComponent } from './decorador.component';

describe('DecoradorComponent', () => {
  let component: DecoradorComponent;
  let fixture: ComponentFixture<DecoradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
