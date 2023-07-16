<template>
    <div>
        <fields-generator v-model="userData"/>
        <div class="col-md-12">
            <button v-if="Object.keys(this.$route.params).length > 0" @click="updateForm"
                    class="btnNext mr-auto px-5 py-2">به روزرسانی اطلاعات
            </button>
            <button v-else @click="submitForm" class="btnNext mr-auto px-5 py-2">ثبت نام</button>
        </div>
    </div>
</template>

<script>
import FieldsGenerator from "@/views/components/fieldGenerator";

export default {
    name: "registerForm",
    components: {FieldsGenerator},
    data() {
        return {
            userData: {},
            userList: []
        }
    },
    methods: {
        submitForm() {
            if (Object.keys(this.userData).length <= 0) {
                this.$toast.error('تمامی فیلدهای درخواستی اجباری می باشند.');
            } else {
                if (Object.values(this.userData).indexOf('') > -1) {
                    this.$toast.error('تمامی فیلدهای درخواستی اجباری می باشند.');
                    return;
                }

                if (!this.isUnique()) {
                    this.$toast.error('کاربر موردنظر از قبل ثبت نام شده است.');
                    return;
                }
                this.userList = JSON.parse(localStorage.getItem('usersList')) || [];
                this.userList.push(this.userData);
                localStorage.setItem('usersList', JSON.stringify(this.userList));
                this.$router.replace({name: 'user.list'})
            }
        },
        isUnique() {
            let database = localStorage.getItem('usersList');

            if (!database)
                return true;

            database = JSON.parse(database);

            return !database.find(data => {
                return data.dateOfBirth === this.userData.dateOfBirth &&
                    data.email === this.userData.email &&
                    data.firstName === this.userData.firstName &&
                    data.lastName === this.userData.lastName;
            });
        },
        updateForm() {
            const list = JSON.parse(localStorage.getItem('usersList'));
            list[this.$route.params.index] = this.userData;
            localStorage.setItem('usersList',JSON.stringify(list));
        }
    },

}
</script>

<style scoped>

</style>