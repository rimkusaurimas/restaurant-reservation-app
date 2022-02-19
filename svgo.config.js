module.exports = {
  plugins: [
    {
      name: "removeAttrs",
      active: true,
      params: {
        attrs: "(stroke)",
      },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attribute: "stroke='currentColor'",
      },
    },
  ],
};
