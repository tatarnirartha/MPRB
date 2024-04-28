<template>
<div>
    <nav class="navbar navbar-dark fixed-top m-0 m-lg-2 shadow" >
        <div class="container-fluid col-11 col-lg-11 justify-content-lg-between justify-content-center">
            <div class="">
                <custom-link linkClass="navbar-brand" linkStyle="font-weight: bold;" label="Monumen Perjuangan Rakyat Bali"/>
            </div>
            <div align="right" class="row">
                <router-link class="navbar-nav col link-light" :to="{ name: 'Home'}">Home</router-link>
                <router-link class="navbar-nav col link-light" :to="{ name: 'Peta'}">Peta</router-link>
                <router-link class="navbar-nav col link-light" :to="{ name: 'Galeri'}">Galeri</router-link>
            </div>
        </div>
    </nav>
</div>
    
    
    
</template>

<script>
import CustomLink from "./CustomLink.vue"

export default {
    name: 'Navbar',
    components: {
        CustomLink
    }
}
</script>

<style scoped>
.navbar-nav{
    text-decoration: none;
}

.navbar{
    border-radius: 10px;
    background: olive;
}
</style>