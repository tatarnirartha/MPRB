<template>
    <a :href="link" class="link" :class="linkClass" :style="linkStyle" @click="handleClick">{{label}}</a>
</template>

<script>
export default {
    name: 'CustomLink',
    props: {
        link: {
            type: String,
            default: ''
        },
        linkClass: {
            type: String,
            default: 'link-primary'
        },
        label: {
            type: String,
            default: ''
        },
        linkStyle: {
            type: String
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
.link {
    text-decoration: none;
}
</style>