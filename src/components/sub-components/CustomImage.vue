<template>
    <div class="p-0 m-0">
        <img :src="require(`../../assets/${imgName}`)" :alt="imgAlt" :class="imgClass" class="img">
    </div>
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
    object-fit: contain;
    width: 100% !important;
    }

div {
    border-radius: 10px;
}
</style>