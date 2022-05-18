import FormContainer from "./components/Containers/FormContainer";
import PreviewContainer from "./components/Containers/PreviewContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex w-full">
          <FormContainer />
          <PreviewContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
