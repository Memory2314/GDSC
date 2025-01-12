// ==UserScript==
// @name         广东双创
// @namespace    http://tampermonkey.net/
// @version      2025-01-11
// @description  广东双创视频替换
// @author       Memory
// @match        https://srsc.gdedu.gov.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const intervalId = setInterval(function() {
        var video = document.getElementsByTagName('video')[0];

        if (video) {
            // 修改 video 的 src 属性
            video.src = 'https://github.boki.moe/https://raw.githubusercontent.com/Memory2314/GDSC/main/blue_video.mp4';

            // 如果需要立即播放视频，可以调用 play() 方法
            video.play();

            console.log('视频源已更新');
        }
    }, 2000);
})();
