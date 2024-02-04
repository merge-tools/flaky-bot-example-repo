import { defineConfig } from 'cypress';
import { setupTestRadar } from '@testradar/cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      setupTestRadar(on, { repositoryId: 674463592 });
    },
  },
  retries: 2,
});
