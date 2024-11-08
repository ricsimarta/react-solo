import { useEffect, useState } from 'react'
import Page from './components/Page';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=20&start-with-lorem=1")
      .then(res => res.json())
      .then(fetchData => setData(fetchData));
  }, []);

  return (
    <>
      {data 
        ? <Page data={data} setData={setData} />
        : <p>loading...</p>
      }
    </>
  )
}

export default App
