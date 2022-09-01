<template>
  <div class="home">
    <BannerBar :isHome="true" />
    <SearchBar @setInput="updateData" />
    <TeamList />
    <SearchList :userData="userData" />
  </div>
</template>

<script>
  import TeamList from '../components/TeamList.vue'
  import BannerBar from  "@/components/BannerBar.vue"
  import SearchBar from '@/components/SearchBar.vue'
  import SearchList from '../components/SearchList.vue'

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
    TeamList,
    BannerBar,
    SearchBar,
    SearchList,
},
  methods: {
    updateData(emitData){
      this.userData = emitData;
    },
  }

  }
</script>

<style>
  .home {
    background: linear-gradient(to top, #FDF7F1, #fff);
  }
</style>

