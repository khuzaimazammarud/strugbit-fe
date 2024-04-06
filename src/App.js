import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Layout from "./components/layout";
import AppRoutes from "./routes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <AppRoutes />
          <Toaster position="top-center" reverseOrder={false} />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
