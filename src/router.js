import Presentation from "./pages/Presentation.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import About from "./pages/example-pages/AboutUs.vue";
import BlogPost from "./pages/example-pages/BlogPost.vue";
import BlogPosts from "./pages/example-pages/BlogPosts.vue";
import Sections from "./pages/Sections.vue";
import Projects from './pages/sections/Projects.vue';

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
      path: "/blog-post",
      name: "blog-post",
      components: {default: BlogPost, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/blog-posts",
      name: "blog-posts",
      components: {default: BlogPosts, header: MainNavbar},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/sections",
      name: "sections",
      components: {default: Sections, header: MainNavbar, footer: MainFooter},
      props: {
        footer: {backgroundColor: 'gray'},
        header: {colorOnScroll: 0}
      }
    },
    {
      path: '/projects/arcadeoflight',
      name: 'arcadeoflight',
      components: {default: Projects, header: MainNavbar, footer: MainFooter}
    }
  ]

export default router;
