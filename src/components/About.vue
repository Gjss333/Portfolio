<template>
    <section class="flex justify-center gap-52 items-center h-[96vh] mx-[10rem]">
        <div class="tt">
            <h1 class="text-5xl py-5 font-extrabold">Sobre mim</h1>
            <p class="w-[30rem] font-medium text-justify">Sou um apaixonado desenvolvedor web full stack com experiência em PHP, Laravel, Vue.js, React e Node.js. Minha paixão é criar interfaces cativantes e eficientes, combinando habilidades em Bootstrap e Tailwind para designs responsivos e interativos. Tenho experiência em desenvolvimento e manutenção de aplicações e APIs REST, utilizando práticas de TDD e versionamento de código com GIT. Além disso, mantenho-me atualizado com as últimas tecnologias, sempre buscando elevar o padrão do meu trabalho.</p>
            
            <div class="flex justify-center text-center gap-4">

                <div>
                    <font-awesome-icon class="text-3xl" :icon="['fas', 'medal']" />
                    <p class="text-2xl font-bold">Experiência</p>
                    <p>1+ anos</p>
                    <p>Desenvolvedor Web Full Stack</p>

                </div>
                
                <div>
                    <font-awesome-icon class="text-3xl" :icon="['fas', 'user-graduate']" />
                    <p class="text-2xl font-bold">Formação</p>
                    <p>Gestão da Tecnologia da Informação</p>
                    <p>Sistemas para Internet</p>
                </div>
            </div>
            <!-- <button class="bg-white border-2 border-black text-black py-3 px-5 rounded-full hover:bg-black hover:text-white">Download CV</button> -->
        </div>
        <div>
            <img :src="photoAbout" class="shape-bg rounded-full w-80" alt="Gleydson Picture">
        </div>
    </section>
</template>
<script>
export default{
    name: 'About',
    data(){
        return{
            photoAbout: '/img/photo-about.png'
        }
    }
}
</script>
<style scoped>
.shape-bg{
    background-color: #898989;    
}

</style>