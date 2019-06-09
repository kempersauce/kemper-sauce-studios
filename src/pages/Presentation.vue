<template>
    <div class="wrapper presentation-page">
        <div class="page-header clear-filter">
            <div class="rellax-header rellax-header-sky">
                <parallax class="page-header-image"
                         style="background-image: url('img/ks/burger.jpg')">
                </parallax>
            </div>
            <div class="rellax-header rellax-header-buildings" data-rellax-speed="0">
                <parallax class="page-header-image page-header-city"
                     style="background-image: url('img/presentation-page/nuk-pro-buildings.png')">
                </parallax>
            </div>
            <div class="rellax-text-container rellax-text">
                <h1 class="h1-seo" data-rellax-speed="-2" style="font-size: 6em; letter-spacing: -8px;">Kemper Sauce Studios</h1>
            </div>
        </div>
    </div>
</template>

<script>
  import { Card, InfoSection } from '@/components';
  import { Carousel, CarouselItem, Tooltip } from 'element-ui'

  export default {
    name: 'presentation',
    bodyClass: 'presentation-page',
    components: {
      Card,
      InfoSection,
      [Carousel.name]: Carousel,
      [CarouselItem.name]: CarouselItem,
      [Tooltip.name]: Tooltip
    },
  }
</script>

<style scoped lang="scss">
    .github-buttons {
        display: flex;
        align-content: center;
    }
</style>
