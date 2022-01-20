<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9 p-3 shadow round">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h1>Galeri Foto</h1>
                        <hr>
                    </div> 
                    <h4 class="text-start">Foto Dari Luar Monumen</h4>
                    <div class="col-12 col-lg-4 mt-3" v-for="(foto, index) in fotoLuar" :key="index">
                        <custom-card-1 :title="cardText(index + 1, 'Foto Luar ')" :imgSrc="foto"/>
                    </div> 
                    <hr class="mt-5">
                    <h4 class="text-start">Foto Dari Dalam Monumen</h4>
                    <div class="col-12 col-lg-4 mt-3" v-for="(foto, index) in fotoDalam" :key="index">
                        <custom-card-1 :title="cardText(index + 1, 'Foto Dalam ')" :imgSrc="foto"/>
                    </div> 
                    <hr class="mt-5">
                    <h4 class="text-start">Foto Dari Atas Monumen</h4>
                    <div class="col-12 col-lg-4 mt-3" v-for="(foto, index) in fotoAtas" :key="index">
                        <custom-card-1 :title="cardText(index + 1, 'Foto dari Atas ')" :imgSrc="foto"/>
                    </div>                 
                    
                </div>
            </div>
    </div>
</template>

<script>
import CustomCard1 from "./CustomCard1.vue"

export default {
    name: "GaleriCard",
    components: {
        CustomCard1
    },
    data: function(){
        return {
            fotoLuar: [
                "Luar1.jpg",
                "Luar2.jpg",
                "Luar3.jpg",
                "Luar4.jpg",
                "Luar5.jpg",
                "Luar6.jpg",
                "Luar7.jpg",
                "Luar8.jpg",
                "Luar9.jpg",
                "Luar10.jpg",
                "Luar11.jpg",
                "Luar12.jpg",
                "Luar13.jpg",
                "Luar14.jpg",
                "Luar15.jpg",
                "Luar16.jpg",
                "Luar17.jpg",
                "Luar18.jpg",
                "Luar19.jpg",
                "Luar20.jpg",
                "Luar21.jpg",
                "Luar22.jpg"
            ],
            fotoDalam: [
                "Dalam1.jpg",
                "Dalam2.jpg",
                "Dalam3.jpg",
                "Dalam4.jpg",
                "Dalam5.jpg",
                "Dalam6.jpg",
                "Dalam7.jpg",
                "Dalam8.jpg",
                "Dalam9.jpg",
                "Dalam10.jpg",
                "Dalam11.jpg",
                "Dalam12.jpg",
                "Dalam13.jpg",
                "Dalam14.jpg",
                "Dalam15.jpg",
                "Dalam16.jpg",
                "Dalam17.jpg",
                "Dalam18.jpg",
                "Dalam19.jpg",
                "Dalam20.jpg",
                "Dalam21.jpg",
                "Dalam22.jpg",
                "Dalam23.jpg",
                "Dalam24.jpg",
                "Dalam25.jpg",
                "Dalam26.jpg",
                "Dalam27.jpg",
                "Dalam28.jpg",
                "Dalam29.jpg",
                "Dalam30.jpg",
                "Dalam31.jpg",
                "Dalam32.jpg",
                "Dalam33.jpg"           
            ],
            fotoAtas: [
                "Atas1.jpg",
                "Atas2.jpg",
                "Atas3.jpg",
                "Atas4.jpg",
                "Atas5.jpg",
                "Atas6.jpg",
                "Atas7.jpg",
                "Atas8.jpg",
                "Atas9.jpg",
                "Atas10.jpg"
            ]
        }
    },
    methods: {
        cardText(index, text){
            return text + index
        }
    }
}

</script>