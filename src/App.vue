<template>
  <div id="app">
    <NavBar />
    <BannerBar />
    <SearchBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import FooterBar from "@/components/FooterBar.vue"
import BannerBar from  "@/components/BannerBar.vue"
import SearchBar from "@/components/SearchBar.vue"
export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    BannerBar,
    SearchBar
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: "MinSans-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/MinSans-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "MinSans-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.4;
}
</style>