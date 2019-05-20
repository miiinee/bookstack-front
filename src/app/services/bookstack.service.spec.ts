import { TestBed } from '@angular/core/testing';

import { BookstackService } from './bookstack.service';

describe('BookstackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookstackService = TestBed.get(BookstackService);
    expect(service).toBeTruthy();
  });
});
