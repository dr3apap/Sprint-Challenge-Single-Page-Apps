import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const Charactersdiv = styled.div`
display:flex;
flex-wrap: wrap;
justify-content; center;
align-items: center;
width: 100%;
`;

const CharactersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space around;
  align-items: center;
  margin: 3% auto;
  width: 100%;
`;

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        const characters = response.data.results.filter(obj =>
          obj.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
      .catch(err => {
        console.log("get error:", err);
      });
  }, [query]);

  return (
    <CharactersSection className="character-list">
      <SearchForm query={query} setQuery={setQuery} />
      <Charactersdiv>
        {data.map(obj => {
          return <CharacterCard obj={obj} />;
        })}
      </Charactersdiv>
    </CharactersSection>
  );
}







// import React, { useEffect, useState } from "react";
// import axios from "axios";


// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect
//   const [character, setCharacter] = useState([]);
//   const [query, setQuery] = useState("")
//   useEffect(() => {
//     axios.get(`https://rickandmortyapi.com/api/character/`)
//       .then(res => {
//         console.log(res)


//         // const characters = res.data.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
//         // );
//         setCharacter([])

//       })
//       .catch(err => {
//         console.log("The data was requested", err)
//       })
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);

//   const handleChange = e => {
//     e.preventDefault()
//     setQuery(//...character, [e.target.name]  
//       e.target.value)
//   }



//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//       <form on Change={handleChange}>
//         <label htmlFor="Search">
//           Search:
//           <input id=" Search" type="text" name="search" value={query} tabIndex="0" autoComplete="off" placeholder="Search by Name " />
//         </label>
//       </form>
//       <div>

//       </div>
//     </section>
//   );
// }
