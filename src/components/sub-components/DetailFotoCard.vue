<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9 p-3 shadow round">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <custom-image :imgName="$route.params.foto" imgClass="round shadow"/>
                    </div> 
                    <div class="col-12 mt-4">
                        <div class="text-start">
                           
                            <p>
                                {{$route.params.foto}}
                            </p>
                            <p>
                            {{$route.params.desc}}
                            </p> 
                        </div>
                        <div>
                            <custom-button label="Kembali" class="btn-success m-3 btn-round" @btnClick="goBack()"/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import CustomImage from "./CustomImage.vue"
import CustomButton from "./CustomButton.vue"

export default {
    name: "DetailFotoCard",
    components: {
        CustomImage,
        CustomButton
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>