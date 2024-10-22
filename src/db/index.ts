import Dexie from 'dexie';
import { Employee } from '../interfaces'; 

class EmployeesDatabase extends Dexie {
  employees: Dexie.Table<Employee, number>;

  constructor() {
    super('employees');

    // Define the schema
    this.version(1).stores({
      employees: '++id, name, age',
    });

    this.employees = this.table('employees');
  }
}

const db = new EmployeesDatabase();
export default db;
