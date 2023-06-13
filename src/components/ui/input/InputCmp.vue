<template>
    <div class="wrapper">
        <div class="text-wrapper">
            <span v-if="required" class="text-wrapper-required">*</span>
            <span class="text-wrapper-title">{{ title.value }}</span>
        </div>
        <div class="input-wrapper">
            <input :class="[warning !== '' ? 'input-warning' : 'input']" 
                type="text"
                v-model="value" 
                :placeholder="placeholder"
                @change="$emit('input', {key: title.key, value})"
            >
            <span class="warning">{{ warning }}</span>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {type: String, default: ""},
            title: {type: Object, default: () => { return {key: 'title', value: 'Title'}}},
            required: {type: Boolean, default: false},
            warning: {type: String, default: ""}
        }
    }

    // * Поле не должно быть пустым
</script>

<style lang="scss" scoped>
@import "~/src/assets/style/custom.scss";

.wrapper {
    @include flexCol(flex-start, center);
    height: 70px;
    width: 100%;
    margin-top: 14px;
}

.text-wrapper {
    @include flexRow(flex-start, flex-start); 
    height: 20px;
    width: 80%;

    &-required {
        font-size: 12px;
        color: $warning-color;
    }

    &-title {
        @include flexRow(flex-start, center); 
        @include main-font-regular;
        height: 100%;
        font-size: 12px;
        color: $text-color;
    }
}

.input-wrapper {
    @include flexCol(flex-start, center); 
    height: 16px;
    width: 100%;
}

.input {
    @include main-font-regular;
    min-height: 36px;
    width: 80%;
    padding: 0px 10px;
    color: $text-color;
    border: $border;
    border-radius: $small-radius;
    outline: none;
}

.input-warning {
    @include main-font-regular;
    min-height: 36px;
    width: 80%;
    padding: 0px 10px;
    color: $text-color;
    border: $border-warning;
    border-radius: $small-radius;
    outline: none;
}

.warning {
    @include main-font-regular;
    width: 80%;
    font-size: 12px;
    color: $warning-color;
}
</style>