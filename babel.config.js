module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': '.',   // points to current folder (boda-app)
          },
        },
      ],
    ],
  };
};
