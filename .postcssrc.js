module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss': false,
  map: ctx.env === 'development' ? ctx.map : false,
  syntax: 'postcss-scss',
  plugins: {
    'postcss-plugin': ctx.options.plugin,
  },
});
