import "./App.css";
import { useState, useEffect } from "react";

// Ícones
import { MdOutlineAdsClick } from "react-icons/md";
import { RxReset } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Em construção.</h1>

            <div className="state">
                <h2>Apenas para testar useState</h2>
                <p>Clicou: {count}</p>

                <div className="control">
                    <button onClick={(e) => setCount(count + 1)}>
                        <MdOutlineAdsClick className="click" />
                    </button>
                    <button onClick={(e) => setCount(0)}>
                        <RxReset className="reset" />
                    </button>
                </div>
            </div>

            <h3>Onde me encontrar:</h3>
            <div className="socials">
                <ul>
                    <li><FaGithub /> <a href="https://github.com/devwebstudent" target="_blank">GitHub</a></li>
                    <li><FaSteam /> <a href="#">Steam</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;
