import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

let counter: number = 0;

document.body.innerHTML = `
  <button id="iconButton">
    <img src="${exampleIconUrl}" alt="Paperclip Icon" width="100" />
  </button>
    <div id="counterDisplay">0 paperclips</div>
`;
