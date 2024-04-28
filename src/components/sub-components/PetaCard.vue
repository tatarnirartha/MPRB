<template>
    <div class="row justify-content-center">
        <div class="col-12 col-lg-9 p-3 shadow round">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h1>Peta Monumen Perjuangan Rakyat Bali</h1>
                        <hr>
                    </div>
                    <div class="col-12">
                        <custom-image imgName="peta-luar-min.jpg" imgClass="round shadow" />
                        <h4 class="text-start mt-4">Keterangan:</h4>
                        <ul class="text-start">
                            <li>1: Parkir Barat</li>
                            <li>2: Parkir Timur</li>
                            <li>3: Toilet Umum 1</li>
                            <li>4: Toilet Umum 2</li>
                            <li>5: Monumen Perjuangan Rakyat Bali</li>
                            <li>6: 3D Museum & Upside Down</li>
                        </ul>
                    </div>                
                </div>
            </div>
    </div>
</template>

<script>
import CustomImage from "./CustomImage.vue"

export default {
    name: "PetaCard",
    components: {
        CustomImage
    }
}
</script>