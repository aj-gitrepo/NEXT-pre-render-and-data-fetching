const UserIdPage = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
}

export default UserIdPage;

export async function getServerSideProps (context) {
  const { params } = context;
  const userId = params.uid; //from file name
  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}

// here there is no need for pre-generated paths like in getStaticPaths
