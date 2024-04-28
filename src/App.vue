<template>
  <header>
    <Navigation/>
  </header>

  <section><About/></section>
  <section><Skills/></section>
  <section><Projects/></section>
  <section><Contact/></section>
</template>

<script>
import Navigation from './components/Navigation.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: { Navigation, About, Skills, Projects, Contact }
}
</script>

<style>

</style>
