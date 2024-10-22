<template>
    <div>
        <AddEmployeeDialog />
        <EditEmployeeDialog :id="editEmployeeID" />
        <PageTitle title="Employees" />
        <q-btn 
            color="primary" 
            class="btn-item"
            text-color="white" 
            label="Add Employee" 
            icon="add" 
            @click="showAddEmployeeForm"
        />
        <q-btn 
            color="negative" 
            class="btn-item"
            text-color="white" 
            label="Delete Selected" 
            icon="delete" 
            :disable="selected.length < 1"
            @click="deleteSelected"
        />
        <q-input 
            style="margin-top: 10px"
            filled
            v-model="filter" 
            placeholder="Filter by name, age, salary, location, department, or gender..." 
        />
        
        <div class="table-wrapper" style="margin-top: 10px">
            <q-table 
                flat bordered
                title="Employees"
                :columns="columns"
                :rows="filteredRows"
                selection="multiple"
                row-key="name"
                v-model:selected="selected"
                :loading="isFetchingEmployees"
                >
                <template v-slot:body-cell-edit="props">
                    <q-td :props="props">
                        <q-btn
                            icon="edit"
                            @click="editRow(props.row)"
                            color="primary"
                            flat
                            round
                            aria-label="Edit"
                        />
                    </q-td>
                </template>
            </q-table>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

import PageTitle from '../components/PageTitle.vue';
import AddEmployeeDialog from '../components/AddEmployeeDialog.vue';
import EditEmployeeDialog from '../components/EditEmployeeDialog.vue';
import { Employee } from '../interfaces';

const em: Employee[] = []

const store = useStore()
const isFetchingEmployees = ref(true);
const selected = ref(em);
const filter = ref('');
const editEmployeeID = ref(0)
const showAddEmployeeForm = () => {
    store.dispatch('showAddEmployeeForm')
}

const deleteSelected = () => {
    const i = selected.value 
    const ids = i.map(i => i.id);
    store.dispatch('deleteSelectedEmployees', ids)
}

const columns = [
    {
        name: 'id',
        //align: 'center',
        required: true,
        label: 'ID',
        field: 'id',
        width: "20",
        //format: val => `${val}`,
        sortable: true
    },
    { name: 'name', label: 'Name', field: 'name', sortable: true },
    { name: 'gender', label: 'Gender', field: 'gender', sortable: true },
    { name: 'department', label: 'Department', field: 'department', sortable: true },
    { name: 'location', label: 'location', field: 'location', sortable: true},
    { name: 'age', label: 'Age', field: 'age' },
    { name: 'salary', label: 'Salary', field: 'salary' },
    { name: 'edit', label: 'Action',field: 'edit' }
]

const rows = computed(() => store.state.employees)


const filteredRows = computed(() => {
  if (!filter.value) return rows.value;

  const lowerCaseFilter = filter.value.toLowerCase();
  
  return rows.value.filter(row => 
    row.name.toLowerCase().includes(lowerCaseFilter) ||
    String(row.age).includes(lowerCaseFilter) ||
    String(row.salary).includes(lowerCaseFilter) ||
    row.location.toLowerCase().includes(lowerCaseFilter) ||
    row.department.toLowerCase().includes(lowerCaseFilter) ||
    row.gender.toLowerCase().includes(lowerCaseFilter)
  );
});

//const rows = computed(() => store.state.employees)
const fetchEmployees = async () => {
    isFetchingEmployees.value = true 
    try {
        await store.dispatch('fetchEmployees')
    } catch (error) {
        alert(error)
    } finally {
        isFetchingEmployees.value = false
    }
}
fetchEmployees()

const editRow = (row: Employee) => {
    editEmployeeID.value = row.id as number
    store.dispatch('showEditEmployeeForm')
}

</script>
<style scoped>
.btn-item {
  margin-bottom: 16px; 
}

@media (min-width: 600px) {
  .btn-item {
    margin-bottom: 0;
  }
}
</style>