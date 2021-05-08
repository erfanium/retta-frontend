import { QueryClient, QueryClientProvider } from "react-query";
import Summary from "./pages/Summary";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App container">
        <Summary />
      </div>
    </QueryClientProvider>
  );
}

export default App;
