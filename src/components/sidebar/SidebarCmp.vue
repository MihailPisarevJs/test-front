<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <router-link class="sidebar-menu-link" :to="{path: 'user'}">Владелец</router-link>
            <router-link class="sidebar-menu-link" :to="{path: 'services'}">Сервис</router-link>
            <router-link class="sidebar-menu-link" :to="{path: 'sales'}">Продажи</router-link>
            <router-link class="sidebar-menu-link" :to="{path: 'warehouse'}">Склад</router-link>
            <router-link class="sidebar-menu-link" :to="{path: 'analytics'}">Аналитика</router-link>
            <router-link class="sidebar-menu-link" :to="{path: 'stuff'}">Персонал</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        mounted() {
            console.log(this.$route.fullPath);
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.sidebar {
    @include flexCol(flex-start, center);
    height: 100%;
    width: 300px;
    background-color: $backdrop;

    &-menu {
        @include flexCol(flex-start, flex-start);
        width: 100%;
        margin: 10px;
        &-link {
            @include flexRow(flex-start, center);
            @include main-font-regular;
            height: 30px;
            width: 100%;
            padding: 20px;
            text-decoration: none;
            color: $text-color;

            &.router-link-exact-active {
                color: $active-color;
            }
        }
    }
}
</style>