import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import Filtro from './components/Filtro/Filtro';
import Ordenacao from './components/Ordenacao/Ordenacao';
import Feed from './components/Feed/Feed';

function App() {
    return (
        <div className="page">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content">
                <div className="cabecalho">
                    <SearchBar />
                    <Filtro />
                    <Ordenacao />
                    <Feed />
                </div>
            </div>
        </div>
    );
}

export default App;
