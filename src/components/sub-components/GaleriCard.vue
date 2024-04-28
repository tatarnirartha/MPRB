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
                    nama: "Luar1-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi selatan"
                },
                {
                    nama: "Luar2-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Madya Mandala"
                },
                {
                    nama: "Luar3-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi timur"
                },
                {
                    nama: "Luar4-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi utara"
                },
                {
                    nama: "Luar5-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi barat"
                },
                {
                    nama: "Luar6-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari sisi barat"
                },
                {
                    nama: "Luar7-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar8-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar9-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar10-min.jpg",
                    desc: "Foto Monumen Perjuangan Rakyat Bali dari Nistaning Mandala"
                },
                {
                    nama: "Luar11-min.jpg",
                    desc: "Foto akses masuk untuk penyandang disabilitas"
                },
                {
                    nama: "Luar12-min.jpg",
                    desc: "Foto pagar yang mengelilingi Madya Mandala"
                },
                {
                    nama: "Luar13-min.jpg",
                    desc: "Foto pagar yang mengelilingi Madya Mandala"
                },
                {
                    nama: "Luar14-min.jpg",
                    desc: "Foto jalan setapak di sebelah timur monumen"
                },
                {
                    nama: "Luar15-min.jpg",
                    desc: "Foto jalan setapak di sekeliling monumen"
                },
                {
                    nama: "Luar16-min.jpg",
                    desc: "Foto jalan setapak di sebelah barat monumen"
                },
                {
                    nama: "Luar17-min.jpg",
                    desc: "Foto Tanaman yang menghiasi sekeliling monumen"
                },
                {
                    nama: "Luar18-min.jpg",
                    desc: "Foto bagian sebelah utara monumen yang terdapat lapangan"
                },
                {
                    nama: "Luar19-min.jpg",
                    desc: "Foto jalan masuk utama pada bagian selatan monumen"
                },
                {
                    nama: "Luar20-min.jpg",
                    desc: "Foto jalan beraspal yang ada di sebelah utara monumen, jalan ini melintang dari sisi barat hingga ke timur"
                },
                {
                    nama: "Luar21-min.jpg",
                    desc: "Foto jalan beraspal yang ada di sebelah utara monumen, jalan ini melintang dari sisi barat hingga ke timur"
                },
                {
                    nama: "Luar22-min.jpg",
                    desc: "Foto Patung Padarakan Rumeksa Gardapati (Patung yang Menjaga dan Mengawal Sampai Mati)"
                }
            ],
            fotoDalam: [
                {
                    nama: "Dalam1-min.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam2-min.jpg",
                    desc: "Foto beberapa diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam3-min.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam4-min.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam5-min.jpg",
                    desc: "Foto lorong yang melingkar pada Madyaning Utama Mandala, yang disisi lorongnya terdapat diorama tentang perjuangan rakyat Bali dari masa ke masa"
                },
                {
                    nama: "Dalam6-min.jpg",
                    desc: "Foto tiga buah keris peninggalan bangsawan Bali terdapat pada Madyaning Utama Mandala"
                },
                {
                    nama: "Dalam7-min.jpg",
                    desc: "Foto tangga melingkar untuk naik ke Utamaning Utama Mandala"
                },
                {
                    nama: "Dalam8-min.jpg",
                    desc: "Foto telaga Puter Tasik yang terdapat pada Nistaning Utama Mandala"
                },
                {
                    nama: "Dalam9-min.jpg",
                    desc: "Foto Tiang Agung yang berjumlah 8 buah pada bagian dalam monumen"
                },
                {
                    nama: "Dalam10-min.jpg",
                    desc: "Foto salah satu diorama yang terdapat pada Madyaning Utama Mandala"
                },

                {
                    nama: "Dalam11-min.jpg",
                    desc: "Foto pintu masuk ke dalam monumen"
                },
                {
                    nama: "Dalam12-min.jpg",
                    desc: "Foto lorong yang terdapat pada sisi monumen"
                },
                {
                    nama: "Dalam13-min.jpg",
                    desc: "Foto lorong yang terdapat pada sisi monumen"
                },
                {
                    nama: "Dalam14-min.jpg",
                    desc: "Foto jendala yang terdapat pada monumen"
                },
                {
                    nama: "Dalam15-min.jpg",
                    desc: "Foto sudut langit-lagit monumen"
                },
                {
                    nama: "Dalam16-min.jpg",
                    desc: "Foto pemandangan sebelah utara monumen"
                },
                {
                    nama: "Dalam17-min.jpg",
                    desc: "Foto Kori Agung yang memiliki 17 buah anak tangga"
                },
                {
                    nama: "Dalam18-min.jpg",
                    desc: "Foto telaga yang mengelilingi monumen"
                },
                {
                    nama: "Dalam19-min.jpg",
                    desc: "Foto telaga yang mengelilingi monumen"
                },
                {
                    nama: "Dalam20-min.jpg",
                    desc: "Foto landasan monumen yang terletak pada pinggiran telaga"
                },
                {
                    nama: "Dalam21-min.jpg",
                    desc: "Foto bale bengong yang terdapat pada sudut Madya Mandala"
                },
                {
                    nama: "Dalam22-min.jpg",
                    desc: "Foto Kori Agung"
                },
                {
                    nama: "Dalam23-min.jpg",
                    desc: "Foto suasana Madya Mandala"
                },

                {
                    nama: "Dalam24-min.jpg",
                    desc: "Foto bale bengong yang terdapat pada sudut Madya Mandala"
                },
                {
                    nama: "Dalam25-min.jpg",
                    desc: "Foto bale bengong yang terdapat pada sudut Madya Mandala"
                },
                {
                    nama: "Dalam26-min.jpg",
                    desc: "Foto Kori Agung"
                },
                {
                    nama: "Dalam27-min.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam28-min.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam29-min.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam30-min.jpg",
                    desc: "Foto monumen dari Madya Mandala"
                },
                {
                    nama: "Dalam31-min.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam32-min.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam33-min.jpg",
                    desc: "Foto taman dan jalan setapak yang terdapat pada Madya Mandala"
                },
                {
                    nama: "Dalam34-min.jpg",
                    desc: "Foto tangga melingkar untuk naik ke Utamaning Utama Mandala"
                },      
            ],
            fotoAtas: [
                {
                    nama: "Atas1-min.jpg",
                    desc: "Foto jendela pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas2-min.jpg",
                    desc: "Foto ruangan pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas3-min.jpg",
                    desc: "Foto ruangan pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas4-min.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah utara pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas5-min.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah barat pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas6-min.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah selatan pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas7-min.jpg",
                    desc: "Foto pemandangan Kota Denpasar arah timur pada Utamaning Utama Mandala"
                },
                {
                    nama: "Atas8-min.jpg",
                    desc: "Foto langit-langit Utamaning Utama Mandala"
                },
                {
                    nama: "Atas9-min.jpg",
                    desc: "Foto langit-langit Utamaning Utama Mandala"
                },
                {
                    nama: "Atas10-min.jpg",
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