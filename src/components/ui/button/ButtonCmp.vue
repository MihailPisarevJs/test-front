<template>
    <button 
        class="button" 
        type="button"
        @click="clicked"
    >
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: {
            name: {type: String, default: "Btn"}
        },

        methods: {
            clicked() {
                this.$emit("clicked");
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.button {
    @include flexRow(center, center);
    @include main-font-regular;
    min-height: 36px;
    margin: 0px 20px;
    padding: 0px 10px;
    color: $text-color;
    border: $border;
    border-radius: $small-radius;
    outline: none;

    &:hover {
        border: $border-hover;
    }

    &:active {
        border: $border-hover;
        background-color: $backdrop-active;
    }
}
</style>