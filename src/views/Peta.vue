<template>
  <div class="peta">
    <peta-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import PetaComponent from '@/components/PetaComponent.vue'

export default {
  name: 'Home',
  components: {
    PetaComponent
  }
}
</script>

