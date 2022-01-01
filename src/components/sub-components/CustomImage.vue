<template>
    <img :src="require(`../../assets/${imgName}`)" :alt="imgAlt" :class="imgClass" class="img">
</template>

<script>
export default {
    name: 'CustomImage',
    props: {
        imgName: {
            default: '',
        },
        imgAlt: {
            type: String,
            default: ''
        },
        imgClass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.img {
    object-fit: cover;
    }
</style>