export class ContactModal {
    public contact_id: number;
    public email: string;
    public name: string;
    public message: string;
  
    public constructor() {
      this.contact_id = 0;
      this.email = "";
      this.message = "";
      this.name = "";
    }
  }