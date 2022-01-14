<template>
    <button class="btn" :class="btnClass" @click="handleClick">
        {{label}}
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        label: {
            type: String,
            default: ''
        },
        btnClass: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClick(){
            this.$emit('btnClick')
        }
    }
}
</script>

<style scoped>

.btn-round{
    border-radius: 10px;
    padding: 10px 20px;
}

</style>