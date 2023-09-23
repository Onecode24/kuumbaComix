import { createBrowserRouter } from "react-router-dom";


const Routes = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/comix/:id",
      element: <ComixView />,
   },
   {
      path: "/abonnement",
      element: <Abonnement />,
   }
])

export default Routes;
