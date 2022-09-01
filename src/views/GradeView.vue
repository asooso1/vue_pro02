<template>
    <div class="home">
        <BannerBar :isHome="true" SubText="조직도 조회" />
        <SearchBar />
        음~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
</template>

<script>
import BannerBar from '@/components/BannerBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import axios from 'axios';

export default {
    name: 'GradeView',
    data() {
        return {

        }
    },
    components: {
        BannerBar,
        SearchBar
    },
    methods: {
        showAll() {
            axios({
                method: "get",
                url: `http://localhost:8000/api/grade`
            }).then((res) => {
                console.log(res);
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

<style scoped>
</style>
