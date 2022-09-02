<template>
  <div>
    <v-data-table v-model="selected" class="elevation-1 mr-3" :headers="headers" :items="userData" hide-default-footer
      show-select :single-select="false" item-key="user_id" :page.sync="page" @page-count="pageCount = $event"
      :items-per-page="10">
    </v-data-table>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text >수정</v-btn>
      <v-btn color="blue darken-1" text >삭제</v-btn>
    </v-card-actions>
    <v-pagination v-model="page" :length="pageCount" :total-visible="10"></v-pagination>
  </div>
</template>
  
<script>

export default {
  name: "SearchList",
  props: {
    userData: Array,
  },
  data() {
    return {
      today: new Date(),
      sendData: {
        menus: [],
      },
      page: 1,
      pageCount: 5,
      viewCount: 5,
      //https://ayoteralab.tistory.com/entry/Vuejs-08-use-v-data-table
      // https://luerangler-dev.tistory.com/23
      dialogDelete: false,
      selected: [],
      expanded: [],
      headers: [
        { text: "이름", align: "start", value: "user_nm", sortable: true, width: '10%' },
        { text: "사번", align: "start", value: "user_num", sortable: true, width: '10%' },
        { text: "이메일", align: "start", value: "user_email", sortable: true, width: '15%' },
        { text: "번호", align: "start", value: "user_mobile", sortable: true, width: '15%' },
        { text: "팀", align: "start", value: "group_nm", sortable: true, width: '15%' },
        { text: "직급", align: "start", value: "grade_nm", sortable: true, width: '10%' },
        { text: "내선번호", align: "start", value: "user_office", sortable: true, width: '25%' },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.btn-save {
  margin-top: 1vw;
  width: 11vw;
  font-size: 0.8vw;
  border-radius: 0.4vw;
  font-size: 1vw;
}

.elevation-1 {
  margin-top: 2rem;
  width: 90rem;
}

.v-application {
  max-height: 80vh;
}
</style>
