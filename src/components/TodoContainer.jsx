import { Link, useLoaderData } from "react-router-dom";

export default function TodoListContainer() {
  const data = useLoaderData();
  console.log("todo container");
  return (
    <div>
      {data ? (
        data.todos.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h1>{item.todo}</h1>
              <h3>{item.userId}</h3>
              <Link to={`/todo/${item.id}`}>click Here</Link>
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
export const TodoListData = async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
};
