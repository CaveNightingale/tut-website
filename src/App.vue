<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png.dis">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="menu">
    <router-link to="/"><img alt="tut_logo" class="logo" src="./assets/TUT-logo.svg"></router-link>
    <ul class="pages">
      <li>
        <RouterLink to="/main">主页</RouterLink>
      </li>
      <li>
        <RouterLink to="/">地图</RouterLink>
      </li>
      <li><a href="" target="_blank">博客</a></li>
      <li>
        <RouterLink to="/">公告</RouterLink>
      </li>
      <li><a
          href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=5UOBd_Q2rJyCvfQCVAkUEBnp788yNQDS&authKey=sscCWikGcRkW8Hk%2BUIFY%2FsN0hBs1KZpoIRNVM2V8XeLacV04Jg9azX2UMQSuWoqm&noverify=0&group_code=553214655"
          target="_blank">加入我们</a>
      </li>
      <li><a href="https://space.bilibili.com/1851088709" target="_blank">哔哩哔哩</a></li>
    </ul>
  </div>
  <div class="page">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'

import {defineComponent} from "vue";

defineComponent({name: 'App'});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  background-color: #5c6563;
  overflow-y: scroll;
}

.menu {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: rgba(41, 41, 41, 1);
  box-shadow: black 0 0 20px;
  align-items: center;
  justify-content: space-between;
}

.logo {
  padding-top: 10px;
  padding-left: 35px;
  width: 11rch;
  height: 11rch;
}

.pages {
  display: flex;
  flex-direction: row;
  text-align: center;

}

.pages li {
  color: white;
  width: max-content;
  display: block;
  margin: 0 25px;
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
}

.pages li a {
  padding: 6px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  text-decoration: none;
  position: relative;
}

.pages li a:hover {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.pages li a::before,
.pages li a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  border: rgba(218, 59, 187, 0.85) solid 3px;
  transition: clip-path 0.3s ease-in-out, border-bottom-width 0.3s ease-in-out;
  border-radius: 20px;
  border-bottom-color: rgba(124, 184, 238, 0.85);
}

.pages li a::before {
  clip-path: inset(0 50% 50% 0);
}

.pages li a::after {
  clip-path: inset(50% 0 0 50%);
}

.pages li a:hover::before {
  clip-path: inset(0 0 0 0);
}

.pages li a:hover::after {
  clip-path: inset(0 0 0 0);
}

.page {
  top: 100px;
  height: max-content;
  width: 100%;
  z-index: -100;
  background-color: #2a2c33;
  position: relative;
  display: flex;
  justify-content: center;
  scroll-behavior: smooth;
  flex-direction: column;
}

#app::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}

#app::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

#app::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, .5);
  background-color: transparent;
}


img, a {

  -webkit-user-drag: none;

  -moz-user-drag: none;

  -ms-user-drag: none;

  user-drag: none;

}
</style>
