import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    /* poppins-200 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 200;
      src: url('./fonts/poppins-v20-latin-200.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('./fonts/poppins-v20-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('./fonts/poppins-v20-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
           url('./fonts/poppins-v20-latin-200.woff') format('woff'), /* Modern Browsers */
           url('./fonts/poppins-v20-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
           url('./fonts/poppins-v20-latin-200.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-300 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      src: url('./fonts/poppins-v20-latin-300.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('./fonts/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('./fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
           url('./fonts/poppins-v20-latin-300.woff') format('woff'), /* Modern Browsers */
           url('./fonts/poppins-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
           url('./fonts/poppins-v20-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-regular - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: url('./fonts/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('./fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('./fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
           url('./fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
           url('./fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
           url('./fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-500 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url('./fonts/poppins-v20-latin-500.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('./fonts/poppins-v20-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('./fonts/poppins-v20-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
           url('./fonts/poppins-v20-latin-500.woff') format('woff'), /* Modern Browsers */
           url('./fonts/poppins-v20-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
           url('./fonts/poppins-v20-latin-500.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-600 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      src: url('./fonts/poppins-v20-latin-600.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('./fonts/poppins-v20-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('./fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
           url('./fonts/poppins-v20-latin-600.woff') format('woff'), /* Modern Browsers */
           url('./fonts/poppins-v20-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
           url('./fonts/poppins-v20-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    /* poppins-700 - latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      src: url('./fonts/poppins-v20-latin-700.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('./fonts/poppins-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('./fonts/poppins-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
           url('./fonts/poppins-v20-latin-700.woff') format('woff'), /* Modern Browsers */
           url('./fonts/poppins-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
           url('./fonts/poppins-v20-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
    }
    `}
  />
);

export default Fonts