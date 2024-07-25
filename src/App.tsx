import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <SearchBar />
        <Menu />
        {/* <Modal /> */}
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
