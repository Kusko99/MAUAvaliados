"use client";
import * as React from "react";

export function useMediaQuery(query) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

// export function useScreenSize(query) {
//   const [matches, setMatches] = React.useState(false);

//   React.useEffect(() => {
//     const mediaQuery = window.matchMedia(query);
//     const handleChange = () => setMatches(mediaQuery.matches);

//     handleChange();
//     mediaQuery.addEventListener("change", handleChange);

//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, [query]);

//   return matches;
// }
