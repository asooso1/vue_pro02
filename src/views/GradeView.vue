<template>
    <div class="home">
        <BannerBar :isHome="true" SubText="조직도" />
        <SearchBar @setInput="updateData" />
        <v-app>
            <v-card class="d-flex flex-row">
                <v-card class="mx-auto" width="250">
                    <v-list>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account-circle</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title> 직급</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <v-list-group v-for="(item, idx) in gradeData" v-model="item.grade_nm" :key="idx" no-action
                        prepend-icon="mdi-square-small" mandatory color="indigo" :id="item.grade_nm"
                        @click="showGrade(item.grade_nm)">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.grade_nm"></v-list-item-title>
                            </v-list-item-content>
                        </template>
                    </v-list-group>
                </v-card>
            </v-card>
            <SearchList :userData="userData" />
        </v-app>
    </div>
</template>

<script>
import BannerBar from '@/components/BannerBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';
import SearchList from '../components/SearchList.vue';

export default {
    name: 'GradeView',
    data() {
        return {
            gradeData: [{}],
            userData: [{}]
        }
    },
    components: {
        BannerBar,
        SearchBar,
        SearchList
    },
    methods: {
        updateData(emitData) {
            this.userData = emitData;
        },
        showAll() {
            axios({
                method: "get",
                url: `http://localhost:8000/api/grade`
            }).then((res) => {
                console.log(res);
                this.gradeData = res.data;
                axios ({
                    method:"get", 
                    url:`http://localhost:8000/api/user/hcn`
                }).then((res)=>{
                    console.log(res);
                    this.userData = res.data;
                }).catch((err)=>{
                    console.log(err);
                })
            }).catch((err) => {
                console.log(err);
            })
        },
        showGrade(nm) {
            axios({
                method: "get",
                url: `http://localhost:8000/api/user/grade/${nm}`
            }).then((res) => {
                console.log(res);
                this.userData = res.data;
            }).catch((err) => {
                console.log(err);
            })
        }
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

.list {
    width: 20rem;
}

.elevation-1 {
    width: 50rem;
}
</style>
