/* eslint-disable */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const cssMatcher = require('jest-matcher-css');

const tailwindForms = require('./index.js');

const generatePluginCss = () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [
        tailwindForms,
      ],
    }),
  )
  .process(input, { from: inputPath })
  .then(result => result.css);
};

test('it generates all the classes', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(
    tailwindcss({
      corePlugins: false,
      plugins: [
        tailwindForms(),
      ],
    }),
  )
  .process(input, { from: inputPath })
  .then(result => {
    const expected = fs.readFileSync(
      path.resolve(`${__dirname}/stubs/output.css`),
      'utf8'
    );

    // console.log(result.css);

    expect(result.css).toBe(expected);
  });
});
