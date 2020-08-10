<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
:root {
  --main-bg-color: #2bda53;
  --primary-color: #013c61;
  --main-font: 'Roboto', sans-serif;
  --green: #2bda53;
}
#app {
  font-family: var(--main-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f6f8f8;
}
.table {
  color: var(--primary-color);
}
.nav__holder {
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.251429px;
  color: #013c61;
}
</style>
