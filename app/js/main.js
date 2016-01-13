$(document).ready(function(){
    function get_timer(){
        var date_now = new Date(),
            date_to_text = 'December 22,2015 18:50',
            date_to = new Date(date_to_text),
            timer = '', //Количество оставшихся миллисекунд
            day_last = '', //Количество оставшихся дней
            hour_last ='', //Количество оставшихся дней
            min_last = '',
            sec_last = '';

        timer = date_to - date_now;
        day_last = parseInt(timer/(24*60*60*1000));//Получаем количество дней
        hour_last = parseInt(timer/(60*60*1000))%24; //Делим на 24 и оставляем остаток - т.е. остаются часы
        min_last = parseInt(timer/(60*1000))%60; //Делим на 60 и оставляем остаток - т.е. остаются минуты
        sec_last = parseInt(timer/(1000))%60; //Делим на 60 и оставляем остсток от деления - т.е.е остаются секунды

        if(date_to>date_now){
            if(day_last < 10) {
                day_last = '0' + day_last;
            }
            if(hour_last < 10){
                hour_last = '0' + hour_last;
            }
            if(min_last < 10){
                min_last = '0' + min_last;
            }
            if(sec_last < 10){
                sec_last = '0' + sec_last;
            }
            day_last = day_last.toString();
            hour_last = hour_last.toString();
            min_last = min_last.toString();
            sec_last = sec_last.toString();

            //Дни
            if(day_last[1] == 9 && hour_last[0] ==2 && hour_last[1] == 3 && min_last[0] ==5 && min_last[1] == 9 && sec_last[0] == 5 && sec_last[1] == 9){
                animation($("#day0"),day_last[0]);
            }else{
                $("#day0").html(day_last[0]);
            }

            if(hour_last[0] == 2 && hour_last[1] == 3 && min_last[0] == 5 && min_last[1] == 9 && sec_last[0] == 5 && sec_last[1] == 9){
                animation($("#day1"),day_last[1]);
            }else{
                $("#day1").html(day_last[1]);
            }

            //Часы
            if(hour_last[1] == 3 && min_last[0] == 5 && min_last[1] == 9 && sec_last[0] == 5 && sec_last[1] == 9){
                animation($("#hour0"),hour_last[0]);
            }else{
                $("#hour0").html(hour_last[0]);
            }

            if(min_last[0]==5 && min_last[1] == 9 && sec_last[0] == 5 && sec_last[1] == 9){
                animation($("#hour1"),hour_last[1]);
            }else{
                $("#hour1").html(hour_last[1]);
            }

            //Минуты
            if(min_last[1] == 9 && sec_last[0] ==5 && sec_last[1] == 9){
                animation($("#min0"),min_last[0]);
            }else{
                $("#min0").html(min_last[0]);
            }
            if(sec_last[0] == 5 && sec_last[1] == 9){
                animation($("#min1"),min_last[1])
            }else{
                $("#min1").html(min_last[1]);
            }

            //Секунды
           animation($("#sec1"),sec_last[1]);
            if(sec_last[1] == 9){
                animation($("#sec0"),sec_last[0]);
            }else{
                $("#sec0").html(sec_last[0]);
            }


            setTimeout(get_timer,1000);
        }
        else{
            $("#clock").html("<span class = 'stop_timer'>Отсчет закончен</span>");
        }

    }

    function animation(index,param){
        index
            .html(param)
            .css({'marginTop':'-20px','opacity':'0'})
            .animate({'marginTop':'0px','opacity':'1'});
    }
    get_timer();
});