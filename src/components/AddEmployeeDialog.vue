<template>
    <div>
        <q-dialog v-model="openDialog" transition-show="rotate" transition-hide="rotate">
            <q-card class="dialog-wrapper">
                <q-card-section>
                    <div class="text-h6">Add Employee</div>
                </q-card-section>
                <q-separator />
                <q-card-section style="max-height: 50vh" class="scroll">
                    <q-form @submit.prevent="onSubmit">
                        <div class="row q-gutter-sm">
                            <div class="col q-gutter-sm">
                                <q-input v-model="name" filled label="Name" />
                            </div>
                            <div class="col q-gutter-sm">
                                <q-input v-model="age" filled label="Age" />
                            </div>
                        </div>
                        <div class="row q-gutter-sm">
                            <div class="col q-gutter-sm">
                                <q-input v-model="department" filled label="Department" />
                            </div>
                            <div class="col q-gutter-sm">
                                <q-input v-model="salary" filled label="Salary" />
                            </div>
                        </div>
                        <div class="row q-gutter-sm">
                            <div class="col q-gutter-sm">
                                <q-select v-model="gender" filled label="Gender" :options="genderOptions" />
                            </div>
                            <div class="col q-gutter-sm">
                                <q-input v-model="location" filled label="Location" />
                            </div>
                        </div>
                    </q-form>
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="negative" @click="closeAddEmployeeForm" />
                    <q-btn @click="onSubmit" label="Submit" color="primary" :loading="isSubmitting" :disable="isSubmitting"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>
<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { Employee, Gender } from '../interfaces';


const genderOptions = [
    Gender.Male,
    Gender.Female
]


const store = useStore();
const isSubmitting = ref(false);
const openDialog = computed(() => store.state.showAddEmployeeForm)
const closeAddEmployeeForm = () => {
    isSubmitting.value = false
    store.dispatch('closeAddEmployeeForm')
}

const name = ref('');
const department = ref('');
const age = ref(0);
const salary = ref(0);
const gender = ref(genderOptions[0]);
const location = ref('');


const onSubmit = async () => {
    isSubmitting.value = true
    const emp: Employee = {
        name: name.value,
        department: department.value,
        age: age.value,
        salary: salary.value,
        gender: gender.value,
        location: location.value
    }

    await store.dispatch('addEmployee', emp)
    isSubmitting.value = false
    name.value = ""
    department.value = ""
    age.value = 0
    salary.value = 0 
    gender.value = Gender.Male 
    location.value = ""
    closeAddEmployeeForm()
}
</script>
<style>
.dialog-wrapper {
    width: 100%;
}

@media (min-width: 600px) {
  .dialog-wrapper {
    width: 50%;
  }
}
</style>