

const Home = ({data}) => {


  // console.log(data);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1> NEXTJS WordPress example </h1>
      {data ? data.map((e,key) => {
        return (
          <div key={key} style={{ margin: "20px", borderBottom: "2px solid grey", paddingBottom: "10px", width: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <span style={{ margin: "5px" }}>{e.title} <em>by {e.author.name}</em></span>
            {/* <button style={{ border: "1.5px solid black", borderRadius: "3px", backgroundColor: "white" }}><a href={`${e.URL}`} style={{ textDecoration: "none", color: "black" }}><b>Read More</b></a></button> */}

          </div>
        )
      }) : "Yet to recieve data"}
      
    </div>
  );
}

export const getStaticProps = async() =>{
  const res = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/adityadotdev.wordpress.com/posts")

  const data = await res.json();
  return {
    props: {
      data:data.posts,
    },
   
    revalidate: 60, // In seconds
  }
}
export default Home;
