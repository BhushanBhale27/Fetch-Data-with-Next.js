async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Can not fetch data");
  }

  return res.json();
}

const userData = async () => {
  const data = await getData();
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <h3>{item.title}</h3>
            <h4>{item.body}</h4>
          </div>
        );
      })}
    </>
  );
};

export default userData;
