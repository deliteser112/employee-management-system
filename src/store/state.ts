import { Employee } from "../interfaces";

export interface State {
    count: number;
    drawerOpen: boolean;
    employees: Employee[];
    showAddEmployeeForm: boolean;
    showEditEmployeeForm: boolean;
  }
  
  export const state: State = {
    count: 0,
    drawerOpen: true,
    employees: [],
    showAddEmployeeForm: false,
    showEditEmployeeForm: false
  };
  