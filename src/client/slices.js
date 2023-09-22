import getHookAndProvider from "react-context-slices";

const { useSlice, Provider } = getHookAndProvider({
  slices: {
    page: { initialArg: { name: "home" } },
    count: { initialArg: 0 },
  },
});

export { useSlice };
export default Provider;
