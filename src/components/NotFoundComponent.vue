<template>
    <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-11 col-lg-6 border-0 shadow round p-5">
                <h1>404 | Not Found</h1>
                <custom-button label="Go Back" btnClass="btn-success btn-round mt-4" @btnClick="goBack"/>

                
        </div>
        
    </div>
</template>
<script>
import CustomButton from "./sub-components/CustomButton.vue"

export default {
    name: "NotFoundComponent",
    components: {
        CustomButton
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>