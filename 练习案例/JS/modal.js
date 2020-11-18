var Modal = (function () {
    var setting={
        header:'登录',
        height:400,
        width:600
    }
    function extend(target,obj){
        for(var p in obj){
            if(typeof obj[p]=='object'){
                extend(target[p]=(obj[p].constructor=='Array'?[]:{}),obj[p]);
            }else{
                target[p]=obj[p];
            }
        }
        return target;
    }
    /*定义一个弹层组件类（构造函数）*/ 
    function Modal(option) {
        var that=this;
        setting= extend(setting,option);
        this.oModalBox = document.getElementById(setting.el);
        this.oModalBox.style.display = 'block';
         var ModalHeader = this.oModalBox.getElementsByClassName('modal-header')[0];
         var oDialog=util.first(this.oModalBox);
        ModalHeader.innerHTML = option.header;
        oDialog.style.width=setting.width+'px';
        oDialog.style.height=setting.height+'px';

        /*防止事件冒泡*/
        oDialog.onclick = function(e){
            e.stopPropagation();
          };
        this.oModalBox.onclick=function(){
            that.close();
        }

        var oModalx=document.getElementById('modalx');
        oModalx.onclick=function(){
            that.close()
        }

        var oSubmit=this.oModalBox.getElementsByClassName('submit-btn')[0];
        oSubmit.onclick=function () {
            setting.onOk();
        }

        var oCancel=this.oModalBox.getElementsByClassName('cancel-btn')[0];
        oCancel.onclick=function() {
            that.close();
        }
    }
    Modal.prototype.close = function(){
        this.oModalBox.style.display='none';
      };
    return Modal;
})()