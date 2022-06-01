import { useEffect, useState } from 'react';

export default function App() {

  setTimeout(() => window.start((chosenCountry, chosenContinent) => {
    let arg = { service: 'worldmap', event: 'click', chosenCountry, chosenContinent };
    try {
      parent.serviceEvents(arg);
    }
    catch (e) {
      console.error('Failed calling parent.serviceEvents with arg:\n', arg);
    }
  }, 1));

  const [co, setCo] = useState(0);
  useEffect(() => {
    // We need to update once to get map to work, strange...
    co === 0 && setTimeout(() => setCo(co + 1), 100);
  }, [co]);

  return <>
    <div>{co ? ' ' : ''}</div>
    <div className="map"></div>
    <div className="where"></div>
  </>;
}