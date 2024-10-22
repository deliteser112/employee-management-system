export interface Department {
    name: string
}

export enum Gender {
    Male = 'Male',
    Female = 'Female'
}

export interface Employee {
    id?: number 
    name: string
    department: string
    age: number 
    salary: number 
    location: string
    gender: Gender
}