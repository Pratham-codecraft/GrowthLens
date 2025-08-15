module.exports = {
  webpack: {
    configure: (config) => {
      // Suppress source map warnings for react-datepicker
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        {
          module: /react-datepicker/,
          message: /Failed to parse source map/,
        },
      ];
      
      return config;
    },
  },
};
