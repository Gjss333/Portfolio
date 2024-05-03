<template>
  <header>
    <Navigation/>
  </header>

  <Home/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: { Navigation, About, Skills, Projects, Contact, Home }
}
</script>

<style>

#app{
  font-family: 'Poppins', sans-serif ;
}

</style>