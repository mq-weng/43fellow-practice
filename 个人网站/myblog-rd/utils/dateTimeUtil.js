
module.exports ={
    formatTime(timestamp, fmt) {
        timestamp = new Date(timestamp);
        let ret;
        let opt = {
            "Y+": timestamp.getFullYear().toString(),        // 年
            "m+": (timestamp.getMonth() + 1).toString(),     // 月
            "d+": timestamp.getDate().toString(),            // 日
            "H+": timestamp.getHours().toString(),           // 时
            "M+": timestamp.getMinutes().toString(),         // 分
            "S+": timestamp.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    
    },

} 



