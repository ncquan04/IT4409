import "./App.css";
import AppProvider from "./contexts";
import RootNavigation from "./navigation";

function App() {
  return (
    <div className="w-full h-full bg-bg">
      <AppProvider>
        <RootNavigation />
      </AppProvider>
    </div>
  );
}

export default App;
