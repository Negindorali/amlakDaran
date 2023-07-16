import Vue from "vue";

export default {
    methods: {
        validatePhone(input) {
            let message = '';

            if (!/^[+]?[(]?[۰][-\s.]?[۰-۹]{3}[)]?[-\s.]?[۰-۹]{3}[-\s.]?[۰-۹]{4}$/im.test(input)) {
                // eslint-disable-next-line no-unused-vars
                message = 'فیلد تلفن همراه را صحیح وارد نمایید!';
            } else {
                return true;
            }

            return false;
        },
    },
    mounted() {
        Vue.filter("currency", (x) => {
            return x ? new Intl.NumberFormat('en-US', {style: 'decimal'}).format(x) : ''
        });
        Vue.filter('persianNum', function (input) {
                if (input === undefined || input == null) return "";
                let str1 = input.toString().trim();
                if (str1 === '') return '';
                str1 = str1.replaceAll('0', '۰');
                str1 = str1.replaceAll('1', '۱');
                str1 = str1.replaceAll('2', '۲');
                str1 = str1.replaceAll('3', '۳');
                str1 = str1.replaceAll('4', '۴');
                str1 = str1.replaceAll('5', '۵');
                str1 = str1.replaceAll('6', '۶');
                str1 = str1.replaceAll('7', '۷');
                str1 = str1.replaceAll('8', '۸');
                str1 = str1.replaceAll('9', '۹');
                return str1;
        });
    },
}



