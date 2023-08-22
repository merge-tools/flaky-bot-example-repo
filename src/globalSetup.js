const { jestSetup } = require('@test-radar/jest');

module.exports = async function (globalConfig, projectConfig) {
  await jestSetup(
    { globalConfig, projectConfig },
    {
      repositoryId: 674463592,
      jestConfig: `${globalConfig.rootDir}/jest.config.js`,
    },
  );
};
