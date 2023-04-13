function check(){
    let kwh = document.getElementById("kwh").value;
    let price ;
    let a = "Bậc thang 1"
    let b = "Bậc thang 2"
    let c = "Bậc thang 3"
    let d = "Bậc thang 4"
    let e = "Bậc thang 5"
    let f = "Bậc thang 6"

    if(kwh >= 0 && kwh <= 50 ){
        document.getElementById("bac").innerHTML= a;
        price = kwh * 1678;
        document.getElementById("sotien").innerHTML=price;
    }else if (kwh >= 51 && kwh <= 100){
        document.getElementById("bac").innerHTML= b;
        price = ((50*1678)+(kwh-50)*1734);
        document.getElementById("sotien").innerHTML=price
    } else if(kwh >= 101 && kwh <= 200){
        document.getElementById("bac").innerHTML= c;
        price = ((50*1678)+(50*1734)+(kwh-100)*2014 ) ;
        document.getElementById("sotien").innerHTML=price
    } else if(kwh >= 201 && kwh <= 300){
        document.getElementById("bac").innerHTML= d;
        price = ((50*1678)+(50*1734)+(100*2014)+(kwh-200)*2536 ) ;
        document.getElementById("sotien").innerHTML=price
    } else if (kwh >= 301 && kwh <= 400){
        document.getElementById("bac").innerHTML= e;
        price = ((50*1678)+(50*1734)+(100*2014)+(100*2536)+(kwh-300)*2834) ;
        document.getElementById("sotien").innerHTML=price
    } else if (kwh >400){
        document.getElementById("bac").innerHTML= f;
        price = ((50*1678)+(50*1734)+(100*2014)+(100*2536)+(100*2834)+(kwh-400)*2927)  ;
        document.getElementById("sotien").innerHTML=price
    }

    }



