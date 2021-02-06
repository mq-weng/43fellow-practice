export default {
    data() {
        return {
            message: "",
        }
    },
    methods: {
        //检查input里是否为空
        checkUsername() {
            // console.log("blur执行了");
            let username = document.getElementById("username");
            if (this.username.length == 0) {
                username.style.display = "block";
                this.message = "用户名不能为空";
            }
        },
        clear() {
            // console.log("focus执行了");
            let username = document.getElementById("username");
            username.style.display = "none";
        },
    },
}