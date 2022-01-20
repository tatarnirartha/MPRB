<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9 p-3 shadow round">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <custom-image imgName="main.jpg" imgClass="round shadow" />
                    </div> 
                    <div class="col-12 mt-4">
                        <div class="text-start">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque eum laudantium fuga. Repudiandae neque, facilis illum tenetur dolore quidem facere enim, quos rem aspernatur eaque fugiat! Numquam, quos unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident, mollitia odit accusantium totam nostrum atque reprehenderit ratione vel nihil ducimus, porro deleniti magni soluta autem. Sunt expedita dolores ratione? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, tempora et! Quaerat quibusdam quasi dolores perspiciatis reprehenderit, necessitatibus nesciunt? Porro impedit dolor pariatur eius ratione laboriosam nesciunt nulla officia sunt.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi provident ipsa quas, in distinctio fugit delectus sit totam rem alias cupiditate a modi porro. Est facere quasi asperiores magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi quaerat eos vitae assumenda et, voluptatum repellat saepe totam voluptates quas culpa illum dicta hic consequatur quis aperiam soluta incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in tempore. Dolores voluptates veniam quod excepturi vitae amet culpa, commodi expedita a. Qui adipisci iure nesciunt accusamus. Soluta, sapiente vero.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni possimus necessitatibus illo voluptatibus veritatis ab nesciunt, numquam praesentium error vero ea, sed, sunt eos nemo? Deserunt totam reprehenderit omnis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur corporis, quos excepturi vitae ratione neque, qui natus nobis tempora necessitatibus. Natus voluptate nihil rem dicta illo hic nam corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat ullam amet libero! Soluta esse repellat tempore ratione. Perspiciatis consectetur sed laudantium itaque facilis officiis in soluta nostrum vitae tenetur.
                            </p>
                        </div>
                        <div>
                            <custom-button label="Selengkapnya" class="btn-success m-3 btn-round"/>
                        </div>
                        <hr>
                    </div>
                    
                    <div class="col-12 mt-4">
                        <custom-card paragraft="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni possimus necessitatibus illo voluptatibus veritatis ab nesciunt, numquam praesentium error vero ea, sed, sunt eos nemo? Deserunt totam reprehenderit omnis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur corporis, quos excepturi vitae ratione neque, qui natus nobis tempora necessitatibus. Natus voluptate nihil rem dicta illo hic nam corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat ullam amet libero! Soluta esse repellat tempore ratione. Perspiciatis consectetur sed laudantium itaque facilis officiis in soluta nostrum vitae tenetur." title="Peta" imgSrc="main.jpg" @cardBtnClick="cardBtnClick('Peta')"/>
                    </div>
                    <div class="col-12 mt-3">
                        <custom-card paragraft="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni possimus necessitatibus illo voluptatibus veritatis ab nesciunt, numquam praesentium error vero ea, sed, sunt eos nemo? Deserunt totam reprehenderit omnis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur corporis, quos excepturi vitae ratione neque, qui natus nobis tempora necessitatibus. Natus voluptate nihil rem dicta illo hic nam corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellat ullam amet libero! Soluta esse repellat tempore ratione. Perspiciatis consectetur sed laudantium itaque facilis officiis in soluta nostrum vitae tenetur." title="Galeri Foto" imgSrc="main.jpg" @cardBtnClick="cardBtnClick('Galeri')"/>    
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