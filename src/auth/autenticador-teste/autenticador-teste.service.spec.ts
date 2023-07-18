import { Test, TestingModule } from '@nestjs/testing';
import { AutenticadorTesteService } from './autenticador-teste.service';

describe('AutenticadorTesteService', () => {
  let service: AutenticadorTesteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutenticadorTesteService],
    }).compile();

    service = module.get<AutenticadorTesteService>(AutenticadorTesteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
