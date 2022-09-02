<template>
    <!-- 1번.. -->
    <!-- <ul id="HCN">
      <h1>HCN</h1>
      <li
        v-for="(v, index) in parentData"
        :key="index"
        @click="test(index)"
      >
        <span>{{ v.group_enm }}</span>
        <div v-show="v.showState">
          <li
            v-for="(i, index) in childData"
            :key="index"
          >
          </li>
        </div>
      </li>
    </ul> -->
        

      <!-- <ul v-for="(idx) in parentData"
        
        :key="idx.no">
        <li v-bind:href="idx.group_nm" @click="showChild">
          <div>{{idx.group_nm}}</div>
          <ul>
            
          </ul>
        </li>
      </ul> -->

    <!-- 2번 -->
    <!-- <v-list class="list">
      <v-list-group
        v-for="(item, i) in parentData"
        :key="i"
        v-model="item.group_nm"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content @click="showChild" :id="item.group_enm">
            <v-list-item-title  v-text="item.group_enm"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in childData"
          v-model="subItem.group_enm"
          :key="subItem.group_enm"
          :to="subItem.to"
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title :id="subItem.group_nm" v-text="subItem.group_code" @click="showChild"></v-list-item-title>
          </v-list-item-content>
        </template>
        </v-list-item>
      </v-list-group>
    </v-list> -->

    <!-- 3번 얘 되는데 왜 초반 세번 헛돌지................... ^^-->
    <v-card class="mx-auto" width="300">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-icon>

          <v-list-item-title> HCN</v-list-item-title>
        </v-list-item>

        <v-list-group v-for="(item, i) in parentData" v-model="item.group_nm" :key="i" :value="false" no-action
          prepend-icon="mdi-square-small" mandatory color="indigo" :id="item.group_enm" @click="showChild(item.group_enm)">
          <template v-slot:activator>
            <v-list-item-title :id="item.group_enm" v-text="item.group_enm"></v-list-item-title>
          </template>

          <v-list-group v-for="(subItem, idx) in childData" v-model="subItem.group_nm" :key="idx" :value="false" no-action
            sub-group @click="showBaby(subItem.group_enm)">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.group_enm"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-group v-for="(babyItem, index) in babyData" v-model="babyItem.group_nm" :key="index" :value="false" no-action
              sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="babyItem.group_enm"></v-list-item-title>
                </v-list-item-content>
              </template>

            </v-list-group>

          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>

</template>

<script>
import axios from 'axios';

export default {
  name: "TeamList",
  data() {
    return {
      parentData: [{
        seq: 0,
        co_seq: "",
        group_code: "",
        group_pcode: "",
        group_nm: "",
        group_enm: ""
      }],
      childData: [{
        seq: 0,
        co_seq: "",
        group_code: "",
        group_pcode: "",
        group_nm: "",
        group_enm: ""
      }],
      babyData: [
        {seq: 0,
        co_seq: "",
        group_code: "",
        group_pcode: "",
        group_nm: "",
        group_enm: ""}
      ],
      userData: [],
    }
  },
  components: {

  },
  methods: {
    test(i){
      console.log(this.parentData[i].showState)
      this.parentData[i].showState = !this.parentData[i].showState;
    },
    parent: function() {
      axios({
        method: "get",
        url: `http://localhost:8000/api/group/hcn`
      }).then((res) => {
        console.log(res)
        this.parentData = res.data;
        this.parentData.forEach((item) => {
          item.showState = false;
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    newParent: async function() {
      await axios({
        method: "get",
        url: `http://localhost:8000/api/group/hcn`
      }).then((res) => {
        console.log(res)
        
        this.parentData = res.data;
      }).catch((err) => {
        console.log(err)
      })
      await axios({
        method: "get",
        url: `http://localhost:8000/api/user/group/${this.parentData.group_enm}`
      }).then((res) => {
        console.log(res)
        
        this.parentData = res.data;
      }).catch((err) => {
        console.log(err)
      })
    },
    showChild: async function (enm) {
      await axios({
        method: "get",
        url: `http://localhost:8000/api/group/${enm}`,
      }).then((res) => {
        console.log(res)
        this.childData = res.data;
        // a(this.childData.group_nm);
      }).catch((err) => {
        console.log(err)
      })
      await axios({
        method: "get",
        url: `http://localhost:8000/api/user/group/${enm}`,
      }).then((res) => {
        console.log(res);
        this.userData = res.data;
        this.$emit('dataUpdate', this.userData);
        // this.childData = res.data;
        // a(this.childData.group_nm);
      }).catch((err) => {
        console.log(err)
      })
    },
    showBaby: async function (enm) {
      await axios({
        method: "get",
        url: `http://localhost:8000/api/group/${enm}`,
      }).then((res) => {
        console.log(res)
        this.babyData = res.data;
      }).catch((err) => {
        console.log(err)
      })
      await axios({
        method: "get",
        url: `http://localhost:8000/api/user/group/${enm}`,
      }).then((res) => {
        console.log(res);
        this.userData = res.data;
        this.$emit('dataUpdate', this.userData);
      }).catch((err) => {
        console.log(err)
      })
    },
    // showChild(e) {
    //   // var KeyWord = e.target.id;
    //   axios({
    //     method: "get",
    //     url: `http://localhost:8000/api/group/${e}`,
    //   }).then((res) => {
    //     console.log(res)
    //     this.childData = res.data;
    //     // a(this.childData.group_nm);
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // },


    // a(){
    //   axios({
    //     method: "get",
    //     url: `http://localhost:8000/api/user/group/${this.childData.group_nm}`
    //   }).then((res) => {
    //     console.log(res);
    //     this.userData() = res.data;
    //   }).catch((err) => {
    //     console.log(err);
    //   })
    // }
  },
  mounted() {
    this.parent()
  }
}
</script>

<style>
.list {
  width: 20rem;
}

.elevation-1 {
  width: 50rem;
}
</style>
