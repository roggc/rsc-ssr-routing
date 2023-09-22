import getHookAndProvider from "react-context-slices";

const { useSlice, Provider } = getHookAndProvider({
  slices: {
    page: { initialArg: { name: "home" } },
  },
});

export { useSlice };
export default Provider;
