<template>
    <div class="wrapper">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('img/ks/group-photo.jpg')">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="title">About Us</h1>
                        <h4>Meet the amazing team behind this project and find out more about how we work.</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="about-description text-center">
                <div class="features-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 mr-auto ml-auto">
                                <h2 class="title">Kemper Sauce Studios</h2>
                                <h4 class="description">Kemper Sauce Studios was founded in 2019 by a team of old friends with a shared interest in creating a new and exciting interactive experience. This eclectic collection of professionals from various fields with a common interest in technology and creativity is combining lighting, form, and game design into a brand new installation for Blink!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { Card, Button, Badge, InfoSection, FormGroupInput, Checkbox } from '@/components';
  import { Select, Option } from 'element-ui'

  export default {
    name: 'about-us',
    bodyClass: 'about-us',
    components: {
      Card,
      InfoSection,
      Badge,
      [Button.name]: Button,
      [Checkbox.name]: Checkbox,
      [FormGroupInput.name]: FormGroupInput,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          speciality: ''
        }
      }
    }
  }
</script>
<style>
</style>
