import { Provider } from "react-redux";
import "./App.css";
import Body from "./Container/Body";
import Head from "./Container/Head";
import store from "./utils/store";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./Container/MainContainer";
import Watch from "./Container/Watch";
import { RouterProvider } from "react-router-dom";

const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRounter} />
      </div>
    </Provider>
  );
}

export default App;
