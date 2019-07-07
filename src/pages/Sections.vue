<template>
    <div class="wrapper">
        <div class="section-space"></div>
        <projects-section></projects-section>
    </div>
</template>
<script>
  import ProjectsSection from './example-pages/Projects'
  export default {
    name: 'sections',
    bodyClass: 'sections-page',
    components: {
      ProjectsSection
    }
  }
</script>
<style>
</style>
