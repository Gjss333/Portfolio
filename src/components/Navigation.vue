<template>
    <nav>
        <h1 class="text-3xl">Gleydson José</h1>

        <ul>
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