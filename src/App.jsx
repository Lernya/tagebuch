import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList.jsx";

const App = () => {
  return (
    <>
      <h1 id="h1app">Personal Diary</h1>
      <EntryForm />
      <EntryList />
    </>
  );
};
export default App;
