import { defineConfig } from 'cypress';
import { setupTestRadar } from '@test-radar/cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      setupTestRadar(on, { repositoryId: 674463592 });
    },
  },
});
