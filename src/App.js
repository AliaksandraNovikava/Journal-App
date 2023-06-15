import Header from "./components/Header/Header";
import EntryForm from "./components/EntryForm/EntryForm";
import EntriesSection from "./components/EntriesSection/EntriesSection";
import TabBar from "./components/EntriesSection/TabBar";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection />
      </main>
    </div>
  );
}
