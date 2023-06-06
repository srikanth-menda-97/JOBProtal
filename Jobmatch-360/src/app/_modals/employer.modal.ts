export class EmployerModal {
    public employer_id: number;
    public username: string;
    public password: string;
    public email: string;
    public phone: string;
    public company_name: string;
  
    public constructor() {
      this.employer_id = 0;
      this.username = "";
      this.password = "";
      this.email = "";
      this.phone = "";
      this.company_name = "";
    }
  }