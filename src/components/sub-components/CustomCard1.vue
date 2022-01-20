<template>
    <div class="round border shadow">
        <div class="row justify-content-center m-0">
            <div class="col-12 p-2 m-0">
                <custom-image :imgName="imgSrc" imgClass="round shadow" />
            </div>

            <div class="col-12 col-lg-6 mt-2 mb-4">
                    <h5 class="text-center">{{title}}</h5>
                    <custom-button label="Detail" btnClass="btn-success btn-round" @btnClick="handleClick"/>                
            </div>
            
        </div>
    </div>
</template>

<script>
import CustomImage from "./CustomImage.vue"
import CustomButton from "./CustomButton.vue"

export default {
    name: "CustomCard1",
    components: {
        CustomImage,
        CustomButton
    },
    props: {
        imgSrc: {
            type: String
        },
        paragraft: {
            type: String
        },
        title: {
            type: String
        }
    },
    methods: {
        handleClick(){
            this.$emit('cardBtnClick')
        }
    }
}
</script>

<style scoped>
h3 {
    text-align: start;
}

p {
    text-align: start;
}
</style>