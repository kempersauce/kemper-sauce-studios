<template>
    <div class="wrapper contact-page">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('img/ks/led-strips.gif')">
            </parallax>
        </div>

        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ml-auto mr-auto">
                            <h2 class="title">Send us a message</h2>
                            <p class="description">You can contact us with anything related to our Products. We'll get
                                in touch with you as soon as possible.
                                <br>
                                <br>
                            </p>
                            <form role="form" id="contact-form" method="post">
                                <label>Your name</label>
                                <fg-input
                                        placeholder="Your Name..."
                                        v-model="form.firstName"
                                        addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>

                                <label>Email address</label>
                                <fg-input
                                        placeholder="Email Here..."
                                        v-model="form.email"
                                        addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>
                                <label>Phone</label>

                                <fg-input
                                        placeholder="Number Here..."
                                        v-model="form.phone"
                                        addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <div class="form-group">
                                    <label>Your message</label>
                                    <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                                </div>
                                <div class="submit text-center">
                                    <n-button type="primary" round>Contact Us</n-button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5 ml-auto mr-auto">
                            <info-section type="primary"
                                          class="mt-5"
                                          icon="now-ui-icons location_pin">
                                <h4 class="info-title">Find us at the office</h4>
                                <p> Bld Mihail Kogalniceanu, nr. 8,
                                    <br> 7652 Bucharest,
                                    <br> Romania
                                </p>
                            </info-section>

                            <info-section type="primary"
                                          icon="now-ui-icons tech_mobile">
                                <h4 class="info-title">Give us a ring</h4>
                                <p> Michael Jordan
                                    <br> +40 762 321 762
                                    <br> Mon - Fri, 8:00-22:00
                                </p>
                            </info-section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { Button, InfoSection, FormGroupInput } from '@/components';
  export default {
    name: 'contact-us',
    bodyClass: 'contact-page',
    components: {
      InfoSection,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          phone: ''
        },        
      }
    }
  }
</script>
<style>
</style>
