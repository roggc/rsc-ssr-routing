import getHookAndProvider from "react-context-slices";

const { useSlice, Provider } = getHookAndProvider({
  slices: {
    page: { initialArg: { name: "home" } }, // React Context slice
    count1: { initialArg: 0 }, // React Context slice
    count2: { initialState: 0, reducers: { increment: (state) => state + 1 } }, // Redux slice
  },
});

export { useSlice };
export default Provider;
