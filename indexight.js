function check() {
    let can_nang = document.getElementById('can_nang').value;
    let chieu_cao= document.getElementById('chieu_cao').value;
    let mbi = can_nang / (Math.pow(chieu_cao,2));
    let result = '';
    if (mbi < 16) {
        result = 'gầy độ 3';
    }else if (mbi < 17 ) {
        result = 'gầy độ 2';
    }else if(mbi <18 ) {
        result = 'gầy độ 1';
    }else if (mbi < 25) {
        result = ' bình thương';
    }else if(mbi < 35) {
        result = ' béo phì độ 1';
    }else if(mbi < 40) {
        result = ' béo phì độ 2';
    }else {
        result = 'béo phì độ 3' 
        document.getElementById('result').innerHTML = " chỉ số là : " + mbi + 'cho thấy bạn :' + result;
    }

}