import { TestBed } from '@angular/core/testing';

import { RegistroContactoService } from './registro-contacto.service';

describe('RegistroContactoService', () => {
  let service: RegistroContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
