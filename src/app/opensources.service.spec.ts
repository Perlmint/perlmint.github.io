import { TestBed, inject } from '@angular/core/testing';

import { OpensourcesService } from './opensources.service';

describe('OpensourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpensourcesService]
    });
  });

  it('should be created', inject([OpensourcesService], (service: OpensourcesService) => {
    expect(service).toBeTruthy();
  }));
});
