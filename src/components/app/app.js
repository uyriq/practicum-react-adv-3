import React from "react";
import appStyles from "./app.module.css";
import { ReactComponent as AsteriskImage } from "../images/asterisk.svg";

import Form from "../form/form";
console.log(JSON.stringify(appStyles))
class App extends React.Component {
  render() {
    return (
      <main className={appStyles.root}>
        <AsteriskImage className={appStyles.asterisk} />
        <AsteriskImage className={appStyles.asterisk} />
        <AsteriskImage className={appStyles.asterisk} />
        <AsteriskImage className={appStyles.asterisk} />
        <Form />
      </main>
    );
  }
}

export default App;
