export interface CoworkerInfo {
    name: string;
    lastName: string;
    age?: number;
    job: JobDescription[];
  }
  
export interface JobDescription {
    title: string;
    years: number;
    salary: number;
  }
  
export interface ContractorInfo extends CoworkerInfo {
    contractDuration: number;
    contractDescription: string;
    compensation: number;
  }
  
export interface AssistantInfo extends ContractorInfo {
    duties: string[];
    legalDocument: string;
  }
  