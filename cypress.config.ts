import { defineConfig } from "cypress";
import { cypressPlugin } from '@flaky-bot/cypress-plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      cypressPlugin(on, { repositoryId: 674463592 });
    },
  },
});
