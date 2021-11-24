import { TestBed } from '@angular/core/testing';
import { CoccionService } from './coccion.service';

describe('CoccionService', () => {
  let service: CoccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
