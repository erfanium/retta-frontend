import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Retention from "./pages/Retention";
import Summary from "./pages/Summary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Retta
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/summary">
                      Summary
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/retention">
                      Retention
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">
            <Switch>
              <Route path="/retention">
                <Retention />
              </Route>
              <Route path="/summary">
                <Summary />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
