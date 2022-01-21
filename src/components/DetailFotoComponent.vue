<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <navbar/>    
        </div>
        <div class="col-12 main-card pt-5 pt-lg-0 mb-5">
            <detail-foto-card/>
        </div>
        
    </div>
</template>

<script>
import Navbar from "./sub-components/Navbar.vue"
import DetailFotoCard from "./sub-components/DetailFotoCard.vue"

export default {
    name: "DetailFotoComponent",
    components: {
        Navbar,
        DetailFotoCard
    }
}
</script>

<style scoped>
.main-card{
    margin-top: 70px;
}
</style>