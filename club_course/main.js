$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    // 字串陣列拿到數量
// 資料型態的重要性
// 1.typeof(7*1)為number數字
// 2.typeof(startDate)為object物件
// 3.typeof(startDate+7*1)為string字串

    let millisecePerDay = 24*60*60*1000;
// 1 sec = 1000 ms
// 計算一天的秒數量
// 24小時 * 60分鐘 *60秒 *1000毫秒

// new Date 是某一天的日期
// 用getTime() 從1911年時間開始算起
    for (var x=0;x<topicCount;x++){
        $("#courseTable").append(
      `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecePerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td></tr>`      
        );
    };

});
