import Presentation from "./pages/Presentation.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import About from "./pages/example-pages/AboutUs.vue";
import BlogPost from "./pages/example-pages/BlogPost.vue";
import BlogPosts from "./pages/example-pages/BlogPosts.vue";
import Sections from "./pages/Sections.vue";
import Projects from "./pages/example-pages/Projects.vue";
import ContactUs from "./pages/example-pages/ContactUs.vue";

const router = [
    {
      path: "/",
      name: "presentation",
      components: {default: Presentation, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 500}}
    },
    {
      path: "/about",
      name: "about",
      components: {default: About, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/blog",
      name: "blog",
      components: {default: BlogPosts, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/contact",
      name: "contact",
      components: {default: ContactUs, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: '/projects',
      name: 'projects',
      components: {default: Projects, header: MainNavbar, footer: MainFooter}
    }
  ]

export default router;