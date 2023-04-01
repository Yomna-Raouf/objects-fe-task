import { useRoutes } from "react-router-dom";

import routes from 'routes';

const App = () => {
  const appRoutes = useRoutes(routes);
  return (
    <div className="App">
      {appRoutes}
    </div>
  );
}

export default App;
