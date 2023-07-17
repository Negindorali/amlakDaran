<template>
    <div class="mx-auto md:p-10" style="background-color: #e4ecf9!important;">
        <form class="w-full mx-auto" @submit.stop>
            <div class="text-start flex   mt-10">
                <p class="text-start ms-2 text-[18px]" style="font-weight: 700">مشخصات شما</p>
            </div>

            <div class="mx-auto  px-10 pt-0 mt-0 text-start gap-6 mb-3 " style="border-right: 3px solid #BACAE4">
                <div class="grid grid-cols-2">
                    <div v-for="item in fields.filter(field=>field.render)" :key="item.name"
                         class="mt-10 mx-5 md:col-span-1 col-span-2">
                        <label class="block text-[15px] uppercase fw-bold before:inline-block before:w-4 before:h-4 before:ml-2 before:bg-red before:rounded-full after:ml-0.5 after:text-red tracking-wide text-gray-700 text-xs font-bold mb-3 mr-1"
                               :for="item.name">
                            {{ item.title }}
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span style="font-family: rYekan;direction: ltr"
                                      v-if="item.name==='mobile' "
                                      class="inline-flex position-absolute items-center px-3">+98</span>
                            </div>
                            <input
                                    :name="item.name"
                                    oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    :maxlength="item.maxlength"
                                    @input="getValues($event,item.name)"
                                    :minlength="item.minlength"
                                    v-model="data[item.name]"
                                    :pattern="item.type==='number' ? '\d{10}' : '' "
                                    :required="item.required"
                                    :dir="item.name==='mobile' ? 'ltr' :'rtl' "
                                    :style="item.type==='number' || item.type==='date' ? 'font-family: rYekan' : '' "
                                    class="peer pl-[3.2rem] inputStyle focus:invalid:border-red focus:invalid:border-[2.3px] appearance-none block w-full editInputs text-gray-700 mt-5 rounded py-4 px-3 mb-3 leading-tight focus:outline-none focus:bg-light-grey"
                                    :id="item.name" :type="item.type">
                        </div>
                        <p v-if="item.errorMessage !== null "
                           class="peer-invalid:visible text-red font-light text-[12px]">
                            {{ item.errorMessage }}
                        </p>
                    </div>
                </div>
            </div>

        </form>
    </div>
</template>

<script>

export default {
    name: "fieldsGenerator",
    data() {
        return {
            data: {
                firstName: '',
                lastName: '',
                mobile: '',
                email: '',
                bankAccountNumber: '',
                dateOfBirth: ''
            },
            fields: [
                {
                    name: 'firstName',
                    title: 'نام',
                    required: true,
                    type: 'text',
                    maxlength: '50',
                    minlength: '3',
                    errorMessage: '',
                    render: true
                },
                {
                    name: 'lastName',
                    title: 'نام خانوادگی',
                    required: true,
                    type: 'text',
                    maxlength: '50',
                    minlength: '3',
                    errorMessage: null,
                    render: true
                },
                {
                    name: 'dateOfBirth',
                    title: 'تاریخ تولد',
                    required: true,
                    type: 'date',
                    maxlength: '50',
                    minlength: '3',
                    errorMessage: null,
                    render: true
                },
                {
                    name: 'mobile',
                    title: 'شماره تماس',
                    required: true,
                    type: 'number',
                    maxlength: '10',
                    minlength: '10',
                    errorMessage: null,
                    render: true
                },
                {
                    name: 'bankAccountNumber',
                    title: 'شماره حساب بانکی',
                    required: true,
                    type: 'number',
                    maxlength: '18',
                    minlength: '18',
                    errorMessage: null,
                    render: true
                },
                {
                    name: 'email',
                    title: 'ایمیل',
                    required: true,
                    type: 'email',
                    maxlength: '50',
                    minlength: '7',
                    errorMessage: null,
                    render: true
                },
            ],
            errors: [],
        }
    },
    methods: {
        getValues(value, name) {
            this.data[name] = value.target.value
        },
    },
    watch: {
        'data.mobile': {
            handler(val) {
                let message = null;
                if (!/^(09|9)\d{9}$/im.test(val))
                    message = 'فیلد تلفن همراه را صحیح وارد نمایید!';

                this.fields[3].errorMessage = message;
            }

        },
        'data.bankAccountNumber': {
            handler(val) {
                let message = null;
                if (val.length < 18)
                    message = 'شماره حساب بانکی نباید از ۱۸ رقم کمتر باشد.';

                this.fields[4].errorMessage = message;
            }

        },
        data: {
            handler() {
                this.$emit('input', this.data)
            },
            deep: true
        },
        'data.email': {
            handler(val) {
                var mailFormat = /\S+@\S+\.\S+/;
                if (val.match(mailFormat)) {
                    this.fields[5].errorMessage = null
                    return true;
                } else {
                    this.fields[5].errorMessage = 'ایمیل وارد شده نادرست است.'
                    return false;
                }
            }
        }
    },
    mounted() {
        if (Object.keys(this.$route.params).length > 0) {
            this.data = this.$route.params.data;
        }
    }

}
</script>

<style scoped>
#country_selector {
    left: 0;
    right: 0;
    position: absolute;
    top: 2.9rem;
    background: #ffffff;
    border-radius: 7px;
    overflow: auto;
}

#dropdown {
    float: left;
}

#dropdown-button {
    border-right: 1px solid #9B9B9B;
}

#dropdown {
    width: 4.3rem;
}

</style>