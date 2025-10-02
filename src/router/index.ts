import { createRouter, createWebHistory } from 'vue-router'
// Lazy-load home as well for consistency
// Note: Home is frequently visited; keep as static import if SSR is needed
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Parth Knowledge Network — MKCL Training Partner',
        description:
          'Parth Knowledge Network Pvt. Ltd. is an MKCL Training Partner helping Authorized Learning Centers deliver MS-CIT and KLiC programs with comprehensive support.',
        canonical: 'https://www.parthinfo.com/'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About — Parth Knowledge Network',
        description:
          'Learn about Parth Knowledge Network Pvt. Ltd., a leading MKCL Training Partner empowering digital literacy and skill development.',
        canonical: 'https://www.parthinfo.com/about'
      }
    },
    {
      path: '/learn-more',
      name: 'learn-more',
      component: () => import('../views/LearnMoreView.vue'),
      meta: {
        title: 'Learn More — Parth Knowledge Network',
        description:
          'Discover more about partnering with Parth Knowledge Network for MKCL programs and support.',
        canonical: 'https://www.parthinfo.com/learn-more'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Services — Parth Knowledge Network',
        description:
          'Comprehensive training and support solutions for MKCL Authorized Learning Centers: MS-CIT, KLiC, and more.',
        canonical: 'https://www.parthinfo.com/services'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact — Parth Knowledge Network',
        description:
          'Get in touch with Parth Knowledge Network for MKCL partnership, support, and inquiries.',
        canonical: 'https://www.parthinfo.com/contact'
      }
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: () => import('../views/GetStartedView.vue'),
      meta: {
        title: 'Get Started — Parth Knowledge Network',
        description:
          'Start the MS-CIT new center registration process with Parth Knowledge Network and MKCL.',
        canonical: 'https://www.parthinfo.com/get-started'
      }
    },
  ],
})

// Update document title and meta tags on each route change
router.afterEach((to) => {
  const defaultTitle = 'Parth Knowledge Network — MKCL Training Partner'
  const defaultDescription =
    'Parth Knowledge Network Pvt. Ltd. is an MKCL Training Partner helping Authorized Learning Centers deliver MS-CIT and KLiC programs with comprehensive support.'
  type MetaConfig = { title?: string; description?: string; canonical?: string }
  const meta = (to.meta ?? {}) as MetaConfig
  const title = meta.title || defaultTitle
  const description = meta.description || defaultDescription
  const canonical = meta.canonical || 'https://www.parthinfo.com/'

  if (title) document.title = title

  // description meta
  let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
  if (!descTag) {
    descTag = document.createElement('meta')
    descTag.setAttribute('name', 'description')
    document.head.appendChild(descTag)
  }
  descTag.setAttribute('content', description)

  // canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonical)

  // Open Graph basic tags update
  const ensureOg = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }
  ensureOg('og:title', title)
  ensureOg('og:description', description)
  ensureOg('og:url', canonical)
})

export default router
