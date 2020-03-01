var {add} = import('./model01.js');
var Vue = import('./vue.min.js');

var VM = new Vue({
    el: "#app",
    data: {
        name: "code00000001",
        num1: 0,
        num2: 0,
        result: 0,
        url:"http://www.baidu.com"
    },
    methods: {
        change: function () {
            // this.result = Number.parseInt(this.num1) + Number.parseInt(this.num2);
            // alert("计算结果为：" + this.result)
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2))
        }
    }
})