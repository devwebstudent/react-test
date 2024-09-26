import "./App.css";
import { useState, useEffect } from "react";

// Pacote chuva
import { Rainify } from "rainify"

// Ícones
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { RxReset } from "react-icons/rx";

// Sociais
import { FaGithub } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Rainify isRaining wind={-2} speed={5} thickness={2} intensity={100} splashDuration={8} color="rgba(255,255,255,0.2)" />
            <h1>Em construção.</h1>

            <div className="state">
                <h2>Apenas para testar useState</h2>
                <p>Clicou: {count}</p>

                <div className="control">
                    <button onClick={() => setCount(count - 1)}>
                        <FiMinus className="menos" />
                    </button>

                    <button onClick={() => setCount(count + 1)}>
                        <FiPlus className="mais" />
                    </button>
                </div>

                <div className="control">
                <button onClick={() => setCount(0)}>
                    <RxReset />
                </button>
            </div>
            </div>            

            <div className="socials">
                <h3>Onde me encontrar:</h3>
                <ul>
                    <li><FaGithub /> <a href="https://github.com/devwebstudent" target="_blank">GitHub</a></li>
                    <li><FaSteam /> <a href="#">Steam</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
