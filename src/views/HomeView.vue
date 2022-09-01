<template>
  <div class="home">
    <BannerBar :isHome="true" />
    <SearchBar @setInput="updateData" />
    <v-app>
      <v-card  class="d-flex flex-row">
        <TeamList @dataUpdate="updateData"/>
        <SearchList :userData="userData" />
      </v-card>
    </v-app>
  </div>
</template>

<script>
import TeamList from '../components/TeamList.vue'
import BannerBar from "@/components/BannerBar.vue"
import SearchBar from '@/components/SearchBar.vue'
import SearchList from '../components/SearchList.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      userData: [{
        user_id: "",
        user_num: "",
        group_code: "",
        user_nm: "",
        user_mobile: "",
        user_email: "",
        group_nm:"",
        grade_nm:"",
        user_office:""
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
    updateData(emitData) {
      this.userData = emitData;
    },
    showAll() {
      axios ({
        method: "get",
        url: `http://localhost:8000/api/user`,
      }).then((res) => {
        console.log(res);
        this.userData = res.data;
      }).catch((err) => {
        console.log(err);
      })
    },
  },
  mounted() {
      this.showAll();
  }
}
</script>

<style>
.home {
  background: linear-gradient(to top, #FDF7F1, #fff);
}
</style>

