<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <navbar/>    
        </div>
        <div class="col-12 mt-5 pt-5 pt-lg-0">
            <custom-button label="sAiya Button" class="btn-success"/>
            <custom-link label="ini link"  link="https://google.com"/>
            <div class="row">
                <div class="col-12">
                    <custom-image imgName="main.jpg" imgClass="img-fluid"/>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue"
import CustomButton from "./sub-components/CustomButton.vue"
import CustomLink from"./sub-components/CustomLink.vue"
import CustomImage from './sub-components/CustomImage.vue'

export default {
    name: "Home",
    components: {
        Navbar,
        CustomButton,
        CustomLink,
        CustomImage
    }
} 

</script>

<style scoped>

</style>