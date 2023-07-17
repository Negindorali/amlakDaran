<template>
    <div class="px-10 mt-10">
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
                            <tr v-for="(item,index) in userList"
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
            userList: []
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
    mounted() {
        this.userList = JSON.parse(localStorage.getItem('usersList'));
    }
}
</script>

<style scoped>

</style>