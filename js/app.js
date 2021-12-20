import {
  useState,
  useEffect,
} from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'; // This was a pain! Thanks to https://github.com/preactjs/preact/issues/1961
// More info at: https://preactjs.com/guide/v10/getting-started#no-build-tools-route
import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module';

const App = () => {
    return html`<div class="App">
    <h1>D&D Populations</h1>
    </div>`;
}

render(html`<${App} />`, document.body);
