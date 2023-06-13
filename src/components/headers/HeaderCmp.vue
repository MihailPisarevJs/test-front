<template>
    <Header class="header">
        <Logo-cmp />
        <nav class="header-nav">
            <router-link v-if="!session" class="header-nav-link" to="/login">Вход</router-link>
            <router-link v-if="!session" class="header-nav-link" to="/registration">Регистрация</router-link>

            <span v-if="session" class="current-user">
                {{ userData.email }}
            </span>
            <span v-if="session" class="current-user">|</span>
            <button v-if="session" type="button" class="header-nav-link" @click="logout">Выйти</button>
        </nav>
    </Header>
</template> class="link"

<script>
import LogoCmp from '../ui/logo/LogoCmp.vue';
import network from "../../assets/api/network.js"

    export default {
        components: {
            LogoCmp
        },

        props: {
            tabState: { type: Boolean, default: false },
            userData: { type: Object, default: () => { return {} }}
        },

        data() {
            return {
                session: this.tabState
            }
        },

        methods: {
            logout() {
                network("http://localhost:5000/api/logout", "POST", {})
                .then((res) => {
                    console.log(res);
                    localStorage.removeItem("ssntkn");
                    localStorage.removeItem("rfrstkn");
                    this.$router.push({path: "/login"});
                })
                .catch((error) => {
                    console.log(error.response);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.header {
    @include flexRow(space-between, center);
    height: 50px;
    border-bottom: $border;
    background-color: $backdrop;

    &-nav {
        @include flexRow(center, center);
        height: 100%;
        margin: 15px;

        &-link {
            @include main-font-regular;
            margin-right: 10px;
            text-decoration: none;
            font-size: 14px;
            color: $text-color;

            &.router-link-exact-active {
                color: $active-color;
            }
        }
    }
}

.current-user {
    @include main-font-regular;
    margin-right: 10px;
    text-decoration: none;
    font-size: 14px;
    color: $text-color;
}
</style>