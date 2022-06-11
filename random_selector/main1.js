let foodImages = [
    "https://live.staticflickr.com/8088/8520676724_bbd73c6896_b.jpg",
    "https://www.photolibrary.jp/mhd5/img213/450-2011071010101532842.jpg",
    "http://s2.lookerideas.com/imgs/201805/18/5/15266361563926.jpg"
];
$(function () {
    $("input").on("click", function () {

        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",foodImages[randomChildNumber])
    });
});


//  步驟1 先找三個網址 變成一個array
//  拉麵: 
//  滷肉飯:
//  水餃:
//  步驟2 使用attr這個套件