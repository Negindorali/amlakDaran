<template>
    <div class="px-10 mt-10">
        <div class="p-5 w-full mx-auto">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input v-model="searchedText" type="search" id="default-search"
                       class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="جستجو کنید .." required>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                            <thead
                                    class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                            <tr>
                                <th scope="col" class="px-6 py-4">#</th>
                                <th scope="col" class="px-6 py-4">نام</th>
                                <th scope="col" class="px-6 py-4">نام خانوادگی</th>
                                <th scope="col" class="px-6 py-4">شماره حساب بانکی</th>
                                <th scope="col" class="px-6 py-4">شماره موبایل</th>
                                <th scope="col" class="px-6 py-4">تاریخ تولد</th>
                                <th scope="col" class="px-6 py-4">عملیات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,index) in usersList"
                                class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                                :key="index">
                                <td class="whitespace-nowrap px-6 py-4">{{ index + 1 }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.firstName }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.lastName }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.bankAccountNumber }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.mobile }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.dateOfBirth }}</td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <div class="col">
                                        <button @click="getUserData(item,index)" class="text-blue mb-5">ویرایش</button>
                                        <br/>
                                        <button @click="deleteUser(index)" class="text-red">حذف</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "userList",
    data() {
        return {
            userList: [],
            searchedText: ''
        }
    },
    methods: {
        deleteUser(id) {
            this.userList.splice(id, 1);
            this.$toast.success('اطلاعات موردنظرشما با موفقیت حذف شد.');
            localStorage.setItem('usersList', JSON.stringify(this.userList));
        },
        getUserData(data, index) {
            this.$router.replace({name: 'register.form', params: {data, index}})
        }
    },
    computed: {
        usersList() {
            if (this.searchedText)
                return this.userList.filter((item) => {
                    return item.firstName.includes(this.searchedText) ||
                        item.lastName.includes(this.searchedText) ||
                        item.bankAccountNumber.includes(this.searchedText) ||
                        item.mobile.includes(this.searchedText) ||
                        item.dateOfBirth.includes(this.searchedText)
                });
            else return this.userList;
        }
    },
    mounted() {
        this.userList = JSON.parse(localStorage.getItem('usersList'));
    }
}
</script>

<style scoped>

</style>