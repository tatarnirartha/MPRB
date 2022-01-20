<template>
    <div class="round border shadow p-3">
        <div class="row justify-content-right">
            <div class="col-12 col-lg-5 ">
                <custom-image :imgName="imgSrc" imgClass="round shadow" />
            </div>

            <div class="col-12 col-lg-6 ms-lg-3 mt-3 mt-lg-0 d-flex align-items-center">
                <div>
                    <h3>{{title}}</h3>
                    <p>{{paragraft}}</p>
                    <custom-button label="Selengkapnya" btnClass="btn-success btn-round" @btnClick="handleClick"/>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import CustomImage from "./CustomImage.vue"
import CustomButton from "./CustomButton.vue"

export default {
    name: "CustomCard",
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