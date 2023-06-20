import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const routers = useRoutes(routes);

  return (
    <>
      <Navbar />
      <main className="container app__wrapper">{routers}</main>
    </>
  );
};

export default App;
