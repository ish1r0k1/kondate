import { TestBed } from '@angular/core/testing';

import { WeeksRepository } from './weeks.repository';

describe('WeeksRepository', () => {
  let service: WeeksRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeksRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
