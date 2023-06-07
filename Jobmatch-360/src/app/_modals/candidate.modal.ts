export class CandidateModal {
    public candidate_id: number;
    public username: string;
    public password: string;
    public email: string;
    public phone: string;
    public name: string;
  
    public constructor() {
      this.candidate_id = 0;
      this.username = "";
      this.password = "";
      this.email = "";
      this.phone = "";
      this.name = "";
    }
  }