import { defineConfig } from 'cypress';
import { cypressPlugin } from '@test-radar/cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      cypressPlugin(on, { repositoryId: 674463592 });
    },
  },
});
