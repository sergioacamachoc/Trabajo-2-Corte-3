import { TestBed } from '@angular/core/testing';
import { FinalService } from './final.service';

describe('FinalService', () => {
  let service: FinalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
