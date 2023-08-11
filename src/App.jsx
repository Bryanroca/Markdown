import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';

const defaultMarkdown = `
# Título Principal
## Este es un sub-título...
### Y aquí hay algunas otras cosas geniales:

Aquí hay algo de código: \`<div></div>\`, entre 2 acentos invertidos.

\`\`\`
// este es un código de varias líneas:

function otroEjemplo(primerLinea, ultimaLinea) {
  if (primerLinea === '\\\`\`\`' && ultimaLinea === '\\\`\`\`') {
    return codigoDeMultiplesLineas;
  }
}
\`\`\`

También puedes hacer texto en **negrita**... ¡guau!
O en _itálica_.
O... espera un momento... **_¡ambas!_**
Y siéntete libre de volverte loco ~~tachando cosas~~.

También hay [enlaces](https://www.freecodecamp.org), y
> ¡Citas en bloque!

Y si quieres ponerte realmente loco, incluso tablas:

- Y, por supuesto, también hay listas.
  - Algunas son con viñetas.
     - Con diferentes niveles de sangría.
        - Que se ven así.

1. Y también hay listas numeradas.
1. ¡Usa solo 1s si quieres!
1. Y por último, pero no menos importante, no olvidemos las imágenes incrustadas:

![Logo de freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div>
      <h1>Visor de Markdown</h1>
      <div className='boxes-container'>
        <textarea
          name='editor'
          id='editor'
          cols='30'
          rows='10'
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
        <div id='preview'>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
