import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['arrow']

  initialize() {
    this.setupObserver()
  }

  connect() {
    this.observer.observe(this.element)
  }

  disconnect() {
    this.observer.unobserve(this.element)
  }

  setupObserver() {
    const options = {
      threshold: 1,
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.arrowTarget.classList.toggle('-visible', entry.isIntersecting)
        if (!entry.isIntersecting) {
          this.arrowTarget.classList.remove('delay-1000')
        }
      })
    }, options)
  }
}
