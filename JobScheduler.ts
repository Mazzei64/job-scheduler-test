function JobScheduler(jobs: Job[]): Job[][] {
    const timeLimitPerJobGroup = 480; // in minutes
    jobs.map((job) => {
        if(job.tempoEstimado > timeLimitPerJobGroup)
            throw new Error(`Job ${job.ID} has its estimated execution time higher than the proposed limit.`);
        return job;
    }).sort((a, b) => a.dataMaxima.getTime() - b.dataMaxima.getTime());

    const listOfJobs: Job[][] = [];
    let currentJobs: Job[] = [];
    let timeLapse: number = timeLimitPerJobGroup;

    for (const job of jobs) {
        if (job.tempoEstimado <= timeLapse) {
            currentJobs.push(job);
            timeLapse -= job.tempoEstimado;
            continue;
        }
        listOfJobs.push(currentJobs);
        currentJobs = [job];
        timeLapse = timeLimitPerJobGroup - job.tempoEstimado;
        
    }
    listOfJobs.push(currentJobs);

    return listOfJobs;
}
  