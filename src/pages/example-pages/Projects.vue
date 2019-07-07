<template>
    <div class="cd-section" id="projects">
        <!--     *********    PROJECTS 1     *********      -->
        
        <div class="projects-1">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 px-0">
                        <card type="background" class="card-background-product card-no-shadow"
                              style="background-image: url('img/ks/led-strips.gif')">
                              
                            <h6 class="category">Blink 2019</h6>
                            <h3 class="card-title">
                                Arcade Of Light
                            </h3>
                            <p class="card-description">
                                Coming Soon To Cincinnati!
                            </p>
                        </card>
                    </div>
                </div>
            </div>
        </div>
        <!--     *********    END PROJECTS 1      *********      -->
	</div>
</template>
<script>
  import { Card, InfoSection,  Badge, Button, Tabs, TabPane } from '@/components';
  export default {
    name: 'projects',
    bodyClass: 'about-us',
    components: {
      Card,
      Tabs,
      TabPane,
      Badge,
      InfoSection,
      [Button.name]: Button
    }
  }
</script>
<style>
</style>