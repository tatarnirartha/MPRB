<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9 p-3 shadow round">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <custom-image imgName="main-min.jpg" imgClass="round shadow" />
                    </div> 
                    <div class="col-12 mt-4">
                        <div class="text-start">
                            <p>
                                Monumen Perjuangan Rakyat Bali atau yang lebih dikenal juga dengan Bajra Sandhi merupakan monumen yang menjadi salah satu ikon Kota Denpasar. Monumen ini terletak di kawasan Niti Mandala Renon, Denpasar. Monumen ini dibangun untuk melestarikan dan meningkatkan kesadaran masyarakat terhadap warisan budaya berupa nilai-nilai kepahlawanan, patriotisme, jiwa persatuan dan kesatuan, cinta tanah air, serta cinta perdamaian yang diharapkan untuk dapat diwariskan kepada penerus bangsa. Monumen ini merupakan ide dari Prof. Dr. Ida Bagus Mantra. Sedangkan desain dari monumen ini didesain oleh Ida Bagus Gede Yadnya. Proses pembangunan dimulai pada tahun 1988 dan pada tahun 2003 monumen ini diresmikan oleh Megawati Soekarno Putri.

                            </p>
                            <p>
                                Monumen ini dikelola oleh UPTD. Monumen Perjuangan Rakyat Bali dibawah Dinas Kebudayaan Provinsi Bali.
                            </p>
                        </div>
                        <div>
                            <custom-button label="Selengkapnya" class="btn-success m-3 btn-round" @btnClick="cardBtnClick('Info')"/>
                        </div>
                        <hr>
                    </div>
                    
                    <div class="col-12 mt-4">
                        <custom-card paragraft="Pada bagian ini anda dapat melihat peta dari Monumen Perjuangan Rakyat Bali" title="Peta" imgSrc="peta-icon-min.jpg" @cardBtnClick="cardBtnClick('Peta')"/>
                    </div>
                    <div class="col-12 mt-3">
                        <custom-card paragraft="Pada bagian ini anda dapat melihat kolesi foto mengenai Monumen Perjuangan Rakyat Bali" title="Galeri Foto" imgSrc="galeri-icon-min.jpg" @cardBtnClick="cardBtnClick('Galeri')"/>    
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import CustomButton from "./CustomButton.vue"
import CustomImage from './CustomImage.vue'
import CustomCard from "./CustomCard.vue"

export default {
    name: "MainCard",
    components: {
        CustomButton,
        CustomImage,
        CustomCard
    },
    methods: {
        cardBtnClick(name){
            this.$router.push({ name: name})
        }
        
    }
}
</script>

<style scoped>


</style>