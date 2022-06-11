// Youtube Video ID
let playList = [
    "dYyFQmZxXKw",
    "myjEoDypUD8",
    "g5heEyolhu0"
];

//播放起訖秒數
let playTime = [
    [101, 109],
    [39, 41],
    [146, 152]
];

let player; //Youtube player
let currentPlay = 0; //記錄目前撥到第幾首歌

//Youtube API Ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: playList[currentPlay],
        playerVars: {
            autoplay: 0,
            controls: 0,
            start: playTime[currentPlay][0],
            end: playTime[currentPlay][1],
            iv_load_policy: 3,
            rel: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

//Youtube Player Ready
function onPlayerReady(event) {
    $("#playButton").on("click", function () {
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

//Player State Change
function onPlayerStateChange(event) {
    if (Math.floor(player.getCurrentTime()) == playTime[currentPlay][1]){
        if (currentPlay < playList.length - 1) {
            currentPlay++;
            player.loadVideoById({
                videoId: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });
        } else {
            currentPlay = 0;
            player.cueVideoById({
                videoID: playList[currentPlay],
                startSeconds: playTime[currentPlay][0],
                endSeconds: playTime[currentPlay][1],
                suggestedQuality: "large"
            });
        }
    }
    if(event.data==1){
        $("h2").text(player.getVideoData().title);
    }
}