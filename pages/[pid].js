import { Fragment } from "react";
import fs from 'fs/promises'; //to execute promises //does not work with client side
import path from 'path';

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  return(
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid; //from file name

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find(product => product.id === productId);

  return {
    props:{
      loadedProduct: product
    },
  };
}

export async function getStaticPaths() { //to tell next js which path must be pre generated
  return { //array of paths
    paths: [
      { params: {pid: 'p1'} },
      { params: {pid: 'p2'} },
      { params: {pid: 'p3'} },
    ],
    fallback: false //if set to true it validates even the pages that are not listed here 
  };
}

export default ProductDetailPage;

// params is an object full of key value pairs where the keys are the identifiers for the dynamic path segments. So in this case, PID, which is the only dynamic parameter of this page here and the values are the concrete values that were entered in the URL. So here I then get my product ID by accessing params.pid.

// if you plan on preparing a page on the server or during the build process with getStaticProps, then you need to get access to the params, so to that dynamic path segment inside of getStaticProps so that you can use the param data here to prepare the data for the component. (instead of using useRouter function)

// Next.js doesn't know in advance, how many pages it needs to pre-generate for this dynamic page. It doesn't know which values for PID will eventually be supported. And because it doesn't know that dynamic pages like this are not pre-generated by default instead they are always generated just in time on the server,

// That's why for such dynamic routes, we need to give Next.js more information. We can also tell Next.js which paths. So which instances off a dynamic page should be pre-generated. Because here we don't just need data we also need to let Next.js know which ID values, which dynamic segment values will be available and for which values a page should be pre-generated. So that multiple instances of that page blueprint can be pre-generated by Next.js. And we do inform Next.js about this with another function we can add on the page. So another function we can add in this page file, and that's the getStaticPaths function,