# RSC

This is a setup for development with RSC (React Server Components). With this setup you can build SPA's with React and hide secret keys to fetch an API in the server or fetch a database with Prisma in the server. It's a fullstack setup with React.

## How to install and run the project.

1. **npm i**
2. **npm run dev**
3. **npm run app** (in a new terminal window)
4. enter **localhost:8080** in the browser.

## More Info

An article explaining the theory behind this project can be found [here](https://medium.com/@roggc9/rsc-ssr-rcc-react-client-components-implementation-from-scratch-e96ba0d6e1b4).

Another article explaining this setup and the theory behind it can be found [here](https://medium.com/@roggc9/a-setup-for-rsc-development-1524cb1015ca).

## React.Suspense not implemented

React.Suspense is not implemented in this setup, so don't use it. But in theory you won't need it with the use of the `RSC` RCC (React Client Component).

This is the code for the `RSC` RCC:

```javascript
export default function RSC({ componentName, children, ...props }) {
  const [JSX, setJSX] = React.useState(children);
  const body = JSON.stringify({ props });

  useEffect(() => {
    setJSX(children);
    fetch(`/${componentName}`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body,
    }).then(async (response) => {
      const clientJSXString = await response.text();
      const clientJSX = JSON.parse(clientJSXString, parseJSX);
      const fixedClientJSX = await fillJSXwithClientComponents(clientJSX);
      setJSX(fixedClientJSX);
    });
  }, [componentName, body]);

  return JSX;
}
```

So you see, this RCC calls the server to fetch for an RSC. This is the code for the `Router` RSC, the one which receives the call and handles it:

```javascript
export default async function Router({ url, body: { props } }) {
  switch (url.pathname) {
    case "/":
      return (
        <ThemeProvider
          __isClient__="../components/theme-provider.js"
          theme={theme}
        >
          <Provider __isClient__="../slices.js">
            <Layout __isClient__="../components/layout.js" title={title} />
          </Provider>
        </ThemeProvider>
      );
    case "/home":
      return <HomeRSC {...props} />;
    default:
      return <Ups __isClient__="../components/ups.js" />;
  }
}
```

So you see, when it is not first load it returns an RSC (`HomeRSC`). This RSC will return the final RCC. Let's see the definition for `HomeRSC`:

```javascript
export default async function HomeRSC() {
  // you probably want to fetch some data in here
  return <Home __isClient__="../components/home.js" />;
}
```

It just returns the RCC `Home`. And this is the `Layout` RCC:

```javascript
export default function Layout({ title }) {
  const page = useNavigation();

  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <Body>
        <Nav>
          <Link page={{ name: "home" }}>home</Link>
          <Link page={{ name: "foo" }}>foo</Link>
        </Nav>
        <Container>
          <RSC key={page.name} componentName={page.name} {...page.props}>
            loading {page.name} page...
          </RSC>
        </Container>
      </Body>
    </html>
  );
}
```

You see how the `Layout` RCC doesn't call directly to `Home` RCC, but it calls instead to `RSC` RCC, which will fetch JSX for `HomeRSC`, wich will return `Home` RCC with proper data from the server.

So this is the cycle:

From an RCC call to `RSC` RCC passing to it the name of the RSC component we want to fetch (usually `some-component-name`). Then in the `Router` RSC the `SomeComponentNameRSC` is called which fetchs some data and returns `SomeComponentName` RCC with proper data, that gets rendered in the Client.
