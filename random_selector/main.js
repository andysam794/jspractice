//  winodows.onload = $(function())
$(function(){
    $("input").on("click",function(){
            // alert("Yo");
            // 設定會跳出什麼視窗
        // $("h1").text($("li:first").text());
        // 設定標題會變成什麼
        // $("h1").text($("li").eq(1).text());
        // eq()為取第幾個元素 由0開始
        // $("h1").text($("li").eq(Math.floor(Math.random()*($("li").length))).text());
        //採用Math套件 0~1 成三倍 變成 0~3 
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        // 使用Jquery 簡短寫法!!
    });
});

