import cypressSplit from 'cypress-split'
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config)

      return config
    },
  },
})
