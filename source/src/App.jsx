import { useEffect, useState } from "react"

export default function App() {

  let [result, setResult] = useState('');

  useEffect(() => {
    let country = location.search.split('?country=')[1];
    if (!country) {
      setResult(<h3>No country chosen yet,<br />so no info about any capital available.</h3>);
    }
    else {
      country = decodeURIComponent(country);
      (async () => {
        let found = await (await fetch('/api/capitals/' + country)).json();
        if (!found) {
          setResult(<h3>Can not find the capital of {country}...</h3>);
        }
        else {
          setResult(<>
            <h3>{found.capital}</h3>
            <p>The capital of {country}.</p>
            <p>(The population count is approximate. The data may be old.)</p>
            <p><a href={'https://en.wikipedia.org/wiki/' + found.capital.split(' -')[0]} target="_blank">
              Read more on Wikipedia
            </a></p>
          </>);
        }
      })();
    }
  }, []);

  return <>{result}</>;
}