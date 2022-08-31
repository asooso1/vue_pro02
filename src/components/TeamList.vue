<template>
  <div>
    <p> 하이~ ~ 메인에 조직도를 하고,,,,,,,,,,,,,,,,, 이ㄹ괄 수정은 어케하는겨 ^^^  ~ㄴ ㅏ참 </p>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: "TeamList",
    data() {
      return{
        parentData: [{
          seq:0,
          co_seq: "",
          group_code:"",
          group_pcode:"",
          group_nm:"",
          group_enm:""
        }],
      }
    },
    components: {
      
    },
    methods: {
      parent() {
        axios({
          method: "get",
          url: `http://localhost:8000/api/group`
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.parent()
    }
  }
</script>
