<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9 p-3 shadow round">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h1>Galeri Foto</h1>
                        <hr>
                    </div> 
                    <h4 class="text-start">Foto Dari Luar Monumen</h4>
                    <div class="col-12 col-lg-4 mt-3" v-for="(foto, index) in fotoLuar" :key="'A' + index">
                        <custom-card-1 :title="cardText(index + 1, 'Foto Luar ')" :imgSrc="foto.nama" @cardBtnClick="goDetail(foto.nama, foto.desc)"/>
                    </div> 
                    <hr class="mt-5">
                    <h4 class="text-start">Foto Dari Dalam Monumen</h4>
                    <div class="col-12 col-lg-4 mt-3" v-for="(foto, index) in fotoDalam" :key="'B' + index">
                        <custom-card-1 :title="cardText(index + 1, 'Foto Dalam ')" :imgSrc="foto.nama" @cardBtnClick="goDetail(foto.nama, foto.desc)"/>
                    </div> 
                    <hr class="mt-5">
                    <h4 class="text-start">Foto Dari Atas Monumen</h4>
                    <div class="col-12 col-lg-4 mt-3" v-for="(foto, index) in fotoAtas" :key="'C' + index">
                        <custom-card-1 :title="cardText(index + 1, 'Foto dari Atas ')" :imgSrc="foto.nama" @cardBtnClick="goDetail(foto.nama, foto.desc)"/>
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
                {
                    nama: "Luar1.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi selatan"
                },
                {
                    nama: "Luar2.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Madya Mandala"
                },
                {
                    nama: "Luar3.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi timur"
                },
                {
                    nama: "Luar4.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi utara"
                },
                {
                    nama: "Luar5.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi barat"
                },
                {
                    nama: "Luar6.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi barat"
                },
                {
                    nama: "Luar7.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar8.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar9.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar10.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar11.jpg",
                    desc: "Foto akses masuk untuk penyandang disabilitas"
                },
                {
                    nama: "Luar12.jpg",
                    desc: "Foto pagar yang mengelilingi Madya Mandala"
                },
                {
                    nama: "Luar13.jpg",
                    desc: "Foto pagar yang mengelilingi Madya Mandala"
                },
                {
                    nama: "Luar14.jpg",
                    desc: "Foto jalan setapak di sebelah timur monumen"
                },
                {
                    nama: "Luar15.jpg",
                    desc: "Foto jalan setapak di sekeliling monumen"
                },
                {
                    nama: "Luar16.jpg",
                    desc: "Foto jalan setapak di sebelah barat monumen"
                },
                {
                    nama: "Luar17.jpg",
                    desc: "Foto Tanaman yang menghiasi sekeliling monumen"
                },
                {
                    nama: "Luar18.jpg",
                    desc: "Foto bagian sebelah utara monumen yang terdapat lapangan"
                },
                {
                    nama: "Luar19.jpg",
                    desc: "Foto jalan masuk utama pada bagian selatan monumen"
                },
                {
                    nama: "Luar20.jpg",
                    desc: "Foto jalan beraspal yang ada di sebelah utara monumen, jalan ini melintang dari sisi barat hingga ke timur"
                },
                {
                    nama: "Luar21.jpg",
                    desc: "Foto jalan beraspal yang ada di sebelah utara monumen, jalan ini melintang dari sisi barat hingga ke timur"
                },
                {
                    nama: "Luar22.jpg",
                    desc: "Foto Patung Padarakan Rumeksa Gardapati (Patung yang Menjaga dan Mengawal Sampai Mati)"
                }
            ],
            fotoDalam: [
                {
                    nama: "Dalam1.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam2.jpg",
                    desc: "Foto beberapa diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam3.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam4.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam5.jpg",
                    desc: "Foto lorong yang melingkar pada Madyaning Utama Mandala, yang disisi lorongnya terdapat diorama tentang perjuangan rakyat Bali dari masa ke masa"
                },
                {
                    nama: "Dalam6.jpg",
                    desc: "Foto tiga buah keris peninggalan bangsawan Bali terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam7.jpg",
                    desc: "Foto tangga melingkar untuk naik ke Utamaning Utama Mandala"
                },
                {
                    nama: "Dalam8.jpg",
                    desc: "Foto telaga Puter Tasik yang terdapat pada Nistaning Utama Mandala"
                },
                {
                    nama: "Dalam9.jpg",
                    desc: "Foto Tiang Agung yang berjumlah 8 buah pada bagian dalam monumen"
                },
                {
                    nama: "Dalam10.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },

                {
                    nama: "Dalam11.jpg",
                    desc: "Foto pintu masuk ke dalam monumen"
                },
                {
                    nama: "Dalam12.jpg",
                    desc: "Foto lorong yang terdapat pada sisi monumen"
                },
                {
                    nama: "Dalam13.jpg",
                    desc: "Foto lorong yang terdapat pada sisi monumen"
                },
                {
                    nama: "Dalam14.jpg",
                    desc: "Foto jendala yang terdapat pada monumen"
                },
                {
                    nama: "Dalam15.jpg",
                    desc: "Foto sudut langit-lagit monumen"
                },
                {
                    nama: "Dalam16.jpg",
                    desc: "Foto pemandangan sebelah utara monumen"
                },
                {
                    nama: "Dalam17.jpg",
                    desc: "Foto Kori Agung yang memiliki 17 buah anak tangga"
                },
                {
                    nama: "Dalam18.jpg",
                    desc: "Foto telaga yang mengelilingi monumen"
                },
                {
                    nama: "Dalam19.jpg",
                    desc: "Foto telaga yang mengelilingi monumen"
                },
                {
                    nama: "Dalam20.jpg",
                    desc: "Foto landasan monumen yang terletak pada pinggiran telaga"
                },
                {
                    nama: "Dalam21.jpg",
                    desc: "Foto bale bengong yang terdapat pada sudut Madya Mandala"
                },
                {
                    nama: "Dalam22.jpg",
                    desc: "Foto Kori Agung"
                },
                {
                    nama: "Dalam23.jpg",
                    desc: "Foto suasana Madya Mandala"
                },

                {
                    nama: "Dalam24.jpg",
                    desc: "Foto bale bengong yang terdapat pada sudut Madya Mandala"
                },
                {
                    nama: "Dalam25.jpg",
                    desc: "Foto bale bengong yang terdapat pada sudut Madya Mandala"
                },
                {
                    nama: "Dalam26.jpg",
                    desc: "Foto Kori Agung"
                },
                {
                    nama: "Dalam27.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam28.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam29.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam30.jpg",
                    desc: "Foto monumen dari Madya Mandala"
                },
                {
                    nama: "Dalam31.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam32.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam33.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam34.jpg",
                    desc: "Foto tangga melingkar untuk naik ke Utamaning Utama Mandala"
                },      
            ],
            fotoAtas: [
                {
                    nama: "Atas1.jpg",
                    desc: "Foto jendela pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas2.jpg",
                    desc: "Foto ruangan pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas3.jpg",
                    desc: "Foto ruangan pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas4.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah utara pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas5.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah barat pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas6.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah selatan pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas7.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah timur pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas8.jpg",
                    desc: "Foto langit-langit Utamaning Utama Mandala"
                },
                {
                    nama: "Atas9.jpg",
                    desc: "Foto langit-langit Utamaning Utama Mandala"
                },
                {
                    nama: "Atas10.jpg",
                    desc: "Foto tangga melingkar dari Utamaning Utama Mandala"
                },
            ]
        }
    },
    methods: {
        cardText(index, text){
            return text + index
        },
        goDetail(foto, desc){
            this.$router.push({ name: "Detail", params: {foto: foto, desc: desc}})
        }
    }
}

</script>