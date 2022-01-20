<template>
<div>
    <nav class="navbar navbar-dark fixed-top m-0 m-lg-2 shadow" >
        <div class="container-fluid col-11 col-lg-11 justify-content-lg-between justify-content-center">
            <div class="">
                <custom-link linkClass="navbar-brand" linkStyle="font-weight: bold;" label="Monumen Perjuangan Rakyat Bali" link="/"/>
            </div>
            <div align="right" class="row">
                <custom-link linkClass="navbar-nav col link-light" label="Home" link="/"/>
                <custom-link linkClass="navbar-nav col link-light" label="Peta" link="/peta"/>
                <custom-link linkClass="navbar-nav col link-light" label="Galeri" link="/galeri"/>
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
    }, methods: {
        navClick(name){
            this.$emit('navClick', name);
        }
    }
}
</script>

<style scoped>


.navbar{
    border-radius: 10px;
    background: olive;
}
</style>