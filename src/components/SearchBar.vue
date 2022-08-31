<template>
  <div class="search-bar">
    <h2>사원정보를 검색해보세요.</h2>
    <input type="text" v-model="keyword" @keyup.enter="searchKeyword" placeholder="ex) 김나린 혹은 2232783"/>
    <button class="material-icons search-btn" @click="searchKeyword">
      search
    </button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: null, // 검색키워드
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
  methods: {
    searchKeyword() {
      axios({
        method: "get",
        url: `http://localhost:8000/api/user/${this.keyword}`
      }).then((res) => {
        console.log(res);
        this.userData = res.data;
        this.$emit("setInput", this.userData);
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
.search-bar {
  background: linear-gradient(to top, #78767a, rgb(187, 187, 187));
  width: 100%;
  height: 10vh;
  display: flex;
  position: relative;
  align-items: center;
}
.search-bar h2 {
  margin: 0;
  font-size: 1.5vw;
  position: absolute;
  left: 13vw;
  color: #fff;
}
.search-bar form {
  position: absolute;
  right: 8vw;
}
.search-bar input {
  background: #fff;
  position: absolute;
  right: 13vw;
  height: 5vh;
  width: 22vw;
  border-radius: 0.7vw;
  border: none;
  font-size: 1vw;
  outline: none;
  padding-left: 1vw;
  font-family: "MinSans-Regular";
}
.search-bar input:focus {
  animation: input-focus 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
.search-bar input:not(:focus) {
  animation: input-blur 0.3s ease-out;
}
.search-bar .search-btn {
  position: absolute;
  right: 13.5vw;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
@keyframes input-focus {
  from {
    width: 22vw;
  }
  to {
    width: 30vw;
  }
}
@keyframes input-blur {
  from {
    width: 30vw;
  }
  to {
    width: 22vw;
  }
}
</style>
