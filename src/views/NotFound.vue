<template>
    <div class="not-found">
        <not-found-component/>
    </div>
</template>
<script>
import NotFoundComponent from '@/components/NotFoundComponent.vue'

export default {
    name: "NotFound",
    components: {
        NotFoundComponent
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>