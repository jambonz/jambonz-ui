export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
      {
        name: "grey",
        value: "#f8f8f8",
      },
      {
        name: "dark",
        value: "#231f20",
      },
      {
        name: "black",
        value: "#000000",
      },
      {
        name: "jam",
        value: "#da1c5c",
      },
      {
        name: "pink",
        value: "#fff3f6",
      },
      {
        name: "blue",
        value: "#006dff",
      },
      {
        name: "purple",
        value: "#9662b2",
      },
      {
        name: "teal",
        value: "#30beb0",
      },
    ],
  },
};
