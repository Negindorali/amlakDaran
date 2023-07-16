import Vue from "vue";

export default {
    methods: {
        allowOnlyNumbers: function (value) {
            let allowedKeys = [8, 46, 38, 40, 37, 39];
            const keypressed = value.which || value.keyCode;
            if (/[^0-9\s]+/.test(value.key)) {
                if (allowedKeys.every(e => e !== keypressed)) {
                    value.preventDefault();
                }
            } else return true
        },
        validatePhone(input) {
            let message = '';

            if (!/^[+]?[(]?[0][-\s.]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/im.test(input.phone)) {
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

        Vue.filter('englishNumber', function (input) {
                if (input === undefined || input == null) return "";

                let str1 = input.toString().trim();

            if (str1 === '') return '';

            str1 = str1.replaceAll('۰', '0');
            str1 = str1.replaceAll('۱', '1');
            str1 = str1.replaceAll('۲', '2');
            str1 = str1.replaceAll('۳', '3');
            str1 = str1.replaceAll('۴', '4');
            str1 = str1.replaceAll('۵', '5');
            str1 = str1.replaceAll('۶', '6');
            str1 = str1.replaceAll('۷', '7');
            str1 = str1.replaceAll('۸', '8');
            str1 = str1.replaceAll('۹', '9');

            return str1;
        });

        Vue.filter('numericPersianNumber', value => {
            if (value < 1_000_000)
                return value / 1_000 + " هزار"
            return value / 1_000_000 + " میلیون"
        });

        Vue.filter('numericPersianNumber', value => {
            if (value < 1_000_000)
                return value / 1_000 + " هزار تومان"

            else if (value === 1_000_000)
                return value / 1_000_000 + " میلیون تومان"
            else return value / 1_000_000_000 + " میلیارد تومان"
        });

    },
}



