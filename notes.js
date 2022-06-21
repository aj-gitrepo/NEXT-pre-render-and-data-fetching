// using NEXT js to creae pre generated pages
// here there the data is loaded before the page is rendered unlike traditional reaat app where the page is hydrated after the page is rendered (the root div tag is empty and then populated)

// Static generation - compiles the page data on production and cached by the server
// export async function getStaticProps(contents) {}

// you can run any code that would normally run on the server side only. So, in that function, you don't run the client side code, you're not restricted to that and you don't have access to certain client side API, you don't have access to the window object, for example, but instead, you can run any code you want, that normally would only run on the server side. And even better than that, code that you write inside of this getStaticProps function, will not be included in the code bundle that's sent back to your clients.

// can also specify which page should be pre rendered

// Next.js has a built in feature, which is called incremental static generation. It means that you don't just generate your page statically once at build time, but that it's continuously updated even after deployment without you re-deploying it. 

// So you pre-generate a page, but then you can also tell Next.js that a given page should be re-generated again for every incoming request at most every X seconds. So every 60 seconds, for example. That means that if a request is made for a certain page and it's, let's say less than 60 seconds since it was last re-generated, the existing page would be served to the visitor. 

// But if it's past those 60 seconds and the amount of seconds of course is up to you, then this page would be pre-generated on the server instead. So that means that you either serve the old page if it's not that old yet, or you serve the latest page and brand new page, which was generated again on the server 

// the above is achieved by using revalidate option

// >yarn run build

// 

// server-side - fetches data on request each time before rendereing page

// not pre-generated in advance during build time or every couple of seconds but it's really code that runs on the server only, so only after you deployed it, and which is then re-executed for every incoming request. And that code is added to a function called getServerSideProps.

// can only be added to the page component file

// you should only use either getStaticProps, or getServerSideProps because they kind of clash.