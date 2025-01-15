// ==UserScript==
// @name         广东双创
// @namespace    http://tampermonkey.net/
// @version      2025-01-11
// @description  广东双创视频替换
// @author       Memory
// @match        https://srsc.gdedu.gov.cn/course/study*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const intervalId = setInterval(function() {
        var div = document.querySelector('.ant-modal-root');
        if (div) {
            div.remove();
            console.log('弹窗已去除');
        }

        var video = document.getElementsByTagName('video')[0];
        var url = 'https://github.boki.moe/https://raw.githubusercontent.com/Memory2314/GDSC/main/blue_video.mp4';
        if (video && video.src != url) {
            // 修改 video 的 src 属性
            video.src = url;
            video.play();
            console.log('视频源已更新');
        }
    }, 10);
})();
