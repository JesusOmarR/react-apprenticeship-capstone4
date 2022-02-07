import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer/Footer";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
