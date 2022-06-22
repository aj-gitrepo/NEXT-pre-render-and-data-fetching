const UserProfilePage = (props) => { 
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export default UserProfilePage;

export async function getServerSideProps (context) { //context gives access to params, req obj and res
  const { params, req, res } = context;

  // console.log(req);
  // console.log(res);
  console.log('server side Code');

  return {
    props: {
      username: "Max"
    }
  };
}

// to return some user specific data, let's say to user name, we need to get access to the request object which carries the cookies and the headers to find out which users sent this request. That would be a typical use case for getServerSideProps. We can't pre-rendered as page because we don't know which users will have in advance and we don't get access to their cookies in advance.

// the function is same as getStaticProps, but revalidate option is not needed as the function runs for every incoming request.

// next js sends res by default, we can manipulate the res by adding extra headers such as cookies to req
