// JobScheduler.test.ts

// import JobScheduler from './../JobScheduler';
import Job from './../interfaces/Job';
import jobs from './SampleJobs';

describe('JobScheduler', () => {

  it('should group jobs correctly', () => {
    // // Create some sample jobs for testing
    

    // // Call the JobScheduler function
    // const result = JobScheduler(jobs);

    // // Write assertions to check if the function produces the expected output
    // expect(result).toEqual([
    //   [
    //     { ID: 1, tempoEstimado: 100, dataMaxima: expect.any(Date) },
    //     { ID: 2, tempoEstimado: 200, dataMaxima: expect.any(Date) },
    //   ],
    //   [
    //     { ID: 3, tempoEstimado: 300, dataMaxima: expect.any(Date) },
    //   ],
      
    // ]);
  });

  it('should throw an error if any job exceeds the time limit', () => {
    // Create a job that exceeds the time limit
    // const jobs: Job[] = [
    //   { ID: 1, tempoEstimado: 500, dataMaxima: new Date(), descricao: 'random descricao' },
    // ];

    // // Use Jest's expect().toThrow() to check if the function throws an error
    // expect(() => {
    //   JobScheduler(jobs);
    // }).toThrowError(/Job 1 has its estimated execution time higher than the proposed limit/);
  });

  // Add more test cases as needed
});
