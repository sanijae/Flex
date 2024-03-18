import { useState, useEffect } from "react";

const MediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // useEffect(() => {
  //   window
  //   .matchMedia(query)
  //   .addEventListener('change', e => setMatches( e.matches ));
  // }, []);

  return matches
}

export default MediaQuery;