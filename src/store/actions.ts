// src/store/actions.ts
import { ActionTree } from 'vuex';
import { State } from './state';
import db from '../db';
import { Employee } from '../interfaces';

export const actions: ActionTree<State, State> = {
 toggleNavDrawer({ commit }) {
  commit('toggleNavDrawer');
 },

 showAddEmployeeForm({ commit }) {
  commit('setShowAddEmployeeForm', true)
 },

 showEditEmployeeForm({ commit }) {
  commit('setShowEditEmployeeForm', true)
 },

 closeAddEmployeeForm({ commit }) {
  commit('setShowAddEmployeeForm', false)
 },

 closeEditEmployeeForm({ commit }) {
  commit('setShowEditEmployeeForm', false)
 },

  async addEmployee({ commit }, employee: Employee) {
    commit('addEmployee', employee)
  },

  async editEmployee({ commit }, employee: Employee) {
    commit('editEmployee', employee)
  },

findEmployee({ state }, id: number) {
  const item = state.employees.find(employee => employee.id === id);
  return item; 
},

 async fetchEmployees({ commt }) {
  //const employees = await db.employees.toArray(); 
  //commit('setEmployees', employees);
 },

 async deleteSelectedEmployees({ commit }, ids: number[]) {
  commit('deleteEmployees', ids)
 },
 
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
};
