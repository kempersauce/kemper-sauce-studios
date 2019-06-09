<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
                <router-link v-popover:popover1 class="navbar-brand" to="/presentation">
                    Kemper Sauce Studios
                </router-link>
        </template>
        <template slot="navbar-menu">
            <drop-down tag="li" title="projects" icon="now-ui-icons files_paper" class="nav-item">
                <nav-link class="dropdown-item" to="/sections#projects">
                    <i class="now-ui-icons shopping_box"></i> Arcade of Light
                </nav-link>
            </drop-down>
            <li class="nav-item">
				<nav-link to="/about">
                <a class="nav-link">
                    <p>About Us</p>
                </a>
				</nav-link>
            </li>

        </template>
    </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
