module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest/setup.js'],  
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './jest/__utils__/fileTransformer.js',
  },
};
