import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayoutFn from "./Layout/RootLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import ContactLayoutfn from "./Layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import TodoLayoutFn from "./Layout/TodoLayout";
import TodoListContainer, { TodoListData } from "./components/TodoContainer";
import TodoUserFn, { todoUserData } from "./components/TodoUser";
import TodoErr from "./components/TodoError";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayoutFn />}
        errorElement={<div>404 page not found</div>}
      >
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactLayoutfn />}>
          <Route path="/contact/info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route
          path="/todo"
          element={<TodoLayoutFn />}
          errorElement={<TodoErr />}
        >
          <Route index element={<TodoListContainer />} loader={TodoListData} />
          <Route
            path=":id"
            element={<TodoUserFn />}
            loader={todoUserData}
            // errorElement={<TodoErr />}
          />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="*" element={<div>404 Page Not Found</div>} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// const routes = [
//   {
//     path: "/",
//     element: <RootLayoutFn />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "about", element: <AboutPage /> },
//       { path: "products", element: <ProductsPage /> },
//       {
//         path: "contact",
//         element: <ContactLayoutfn />,
//         children: [
//           { path: "info", element: <ContactInfo /> },
//           { path: "form", element: <ContactForm /> },
//         ],
//       },
//       {
//         path: "todo",
//         element: <TodoLayoutFn />,
//         children: [
//           { index: true, element: <TodoListContainer />, loader: TodoListData },
//           {
//             path: ":id",
//             element: <TodoUserFn />,
//             loader: todoUserData,
//             errorElement: <TodoErr />,
//           },
//         ],
//       },
//     ],
//   },
//   { path: "*", element: <div>404 Page Not Found</div> },
// ];

// const router = createBrowserRouter(routes);

// return <RouterProvider router={router} />;
