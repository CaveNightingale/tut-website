<template>
  <div class="MainView">
    <el-carousel class="banner-container"
                 height="100vh"
                 interval=10000
                 motion-blur="motion-blur"
                 @change="changeImg">
      <div class="banner-text">
        <p>Welcome to TUT</p>
      </div>
      <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=5UOBd_Q2rJyCvfQCVAkUEBnp788yNQDS&authKey=sscCWikGcRkW8Hk%2BUIFY%2FsN0hBs1KZpoIRNVM2V8XeLacV04Jg9azX2UMQSuWoqm&noverify=0&group_code=553214655"
         target="_blank">
        <div id="join_button" class="joinUs-button">
          <p>加入我们</p>
        </div>
      </a>
      <el-carousel-item v-for="img in imgList" :key="img">
        <img :src=img.img alt="" class="banner-img" decoding="async" loading="eager"/>
      </el-carousel-item>
    </el-carousel>
    <div class="introduction_container">
      <div class="introduction_content">
          <div class="introduction_title">
            <img alt="" class="in-title-icon" src="../assets/TUT-logo.svg"/>
            <div class="in-title-body">
              <p class="in-title-body-head">简介</p>
              <p class="in-title-body-foot">introduction</p>
            </div>
          </div>
          <div class="introduction_text">
            <p>
              TUT服务器是一个1.18.2版本的原版生电服。
            </p>
            <p>
              拥有独立物理机和公网能够保证玩家流畅游玩的体验。
            </p>
          </div>
      </div>
      <div class="introduction_content">
        <div class="introduction_title">
          <img alt="" class="in-title-icon" src="../assets/concept.svg"/>
          <div class="in-title-body">
            <p class="in-title-body-head">理念</p>
            <p class="in-title-body-foot">concept</p>
          </div>
        </div>
          <div class="introduction_text">
            <p>
              服内实行共产共用的理念。
            </p>
            <p>
              服内无限制措施，你可以在这里尽情发挥想象力与创造力。
            </p>
            <p>
              不论是各种各样的红石机器、还是风格迥异的各类建筑 或是参与联合举办的活动。
            </p>
            <p>
              你！总能在这里找到属于自己的一片天地，描绘你在tut的创作小世界。
            </p>
          </div>
      </div>
      <div class="introduction_content">
        <div class="introduction_title">
          <div class="in-title-body">
            <p class="in-title-body-head">加入我们</p>
            <p class="in-title-body-foot">join us, right now</p>
          </div>
        </div>
          <div class="introduction_text">
            <p>
              如果您对我们感兴趣。
            </p>
            <p>
              欢迎大家加入我们！
            </p>
            <p>
              我们的交流群群号是 <span id="qq_number">553214655</span>。
            </p>
            <p>
              我们在这里期待你的到来哦!
            </p>
          </div>
      </div>
    </div>
    <div id="dtime">
      <div class="time-text">
        <p>服务器已经稳定运行</p>
        <p id="time">{{ time.day + "天" + time.hour + "时" + time.minute + "分" + time.second + "秒" }}</p>
      </div>
      <el-carousel class="time-container"
                   height="100vh"
                   indicator-position="none"
                   interval=5000>
        <el-carousel-item v-for="timeImg in timeList" :key="timeImg.id">
          <img :alt="timeImg.id" :src=timeImg.img class="time-img" decoding="async" loading="lazy"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="players">
      <h2 id="players_title">管理团队</h2>
      <div id="players_containers">
        <div v-for="player in playerList" :key="player.id" class="player_container">
          <a :href=player.url class="player_url" target="_blank">
          <img :alt=player.name :src=player.img class="player_img">
            <p class="player_name">{{ player.name }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="foot">
      <div id="foot_content">
        <img id="foot_content_icon" alt="" src="../assets/TUT-logo-a.svg"/>
        <div id="foot_content_text">
          <p id="ServerName">TUT-outskirt_un</p>
          <div id="foot_content_body">
            <p>技术支持 / LAS开发组</p>
            <p>联系我们 / 553214655 (服外交流群)</p>
          </div>
        </div>
      </div>
      <div id="foot_info">
        <p>©2024 TUT-outskirt_un</p>
      </div>
    </div>
  </div>
</template>

<script>
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

const imgList = [
  // {img: banner1, top: "25vh", left: "40vw", id: 0},
  // {img: banner2, top: "35vh", left: "40vw", id: 1},
  // {img: banner3, top: "45vh", left: "60vw", id: 2},
  // {img: banner4, top: "55vh", left: "70vw", id: 3}
  {img: banner1, top: "70vh", left: "15vw", id: 0},
  {img: banner2, top: "70vh", left: "15vw", id: 1},
  {img: banner3, top: "70vh", left: "15vw", id: 2},
  {img: banner4, top: "70vh", left: "15vw", id: 3}
];

const playerList = [
  {img: player1, id: 1, name: "CaveNightingale", url: "https://space.bilibili.com/362962716"},
  {img: player2, id: 2, name: "FuYi_Liz", url: "https://space.bilibili.com/476701169"},
  {img: player3, id: 3, name: "Setchex", url: "https://space.bilibili.com/284853282"},
  {img: player4, id: 4, name: "Fanzhitianyu", url: "https://space.bilibili.com/3461569335790303"},
  {img: player5, id: 5, name: "Renyigesai", url: "https://space.bilibili.com/301040272"}
];

const timeList = [
  {img: time1, id: 1},
  {img: time2, id: 2},
  {img: time3, id: 3},
  {img: time4, id: 4},
  {img: time5, id: 5},
  {img: time6, id: 6},
  {img: time7, id: 7},
  {img: time8, id: 8}
];

const start_time = new Date("2022/09/20 00:00:00");

const time = {day: 0, hour: 0, minute: 0, second: 0}

// const start_time = new Date("");
// var time = new Date();
export default {
  name: 'MainView',
  props: {
    msg: String
  },
  data() {
    return {
      imgList,
      playerList,
      timeList,
      time,
      timer: null
    }
  }, methods: {
    changeImg(current) {
      const response = 1000;
      const cu = document.getElementById("join_button");
      const sw = window.innerWidth;
      //document.getElementById("img"+prev);
      if (cu != null && sw >= response) {
        cu.style.top = imgList[current].top;
        cu.style.left = imgList[current].left;
      } else {
        cu.style.left = "50vw";
      }
    },
    updateTime() {
      const now = new Date();
      const dt = now.getTime() - start_time.getTime();

      this.time.day = Math.floor(dt / (24 * 3600 * 1000));
      this.time.hour = Math.floor(dt / (3600 * 1000)) % 24;
      this.time.minute = Math.floor(dt / (60 * 1000)) % 60;
      this.time.second = Math.floor(dt / 1000) % 60;
    }
  }, mounted() {
    this.changeImg(0);
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
  }, unmounted() {
    clearInterval(this.timer);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/css/mainView/banner.css";
@import "@/css/mainView/introduction.css";
@import "@/css/mainView/players.css";
@import "@/css/mainView/time.css";
@import "@/css/mainView/foot.css";

.MainView {
  display: flex;
  flex-direction: column;
  height: max-content;
}


</style>
