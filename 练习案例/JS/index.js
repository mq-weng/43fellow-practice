(function () {
    var oNavRegister = document.getElementById('navRegister')
    var oNavLogin=document.getElementById('navLogin');
    var myModal;
    oNavLogin.onclick = function () {
        myModal = new Modal({ /*传一个对象*/
            el: 'modalBox',
            header: '登录',
            onOk: function () {
                var oUsername = document.getElementById('username');
                var oKeyword = document.getElementById('keyword');
                console.log(oUsername.value);
            }

        });
        return false;
    }

    oNavRegister.onclick = function () {
        myModal = new Modal({ /*传一个对象*/
            el: 'modalBox',
            header: '注册',
            onOk: function () {
                var oUsername = document.getElementById('username');
                var oKeyword = document.getElementById('keyword');
                console.log(oUsername.value);
            }

        });
        return false;
    }
/*body上的关闭*/ 
// var Oclose=document.getElementById('body-close');
// Oclose.onclick=function () {
//     myModal.close();
// }


})();