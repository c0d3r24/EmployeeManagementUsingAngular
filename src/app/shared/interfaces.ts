export interface IEmployee {
  id: number;
  name: string;
  city: string;
  projects?: number;
  started: any;
  salary: number;
}

export interface IProject {
  employeeId: number;
  projectIds: IProjectItem[];
}

export interface IProjectItem {
  id: number;
  projectName: string;
  estimateCost: number;
}
