function checkData(objArray) {
    var textnow;
    var rst = "true";
    for (i = 0; i < objArray.length; i++) {
        textnow = eval(objArray[i]);
        if (textnow.value == "") {
            rst = "false";
            $('.model').fadeIn();
            $('.model .text_notice').text('请输入完整');
            modelYn();
            textnow.focus();
            textnow.select();
            break
        }
    }
    return rst
}
function isInteger(objArray) {
    var textnow;
    var rst = "true";
    for (i = 0; i < objArray.length; i++) {
        textnow = eval(objArray[i]);
        if (isNaN(textnow.value)) {
            rst = "false";
            $('.model').fadeIn();
            $('.model .text_notice').text('请输入数字');
            modelYn();
            textnow.focus();
            textnow.select();
            break
        }
    }
    return rst
}
function isTrueYear(objYear) {
    var textnow = eval(objYear);
    var rst = "true";
    var nowDate = new Date();
    var nowYear = nowDate.getYear();
    if (textnow.value < 1900) {
        rst = "false";
        alert("请输入正确年份！");
        textnow.focus();
        textnow.select()
    }
    return rst
}
function isTrueMonth(objMonth) {
    var textnow = eval(objMonth);
    var rst = "true";
    if (textnow.value > 12 || textnow.value < 1) {
        rst = "false";
        alert("请输入正确月份！");
        textnow.focus();
        textnow.select()
    }
    return rst
}
function isTrueDate(objDate) {
    var textnow = eval(objDate);
    var rst = "true";
    if (textnow.value > 31) {
        rst = "false";
        alert("请输入正确日期！");
        textnow.focus();
        textnow.select()
    }
    return rst
}
function getMonths(yearBegin, monthBegin, dayBegin) {
    var timeBegin = parseInt(yearBegin * 12) + parseInt(monthBegin) + parseFloat(dayBegin / 30);
    var dateNow = new Date();
    var timeNow = parseInt(dateNow.getYear() * 12) + parseInt(dateNow.getMonth() + 1) + parseFloat(dateNow.getDate() / 30);
    var timeSpan = timeNow - timeBegin;
    return timeSpan
};