const { jestSetup } = require('@flaky-bot/jest-plugin');

module.exports = async function (globalConfig, projectConfig) {
  await jestSetup(
    { globalConfig, projectConfig },
    {
      repositoryId: 674463592,
      jestConfig: `${globalConfig.rootDir}/jest.config.js`,
    }
  );
};