import Reakt, { Component } from './lib/reakt.js';

const Title = ({ text }) => Reakt.createElement(
  'h1',
  null,
  props.text
)

const App = () => Reakt.createElement(
  'div',
  null,
  Reakt.createElement(
    Title,
    { text: 'hello props' }
  )
);

Reakt.render(
  Reakt.createElement(App, {text: 'props form class'}),
  document.getElementById('app')
)
