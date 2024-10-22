// src/store/mutations.ts
import { MutationTree } from 'vuex';
import { State } from './state';
import { Employee } from '../interfaces';

export const mutations: MutationTree<State> = {
  toggleNavDrawer(state) {
    state.drawerOpen =  !state.drawerOpen
  },

  setShowAddEmployeeForm(state, val) {
    state.showAddEmployeeForm = val
  },

  setShowEditEmployeeForm(state, val) {
    state.showEditEmployeeForm = val
  },

  setEmployees(state, employees: Employee[]) {
    state.employees = employees
  },

  addEmployee(state, employee: Employee) {
    employee.id = state.employees.length + 1
    state.employees.push(employee)
  },

  editEmployee(state, employee: Employee) {
    const index = state.employees.findIndex(emp => emp.id === employee.id);
    if (index !== -1) {
      state.employees[index] = employee
    }
  },

  deleteEmployees(state, ids: number[]) {
    state.employees = state.employees.filter(employee => !ids.includes(employee.id  as number));
  },
  
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};
