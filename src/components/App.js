import React, {useState, useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [javascript, setJavascript] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
     /* Source Document Code as function */
     setSrcDoc(
      `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
      </html>
    `
     )
    }, 250);
 
    return () => clearTimeout(timeout);
  }, [html, css, javascript]);
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>  
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>  
        <Editor language="javascript" displayName="JavaScript" value={javascript} onChange={setJavascript}/>  
      </div>
      <div className="pane">
        <iframe
           srcDoc={srcDoc}
          /*Title option*/
          title="output"
          /*sandbox option*/
          sandbox="allow-scripts"
          /*frameBorder option*/
          frameBorder="0"
          /*width-height option*/
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
    
  )
}

export default App;
