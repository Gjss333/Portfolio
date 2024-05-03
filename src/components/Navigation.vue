<template>
    <nav class="flex justify-around items-center h-[17vh]">
        <h1 class="text-3xl">Logo</h1>

        <ul class="flex gap-[2rem] text-2xl">
            <li v-for="(nav, index) in nameNavigation" :key="index">{{ nav }}</li>
        </ul>
    </nav>
</template>
<script>
export default{
    name: 'Navigation',
    data() {
        return {
            nameNavigation: ['Sobre', 'Habilidades', 'Projetos', 'Contato']
        }
    }
}
</script>