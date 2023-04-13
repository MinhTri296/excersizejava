function thue() {
    let tien = document.getElementById("thunhap").value;
    let thuesuat;
    if (tien <= 5000000) {
        document.getElementById("rsthue").innerText = "5%";
        document.getElementById("rsbac").innerText = "Bậc 1";
        thuesuat = tien * 0.05;
        document.getElementById("tiennop").innerText = thuesuat;
    } else if (tien >= 5000000 && tien <= 10000000) {
        document.getElementById("rsthue").innerText = "10%";
        document.getElementById("rsbac").innerText = "Bậc 2";
        thuesuat = (250000 + (tien - 5000000) * 0.1);
        document.getElementById("tiennop").innerText = thuesuat;
    } else if (tien >= 10000000 && tien <= 18000000) {
        document.getElementById("rsthue").innerText = "15%";
        document.getElementById("rsbac").innerText = "Bậc 3";
        thuesuat = (750000 + (tien - 10000000) * 0.15);
        document.getElementById("tiennop").innerText = thuesuat;
    } else if (tien >= 18000000 && tien <= 32000000) {
        document.getElementById("rsthue").innerText = "20%";
        document.getElementById("rsbac").innerText = "Bậc 4";
        thuesuat = (1950000 + (tien - 18000000) * 0.2);
        document.getElementById("tiennop").innerText = thuesuat;
    } else if (tien >= 32000000 && tien <= 52000000) {
        document.getElementById("rsthue").innerText = "25%";
        document.getElementById("rsbac").innerText = "Bậc 5";
        thuesuat = (4950000 + (tien - 32000000) * 0.25);
        document.getElementById("tiennop").innerText = thuesuat;
    } else if (tien >= 52000000 && tien <= 80000000) {
        document.getElementById("rsthue").innerText = "30%";
        document.getElementById("rsbac").innerText = "Bậc 6";
        thuesuat = (9750000 + (tien - 52000000) * 0.3);
        document.getElementById("tiennop").innerText = thuesuat;
    }else{
        document.getElementById("rsthue").innerText = "35%";
        document.getElementById("rsbac").innerText = "Bậc 7";
        thuesuat = (18150000 + (tien - 80000000) * 0.35);
        document.getElementById("tiennop").innerText = thuesuat;
    }       
}