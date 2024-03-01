import { TestBed } from '@angular/core/testing';

import { ApiJogosService } from './api-jogos.service';

describe('ApiJogosService', () => {
  let service: ApiJogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
