<template>
    <div class="user">
        <header-cmp :userData="userData" tabState="true" />
    </div>
    <div class="user-section">
        <sidebar-cmp />
        <router-view />
    </div>
</template>

<script>
import HeaderCmp from '@/components/headers/HeaderCmp.vue';
import SidebarCmp from '@/components/sidebar/SidebarCmp.vue';
import network from "../assets/api/network.js"


export default {
    components: {
        HeaderCmp,
        SidebarCmp
    },
    data() {
        return {
            tabState: true,
            isLoading: true,
            userData: {}
        }
    },

    mounted() {
        this.getData();
    },
        
    methods: {
        getData() {
            const ssntkn = localStorage.getItem("ssntkn");
            network("http://localhost:5000/api/user", "GET", {}, ssntkn)
                .then((res) => {
                    this.userData = res.data
                    console.log(this.userData);
                })
                .catch((error) => {
                    this.$router.push({path: "/login"});
                    console.log(error.response.data.message);
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.user-section {
    @include flexRow(space-between, center);
    height: calc(100vh - 50px);
}
</style>