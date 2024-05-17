<template>
  
    <section class="flex h-[83vh] m-0 mx-[10rem] justify-center items-center gap-[5rem]">
        <div>
            <img class="shape-bg" :src="photoHome" alt="Gleydson José profile picture" height="400" width="400px">
        </div>
        <div class="text-center">
            <p class="text-base text-gray-600 font-semibold">Olá, eu sou</p>
            <h1 class="text-5xl font-extrabold">Gleydson José</h1>
            <p class="text-3xl mt-2 text-gray-600 font-semibold">Frontend Developer</p>

            <div class="flex justify-center mt-4 gap-4 font-bold">
                <button class="bg-white border-2 border-black text-black py-3 px-5 rounded-full hover:bg-black hover:text-white">Download CV</button>
                <button class="bg-black text-white  border-black py-3 px-5 rounded-full hover:bg-gray-800">Contact info.</button>
            </div>

            <div class="flex justify-center mt-4 gap-[1.5rem]">
                <font-awesome-icon 
                    class="text-3xl cursor-pointer"
                    :icon="['fab', 'linkedin']" 
                    @click="getSocialLinks(linkdeinLink)" />
                <font-awesome-icon 
                    class="text-3xl cursor-pointer" 
                    :icon="['fab', 'github']"
                    @click="getSocialLinks(githubLink)" />
            </div>
        </div>
    </section>
   
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    Name: 'Home',
    components: {
    FontAwesomeIcon
  },
    data() {
        return {
            photoHome: '/img/photo-home.png',
            githubLink: 'https://www.github.com/gjss333',
            linkdeinLink: 'https://www.linkedin.com/in/gleydson-jose333'
        }
    },
    methods: {
        getSocialLinks(type){
            const href = type
            window.open(href, '_blank');
        }
    }
}
</script>
<style scoped>
.shape-bg{
    background-color: #8a8a8a;
    border-radius: 30% 70% 56% 44% / 32% 50% 50% 68% ; 
}
</style>
