import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import styled from "styled-components";

const AppMain = styled.main`
  background-color: #e8dbce;
`;

export default function App() {
  return (
    <AppMain>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/locations">
        <LocationsList />
      </Route>
    </AppMain>
  );
}








// import React from "react";
// import Header from "./components/Header.js";
// import WelcomePage from "./components/WelcomePage.js";
// import CharacterList from "./components/CharacterList.js";
// import { Route, Link, Params, match } from "react-router-dom";


// export default function App() {
//   return (
//     <main>
//       <Header />
//       <Route path="/CharacterList"><CharacterList /></Route>

//       <Route exact path="/"><WelcomePage /></Route>
//     </main>
//   );
// }
