module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // otros plugins si los tuvieras
      "react-native-reanimated/plugin", // ⚠️ SIEMPRE al final
    ],
  };
};
