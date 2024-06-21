<template>
    <section class="flex justify-center gap-10 items-center h-[80vh] flex-col mx-[10rem]">
        <div>
            <h1 class="text-5xl text-center py-5 font-extrabold">Habilidades</h1>
        </div>
        <div class="flex max-w-[60rem] flex-wrap gap-5">
            <div 
                class="flex flex-col justify-center items-center w-28  border-2 border-gray-300 p-4 rounded-md"
                v-for="(tech, index) in technologys" :key="index"
            >
            <img :src="tech.src" alt=""  class="h-10 w-11 mb-2">
                <p class="flex-end text-xl text-center italic">{{tech.name}}</p>
            </div>
            
        </div>
    </section>
</template>
<script>
export default{
    name: 'Skills',
    data(){
        return{
            technologys: [
                { name: 'HTML', src: '/img/language-icon/html-icon.png'},
                { name: 'CSS', src: '/img/language-icon/css-icon.png'},
                { name: 'Javascript', src: '/img/language-icon/javascript-icon.png'},
                { name: 'Vue.js', src: '/img/language-icon/vue-icon.png'},
                { name: 'React.js', src: '/img/language-icon/react-icon.png'},
                { name: 'Node.js', src: '/img/language-icon/node-icon.png'},
                { name: 'PHP', src: '/img/language-icon/php-icon.png'},
                { name: 'Laravel', src: '/img/language-icon/laravel-icon.png'},
                { name: 'MySQL', src: '/img/language-icon/mysql-icon.png'},
                { name: 'Bootstrap', src: '/img/language-icon/bootstrap-icon.png'},
                { name: 'Tailwind', src: '/img/language-icon/tailwind-icon.png'},
                { name: 'Git', src: '/img/language-icon/git-icon.png'},
                { name: 'Figma', src: '/img/language-icon/figma-icon.png'},
                { name: 'Azure', src: '/img/language-icon/azure-icon.png'},
            ]
        }
    }
}
</script>