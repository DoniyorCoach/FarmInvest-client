const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/styles/index.scss";
        `,
      },
    },
  },
  webpack: {
    alias: {
      '@Assets': path.resolve(__dirname, 'src/assets/'),
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@UIkit': path.resolve(__dirname, 'src/UIkit/'),
      '@Layouts': path.resolve(__dirname, 'src/layouts/'),
      '@Store': path.resolve(__dirname, 'src/store/'),
      '@Pages': path.resolve(__dirname, 'src/pages/'),
      '@Routes': path.resolve(__dirname, 'src/routes/'),
      '@Utils': path.resolve(__dirname, 'src/utils/'),
      '@Helpers': path.resolve(__dirname, 'src/helpers/'),
      '@Api': path.resolve(__dirname, 'src/api/'),
    },
  },
};
