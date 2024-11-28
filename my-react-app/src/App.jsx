import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App loaded!");
  }, []);

  return <h1>Hello, React App!</h1>;
}

export default App;