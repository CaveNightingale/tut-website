<template>
  <div class="main-view">
    <ElCarousel class="banner-container" height="100vh" :interval="10000">
      <div class="banner-text">
        <p>Welcome to TUT</p>
      </div>
      <a
        href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=5UOBd_Q2rJyCvfQCVAkUEBnp788yNQDS&authKey=sscCWikGcRkW8Hk%2BUIFY%2FsN0hBs1KZpoIRNVM2V8XeLacV04Jg9azX2UMQSuWoqm&noverify=0&group_code=553214655"
        target="_blank"
      >
        <div class="joinUs-button">
          <p>加入我们</p>
        </div>
      </a>
      <ElCarouselItem v-for="(img, key) in imgList" :key="key">
        <img :src="img" alt="" class="banner-img" />
      </ElCarouselItem>
    </ElCarousel>
    <div class="introduction-container">
      <div class="introduction-content">
        <div class="introduction-title">
          <img alt="" class="in-title-icon" src="../assets/TUT-logo.svg" />
          <div class="in-title-body">
            <p class="in-title-body-head">简介</p>
            <p class="in-title-body-foot">introduction</p>
          </div>
        </div>
        <div class="introduction-text">
          <p>TUT服务器是一个1.20.1版本的农夫乐事生电服。</p>
          <p>拥有独立物理机和公网能够保证玩家流畅游玩的体验。</p>
        </div>
      </div>
      <div class="introduction-content">
        <div class="introduction-title">
          <img alt="" class="in-title-icon" src="../assets/concept.svg" />
          <div class="in-title-body">
            <p class="in-title-body-head">理念</p>
            <p class="in-title-body-foot">concept</p>
          </div>
        </div>
        <div class="introduction-text">
          <p>服内实行共产共用的理念。</p>
          <p>服内无限制措施，你可以在这里尽情发挥想象力与创造力。</p>
          <p>
            不论是各种各样的红石机器、还是风格迥异的各类建筑
            或是参与联合举办的活动。
          </p>
          <p>你！总能在这里找到属于自己的一片天地，描绘你在tut的创作小世界。</p>
        </div>
      </div>
      <div class="introduction-content">
        <div class="introduction-title">
          <div class="in-title-body">
            <p class="in-title-body-head">加入我们</p>
            <p class="in-title-body-foot">join us, right now</p>
          </div>
        </div>
        <div class="introduction-text">
          <p>如果您对我们感兴趣。</p>
          <p>欢迎大家加入我们！</p>
          <p>我们的交流群群号是 <span class="qq">553214655</span>。</p>
          <p>我们在这里期待你的到来哦!</p>
        </div>
      </div>
    </div>
    <div class="dtime">
      <div class="time-text">
        <p>服务器已经稳定运行</p>
        <p class="time">
          {{ time[4] }}天{{ time[3] }}时{{ time[2] }}分{{ time[1] }}秒
        </p>
      </div>
      <ElCarousel
        class="time-container"
        height="100vh"
        indicator-position="none"
        :interval="5000"
      >
        <ElCarouselItem v-for="(timeImg, key) in timeList" :key="key">
          <img :src="timeImg" class="time-img" />
        </ElCarouselItem>
      </ElCarousel>
    </div>

    <div class="players">
      <h2 id="players_title">管理团队</h2>
      <div id="players_containers">
        <div
          v-for="([img, url], name) in players"
          :key="name"
          class="player_container"
        >
          <a :href="url" class="player_url" target="_blank">
            <img :alt="name" :src="img" class="player_img" />
            <p class="player_name">{{ name }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="foot">
      <div id="foot_content">
        <img id="foot_content_icon" alt="" src="../assets/TUT-logo-a.svg" />
        <div id="foot_content_text">
          <p id="ServerName">TUT-outskirt_un</p>
          <div id="foot_content_body">
            <p>技术支持 / LAS开发组</p>
            <p>
              联系我们 / 553214655 <span id="foot_content_o">(服外交流群)</span>
            </p>
          </div>
        </div>
      </div>
      <div id="foot_info">
        <p>©2024 TUT-outskirt_un</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import banner1 from '@/assets/banner/banner1.webp';
import banner2 from '@/assets/banner/banner2.png';
import banner3 from '@/assets/banner/banner3.webp';
import banner4 from '@/assets/banner/banner4.png';

import player1 from '@/assets/players/1.png';
import player2 from '@/assets/players/2.png';
import player3 from '@/assets/players/3.png';
import player4 from '@/assets/players/4.png';
import player5 from '@/assets/players/5.png';

import time1 from '@/assets/time/1.png';
import time2 from '@/assets/time/2.png';
import time3 from '@/assets/time/3.png';
import time4 from '@/assets/time/4.png';
import time5 from '@/assets/time/5.png';
import time6 from '@/assets/time/6.png';
import time7 from '@/assets/time/7.png';
import time8 from '@/assets/time/8.png';

import { ElCarousel, ElCarouselItem } from 'element-plus';
import { ref, watchEffect } from 'vue';

const imgList = [banner1, banner2, banner3, banner4];
const timeList = [time1, time2, time3, time4, time5, time6, time7, time8];
const players = {
  CaveNightingale: [player1, 'https://space.bilibili.com/362962716'],
  FuYi_Liz: [player2, 'https://space.bilibili.com/476701169'],
  Setchex: [player3, 'https://space.bilibili.com/284853282'],
  Fanzhitianyu: [player4, 'https://space.bilibili.com/3461569335790303'],
  Renyigesai: [player5, 'https://space.bilibili.com/301040272'],
};

const time = ref([0, 0, 0, 0, 0]);
const startTime = new Date('2022/09/20 00:00:00').getTime();
const timeUnits = [1000, 60, 60, 24, 0];

function updateTime() {
  time.value[0] = Date.now() - startTime;
  for (let i = 1; i < time.value.length; i++) {
    time.value[i] = Math.floor(time.value[i - 1] / timeUnits[i - 1]);
    time.value[i - 1] %= timeUnits[i - 1];
  }
}

watchEffect(onCleanup => {
  updateTime();
  const timer = setInterval(updateTime, 1000);
  onCleanup(() => clearInterval(timer));
});
</script>

<style scoped>
@import '@/css/main/banner.css';
@import '@/css/main/introduction.css';
@import '@/css/main/players.css';
@import '@/css/main/time.css';
@import '@/css/main/foot.css';

.main-view {
  display: flex;
  flex-direction: column;
  height: max-content;
}
</style>
