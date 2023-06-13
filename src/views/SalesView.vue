<template>
    <div class="sales">
        sales
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.sales {
    @include flexRow(center, center);
    height: 100%;
    width: calc(100% - 300px);
    background-color: #dfe9d4;
}
</style>