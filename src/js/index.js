import { Application } from '@hotwired/stimulus'

import AnimateObserverController from './controllers/animate-observer_controller'
import ScrollArrowController from './controllers/scroll-arrow_controller'

window.Stimulus = Application.start()
Stimulus.register('animate-observer', AnimateObserverController)
Stimulus.register('scroll-arrow', ScrollArrowController)
// Stimulus.debug = true
