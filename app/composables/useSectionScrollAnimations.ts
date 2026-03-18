import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'

export const useSectionScrollAnimations = (sectionsRoot: Ref<HTMLElement | null>) => {
  const cleanups: Array<() => void> = []

  onMounted(async () => {
    if (!sectionsRoot.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    await nextTick()

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])

    gsap.registerPlugin(ScrollTrigger)

    const sections = sectionsRoot.value.querySelectorAll('section')
    const createdTweens: Array<{ kill: () => void }> = []
    const createdTriggers: Array<{ kill: () => void }> = []

    const animateSection = (section: Element, sectionElements: HTMLElement[], yFrom: number) => {
      const sectionTween = gsap.fromTo(
        section,
        { y: yFrom, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.15,
          ease: 'power2.out',
          overwrite: 'auto',
        },
      )

      createdTweens.push(sectionTween)

      if (sectionElements.length > 0) {
        const itemsTween = gsap.fromTo(
          sectionElements,
          { y: yFrom * 0.7, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: 'power2.out',
            overwrite: 'auto',
          },
        )

        createdTweens.push(itemsTween)
      }
    }

    sections.forEach((section) => {
      const sectionElements = Array.from(
        section.querySelectorAll<HTMLElement>('h1, h2, h3, p, li, .project-card, .project-content, .project-image-wrap'),
      )

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => animateSection(section, sectionElements, 36),
        onEnterBack: () => animateSection(section, sectionElements, -36),
      })

      createdTriggers.push(trigger)
    })

    cleanups.push(() => {
      createdTweens.forEach((tween) => tween.kill())
      createdTriggers.forEach((trigger) => trigger.kill())
    })
  })

  onBeforeUnmount(() => {
    cleanups.forEach((cleanup) => cleanup())
  })
}
