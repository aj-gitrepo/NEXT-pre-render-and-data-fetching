// using NEXT js to creae pre generated pages
// here there the data is loaded before the page is rendered unlike traditional reaat app where the page is hydrated after the page is rendered

// Static generation - compiles the page data on production and cached by the server
// export async function getStaticProps(contents) {}

// you can run any code that would normally run on the server side only. So, in that function, you don't run the client side code, you're not restricted to that and you don't have access to certain client side API, you don't have access to the window object, for example, but instead, you can run any code you want, that normally would only run on the server side. And even better than that, code that you write inside of this getStaticProps function, will not be included in the code bundle that's sent back to your clients.

// server-side - fetches data on request each time before rendereing page
