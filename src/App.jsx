import EntryForm from "./components/EntryForm";
import EntryList from "./components/EntryList.jsx";

const App = () => {
  return (
    <>
      <h1>Your Personal Diary</h1>
      <EntryForm />
      <EntryList />
    </>
  );
};
export default App;
