const { setupTestRadar } = require('@testradar/jest');

module.exports = async function (globalConfig, projectConfig) {
  await setupTestRadar(
    { globalConfig, projectConfig },
    {
      repositoryId: 674463592,
      jestConfig: `${globalConfig.rootDir}/jest.config.js`,
    },
  );
};
