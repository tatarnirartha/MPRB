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
                <span v-if="theme === 'light'" @click="changeTheme('dark')" class="navbar-nav clickable col link-light">🌘</span>
                <span v-else @click="changeTheme('light')" class="navbar-nav clickable col link-light">☀️</span>
            </div>
        </div>
    </nav>
</div>
    
    
    
</template>

<script>
import CustomLink from "./CustomLink.vue"
import {mapGetters} from 'vuex'

export default {
    name: 'Navbar',
    components: {
        CustomLink
    },
    computed: {
        ...mapGetters({
            theme: "getTheme"
        })
    },
    methods: {
        changeTheme(data){
            console.log(this.$store)
            this.$store.dispatch('setTheme', data)
        }
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

.clickable{
    cursor: pointer;
}
</style>