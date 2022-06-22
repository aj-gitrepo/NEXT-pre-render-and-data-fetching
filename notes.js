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

// this only executes on the server after deployment and also on our development server here, but it's not statically pre-generated.

// here is no need for pre-generated paths like in getStaticPaths, as the pages are rendered from the server side (the function getServerSideProps is run on every req).


// if you have stock data which you show on some page and that data changes multiple times every second, pre fetching and pre rendering might not make too much sense because you will always see outdated data when you visit this page. So in such a case, just showing a loading spinner when you visit the page, and then fetching the very latest data for you, and maybe updating that data in the background then might be the best user experience. Another example would be highly user-specific data. 

// For example, the last orders in an online shop. If you are in your account and your user profile and you view that data, that could be an example where we don't really need to pre-render a page. Definitely not for search engines because they won't see your private profile, and also not necessarily for the user experience because if we go to this page, we might be more than fine with just waiting a second for the data to be loaded on the client and having a quicker navigation to the page might be more important than having the data available right from the start.

// Or considered a case that you have partial data. So let's say you have like a dashboard page with a lots of different pieces of data, lots of different kinds of data, in such a case, loading all these different pieces, which make up the overall dashboard might just slow down the request if you do that on the server, and pre rendering it statically during build time might also not make sense because it's personal data or because it's changing a lot. So in such a scenario, it would again, probably make sense to fetch that data on the client, so from inside the regular react app, once a user navigated to that page.

// in such cases, it might make the most sense to use the traditional approach of writing some code in your react components may be with user fact and fetch, Q fetch data from some API from inside the client side react application. So not from inside get static props or get service side props, but really from inside the component, so that this code only runs once the code executes in the client, not on the server.


