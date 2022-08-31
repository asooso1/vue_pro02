<template>
  <div class="home">
    <BannerBar :isHome="true" />
    <SearchBar @setInput="updateData"/>
    <SearchList :userData="userData"/>
  </div>
</template>

<script>
  import SearchList from '../components/SearchList.vue'
  import BannerBar from  "@/components/BannerBar.vue"
  import SearchBar from "@/components/SearchBar.vue"

  export default {
    name: 'HomeView',
    data() {
      return {
        userData: [{
        user_id:"",
        user_num:"",
        group_code:"",
        user_nm:"",
        user_mobile:"",
        user_email:"",
      }],
      }
    },
    components: {
    SearchList,
    BannerBar,
    SearchBar
  },
  methods: {
    updateData(emitData){
      this.userData = emitData;
    },
  }

  }
</script>