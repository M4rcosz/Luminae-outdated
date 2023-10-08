import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import GlobalStyles from "./components/GlobalStyles";
import ThemeProviderComp from "./components/ThemeProviderComp";

const App = () => {

  return (
    <>
      <ThemeProviderComp>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProviderComp>
    </>
  )
}

export default App
