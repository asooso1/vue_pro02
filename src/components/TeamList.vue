<template>
  <div>
    <!-- <ul v-for="(idx) in parentData"
    :key="idx.no">
    <li v-bind:href="idx.group_nm" @click="showChild">
      <div>{{idx.group_nm}}</div>
      <ul>
        
      </ul>
    </li>
    
    </ul> -->
    <v-list class="list">
      <v-list-group
        v-for="(item, i) in parentData"
        :key="i"
        v-model="item.group_nm"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content @click="showChild">
            <v-list-item-title :id="item.group_enm" v-text="item.group_enm"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in childtData"
          v-model="subItem.group_enm"
          :key="subItem.group_enm"
          :to="subItem.to"
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="subItem.group_code"></v-list-item-title>
          </v-list-item-content>
        </template>
        </v-list-item>
      </v-list-group>
    </v-list>

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
        childtData: [{
          seq:0,
          co_seq: "",
          group_code:"",
          group_pcode:"",
          group_nm:"",
          group_enm:""
        }],
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
      
    },
    methods: {
      parent() {
        axios({
          method: "get",
          url: `http://localhost:8000/api/group`
        }).then((res) => {
          console.log(res)
          this.parentData = res.data;
        }).catch((err) => {
          console.log(err)
        })
      },
      showChild(e) {
        var KeyWord = e.target.id;
        axios({
          method: "get",
          url: `http://localhost:8000/api/group/${KeyWord}`
        }).then((res) => {
          console.log(res)
          this.childtData = res.data;
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

<style>
.list{
  width: 20rem;
}

.elevation-1{
  width: 50rem;
}
</style>
