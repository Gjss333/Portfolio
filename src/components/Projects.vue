<template>
    <section class="flex flex-col gap-10 justify-center items-center h-[96vh]">
        <h1 class="text-5xl font-black">Projetos</h1>

        <div class="flex flex-wrap justify-center items-center gap-4 ">
            <div class="shadow-lg rounded-b-md" v-for="(project, index) in projects" :key="index">  
                    <div class="flex justify-center items-center w-[25rem] h-[11.9rem] relative shadow-lg rounded-md">
                        <div class="w-full  bg-red-300 absolute top-0 rounded-t-md">
                            <img class="rounded-t-md" :src="project.srcImg" alt="ilustração dos projetos">
                            <!-- <p class="text-xl font-bold text-white">{{ project.name }}</p> -->
                        </div>
                        
                    </div>
                    <div class="w-full relative h-2 absolute bottom-0 bg-gray-600  rounded-b-md">
                    </div>
                </div>
        </div>
    </section>
</template>
<script>
export default{
    name: 'Projects',
    data(){
        return{
            pathImage: '',
            projects: [
                
                { name: 'projeto2', srcImg: '/img/projects/datanow.png', github: '', deploy: '' },
                { name: 'projeto2', srcImg: '/img/projects/libras.png', github: '', deploy: '' },
                { name: 'projeto2', srcImg: '/img/projects/datanow.png', github: '', deploy: '' },
            ]
        }
    },
    
}
</script>

<style scoped>
.text1{
    display: flex;
    width: 400px;
    height: 250px;
    background-color: #ccc;
    position: relative;
}

.text2{
    width: 100%;
    height: 5px;
    background-color: #000;
    bottom: 0;
    position: absolute  ;
}

</style>