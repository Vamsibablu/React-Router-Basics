import { useLoaderData } from "react-router-dom";

export default function TodoUserFn() {
  const data = useLoaderData();
  console.log(data, "data");
  return (
    <div className="card">
      <h1>{data.todo}</h1>
    </div>
  );
}

export const todoUserData = async ({ params }) => {
  console.log(params, "params");
  try {
    const res = await fetch("https://dummyjson.com/todos/" + params.id);
    const data = await res.json();
    if (!res.ok) {
      throw Error("couldn't found the details");
    }
    return data;
  } catch (err) {
    throw Error("couldn't found the details");
  }
};

// const url = new URL(request.url); // Extract the URL from the request object
//   const searchParams = url.searchParams; // Get the search parameters

//   const name = searchParams.get('name');
//   const age = searchParams.get('age');
