import fs from 'fs/promises'; //to execute promises //does not work with client side
import Link from 'next/link';
import path from 'path';

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

// the props is got first and then the component is rendered
export async function getStaticProps(context) { //NEXT js looks for this function
  console.log("Re-generating...")
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if(!data) {
    return{
      redirect: {
        destination: '/no-data'
      }
    }
  };

  if(data.products.length === 0) {
    return {
      notFound: true //to enable 404 page
    };
  }
  // returns props in the form of object
  return {
    props: {
      products: data.products
    },
    revalidate: 10,
  };
}

export default HomePage;

// 

// we don't want to load it through an HTTP request. That's only sent from the client site after the page was loaded. Instead we wanna prefetch the data before we create this component. And before this component page gets pre rendered by next JS

// import fs from 'fs';
// Next JS will ignore it for the client site, it will split your code in a clever way. So to component code in general will be part of the client site code, this import and this code won't be. And now we can use Fs to get access to this dummy backend json file with the read file

// cwd - current working directory
// when the code is executed by NEXT js it will basically treat all the files as if they sitin our root project folder.So the current working directory will be the overall project folder instead of the pages folder.

// here the dummy-data file is not imported (import creates HTTP request)

// yarn run build
// pre generates the static pages for production

// revalidate: 10 here, we would tell Next.js that for every incoming request to this page, it should be re-generated unless, it's less than 10 seconds ago that it was last re-generated. So it's recreated at most once every 10 seconds.