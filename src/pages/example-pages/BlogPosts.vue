<template>
    <div class="wrapper blog-posts">
        <div class="page-header page-header-small">
            <parallax class="page-header-image" style="background-image: url('img/ks/skyline.jpg') ;">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">A Place for Entrepreneurs to Share and Discover New Stories</h2>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="main">
            <div class="container">
                <div class="section">
                    <h3 class="title text-center">Our Recent Blog Posts</h3>
                    <br/>
                    <div class="row">
                        <div class="col-md-4">
                            <card type="blog" plain>
                                <img slot="image" class="img rounded img-raised" src="img/bg5.jpg"/>
                                <h6 class="category text-info">Enterprise</h6>
                                <h4 class="card-title">
                                    <a href="#pablo">Autodesk looks to future of 3D printing with Project Escher</a>
                                </h4>
                                <p class="card-description">
                                    Like so many organizations these days, Autodesk is a company in transition. It
                                    was until recently a traditional boxed software company selling licenses.
                                    <a href="#pablo"> Read More </a>
                                </p>
                                
                            </card>
                        </div>
                        <div class="col-md-4">
                            <card type="blog" plain>
                                <img slot="image" class="img rounded img-raised" src="img/bg27.jpg"/>
                                <h6 class="category text-success">
                                    Startups
                                </h6>
                                <h4 class="card-title">
                                    <a href="#pablo">Lyft launching cross-platform service this week</a>
                                </h4>
                                <p class="card-description">
                                    Like so many organizations these days, Autodesk is a company in transition. It was
                                    until recently a traditional boxed software company selling licenses.
                                    <a href="#pablo"> Read More </a>
                                </p>
                                
                            </card>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-plain card-blog">
                                <div class="card-image">
                                    <a href="#pablo">
                                        <img class="img rounded img-raised" src="img/bg21.jpg"/>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h6 class="category text-danger">
                                        <i class="now-ui-icons media-2_sound-wave"></i> Enterprise
                                    </h6>
                                    <h4 class="card-title">
                                        <a href="#pablo">6 insights into the French Fashion landscape</a>
                                    </h4>
                                    <p class="card-description">
                                        Like so many organizations these days, Autodesk is a company in transition. It
                                        was until recently a traditional boxed software company selling licenses.
                                        <a href="#pablo"> Read More </a>
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
  import { Card, Button, FormGroupInput } from '@/components';

  export default {
    name: 'blog-posts',
    bodyClass: 'blog-posts',
    components: {
      Card,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    data() {
      return {
        year: new Date().getFullYear()
      }
    },
  }
</script>
<style>
</style>
