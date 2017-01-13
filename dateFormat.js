    /**
     * 获取制定时间的格式化时间，缺省时间为当前时间
     * @param1 时间
     * @param2 format格式 格式同java中SimpleDateFormat
     */
    function getFormatDate(date, fmt) {
        if(date == null || date == undefined || date == ""){
            date = new Date();
        }
        if(date.constructor!=Date){
            date = new Date();
        }
        var year = date.getFullYear()+"";
        var month = date.getMonth()+1+"";
        var day = date.getDate()+"";
        var hour = date.getHours()+"";
        var minute = date.getMinutes()+"";
        var second = date.getSeconds()+"";
        var yearReg = /(y{1,4})([^y]|$)/;
        if(yearReg.test(fmt)){
            fmt=fmt.replace(RegExp.$1,RegExp.$1.length>=4?year:year.substring(2,4));
        }
        var monthReg=/(M{1,2})([^M]|$)/;
        if(monthReg.test(fmt)){
            fmt=fmt.replace(RegExp.$1,month.length>=2?month:("0"+month));
        }
        var dayReg=/(d{1,2})([^d]|$)/;
        if(dayReg.test(fmt)){
            fmt=fmt.replace(RegExp.$1,day.length>=2?day:("0"+day));
        }
        var hourReg=/(H{1,2})([^H]|$)/;
        if(hourReg.test(fmt)){
            fmt=fmt.replace(RegExp.$1,hour.length>=2?hour:("0"+hour));
        }
        var minuteReg=/(m{1,2})([^m]|$)/;
        if(minuteReg.test(fmt)){
            fmt=fmt.replace(RegExp.$1,minute.length>=2?minute:("0"+minute));
        }
        var secondReg=/(s{1,2})([^s]|$)/;
      console.debug(fmt);
        if(secondReg.test(fmt)){
            fmt=fmt.replace(RegExp.$1,second.length>=2?second:("0"+second));
        }
        return fmt;
    }