export class JobModal {
    public job_id: number;
    public employer_id: number;
    public company_name: string;
    public job_title: string;
    public job_description: string;
    public salary: number;
    public location: string;
    public job_start_date: string;
    public application_deadline: string;

    public constructor() {
        this.job_id = 0;
        this.employer_id = 0;
        this.job_title = "";
        this.job_description = "";
        this.company_name = "";
        this.salary = 0;
        this.location = "";
        this.job_start_date = "";
        this.application_deadline = "";
    }
}