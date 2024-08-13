import { UserContextProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { MyRoutes } from "./Routes";

function App() {
  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <MyRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
