import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  activeClass = '-in-view'

  initialize() {
    this.observedEls = [
      ...this.element.querySelectorAll('[class*="animate-"]'),
      ...this.element.querySelectorAll('[class*="stagger-"]'),
    ]
    this.setupObserver()
  }

  connect() {
    this.observedEls.forEach((el) => {
      this.observer.observe(el)
    })
  }

  disconnect() {
    this.observedEls.forEach((el) => {
      this.observer.unobserve(el)
    })
  }

  setupObserver() {
    const options = {
      threshold: 0.25,
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.activeClass)
          if (!entry.target.hasAttribute('data-animate-reset')) {
            this.observer.unobserve(entry.target)
          }
        } else {
          entry.target.classList.remove(this.activeClass)
        }
      })
    }, options)
  }
}
