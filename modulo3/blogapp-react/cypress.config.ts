import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // 1. Cambiado al puerto 5173 donde está corriendo tu Vite
    baseUrl: 'http://localhost:5173', 
    
    specPattern: 'cypress/e2e/**/*.cy.ts',
    
    // 2. Si creaste el archivo 'cypress/support/e2e.ts', déjalo como estaba.
    // Si prefieres saltarte ese error por ahora, puedes cambiarlo a: false
    supportFile: 'cypress/support/e2e.ts', 
  },
  env: {
    apiUrl: 'http://localhost:3000',
  },
})