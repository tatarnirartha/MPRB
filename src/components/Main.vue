<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <navbar/>    
        </div>
        <div class="col-12 main-card pt-5 pt-lg-0 mb-5">
            <main-card/>
        </div>
        
    </div>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue"
import MainCard from "./sub-components/MainCard.vue"

export default {
    name: "Main",
    components: {
        Navbar,
        MainCard
    }    
} 

</script>

<style scoped>
.main-card{
    margin-top: 70px;
}
</style>