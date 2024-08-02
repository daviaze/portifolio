/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScrollSectionService } from './scroll-section.service';

describe('Service: ScrollSection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollSectionService]
    });
  });

  it('should ...', inject([ScrollSectionService], (service: ScrollSectionService) => {
    expect(service).toBeTruthy();
  }));
});
