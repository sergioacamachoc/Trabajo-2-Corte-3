import { TestBed } from '@angular/core/testing';
import { ElaboracionService } from './elaboracion.service';

describe('ElaboracionService', () => {
  let service: ElaboracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElaboracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
