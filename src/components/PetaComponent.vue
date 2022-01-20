<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <navbar/>    
        </div>
        <div class="col-12 main-card pt-5 pt-lg-0 mb-5">
            <peta-card/>
        </div>
        
    </div>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue"
import PetaCard from "./sub-components/PetaCard.vue"

export default {
    name: "PetaComponent",
    components: {
        Navbar,
        PetaCard
    }
} 

</script>

<style scoped>
.main-card{
    margin-top: 70px;
}
</style>