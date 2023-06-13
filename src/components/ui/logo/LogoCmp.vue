<template>
    <div class="logo">
        <a class="logo-link" href="/">КП</a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.logo {
    @include flexRow(center, center);
    height: 100%;

    &-link {
        @include flexRow(center, center);
        @include main-font-medium;
        margin-bottom: 4px;
        margin-left: 20px;
        font-size: 24px;
        text-decoration: none;
        color: $text-color;
    }
}
</style>