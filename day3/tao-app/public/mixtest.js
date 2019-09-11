let obj = {
    data: {
        address: '深圳 西部硅谷'
    },
    mounted() {
        console.log('我被挂载了, 来自于 obj of mixtest.js')
    },
    computed: {
        test() {
            return this.address + '!!!!'
        },
        testName() {
            return this.name + '!!!!'
        }
    }
};

let obj2 = {
    mounted() {
        console.log('我被挂载了, 来自于 obj2 of mixtest.js')
    },
    data: {
        hobbies: ['nodejs', 'js']
    },
    methods: {
        addHobby() {
            this.hobbies.push('html')
        }
    }
};
