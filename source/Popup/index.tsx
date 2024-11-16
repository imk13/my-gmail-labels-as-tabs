import * as React from 'react';
import ReactDOM from 'react-dom';

import Popup from './Popup';
//import { GApiProvider } from 'react-gapi-auth2';

// Same config object passed to `gapi.auth2.init`
// https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams
// const clientConfig = {
//   client_id: '<APP>.apps.googleusercontent.com',
//   scope: 'https://www.googleapis.com/auth/<POLICY>'
//   // etc...
// };

// const App = ({children}) => (
//   <GApiProvider clientConfig={clientConfig}>
//     {children}
//   </GApiProvider>
// );
// ReactDOM.render(App(Popup), document.getElementById('popup-root'));

ReactDOM.render(<Popup />, document.getElementById('popup-root'));