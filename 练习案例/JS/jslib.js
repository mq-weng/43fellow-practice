var util = (function () {

    return {
        getByClassName: function(tagName, className, context) {
        var elements = [];
        context = context || document; //不传context默认document
         // 先检测一下当前浏览器是否支持getElementsByClassName，如果支持直接调用，否则调用后面自己的方法
        if (context.getElementsByClassName) {
            elements=context.getElementsByClassName(className);
        } else {
            var aLi = context.getElementsByTagName(tagName)[0];
            for (var i = 0; i < aLi.length; i++) {
                if (aLi[i].className.indexOf(className) != -1) {    //多类

                    //此处需要正则来处理（如果字符串包含了classname，indexOf不好使）

                    elements.push(aLi[i]);
                }
            }
        }

        return elements;
    },
        next:function (elem) {
                do {
                    elem = elem.nextSibling;
                } while (elem && elem.nodeType != 1);
                return elem;
        },
        first: function (elem) {
            elem = elem.firstChild;
            return elem && elem.nodeType != 1 ? this.next(elem) : elem;//在‘孩子’的兄弟里找
        }
    }
})()