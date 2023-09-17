import JobScheduler from './../JobScheduler';
import Job from './../interfaces/Job';
import jobs from './SampleJobs';

describe('JobScheduler', () => {

  it('should group jobs correctly', () => {
    
    const result = JobScheduler(jobs);

    expect(result).toEqual([
      [
        { ID: 1, descricao: 'Salvar submarino submerso', tempoEstimado: 100, dataMaxima: expect.any(Date) },
        { ID: 2, descricao: 'Salvar o mundo da fome', tempoEstimado: 200, dataMaxima: expect.any(Date) },
      ],
      [
        { ID: 3, descricao: 'Lavar a louça de domingo', tempoEstimado: 300, dataMaxima: expect.any(Date) },
      ],
      
    ]);
  });

  it('should throw an error if any job exceeds the time limit', () => {
    // Create a job that exceeds the time limit
    const jobs: Job[] = [
      { ID: 1, tempoEstimado: 500, dataMaxima: new Date(), descricao: 'random descricao' },
    ];

    expect(() => {
      JobScheduler(jobs);
    }).toThrowError(/Job 1 has its estimated execution time higher than the proposed limit/);
  });

});
