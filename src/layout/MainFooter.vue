<template>
<footer class="footer" data-background-color="black">
                <div class="container">
                    <router-link to="/" class="footer-brand">
                        Kemper Sauce Studios
                    </router-link>
                    <ul class="pull-center">
                        <li>
                            <router-link to="/blog">
                                Blog
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about">
                                About Us
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact">
                                Contact Us
                            </router-link>
                        </li>
                    </ul>
                    <ul class="social-buttons pull-right">
                        <li>
                            <a href="https://www.facebook.com" target="_blank"
                               class="btn btn-icon btn-neutral btn-link">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kempersaucestudios" target="_blank"
                               class="btn btn-icon btn-neutral btn-link">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
    <!-- <footer class="footer " data-background-color="black">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>About Us</h5>
                            <ul class="links-vertical">
                                <li>
                                    <router-link to="/blog" class="text-muted">
                                        Blog
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/about" class="text-muted">
                                        About Us
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/contact" class="text-muted">
                                        Contact Us
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        
                        
                        <div class="col-md-2">
                            
                        </div>
                        
                        <div class="col-md-4">
                            <h5>Follow Us</h5>
                            <ul class="social-buttons">
                                <li>
                                    <a href="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-round">
                                        <i class="fab fa-facebook-square"></i>
                                    </a>
                                    &nbsp;
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/kempersaucestudios" target="_blank" class="btn btn-icon btn-neutral btn-instagram btn-round">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    &nbsp;
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="copyright">
                    Copyright &copy;
                    {{year}} Kemper Sauce Studios All Rights Reserved.
                </div>
            </div>
        </footer> -->
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
