import Paragraph from "./Paragraph";
import './Page.css';
import { useEffect, useState } from "react";

function Page({ data, setData }) {
  const [sortBy, setSortBy] = useState("asc");
  const [searchString, setSearchString] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const handleClick = () => {
    if (sortBy === "asc") {
      setData(data => [...data].sort((a, b) => a.localeCompare(b)));
      setSortBy("desc");
    } else {
      setData(data => [...data].sort((a, b) => b.localeCompare(a)));
      setSortBy("asc");
    }
  }

  useEffect(() => {
    if (searchString.length > 2) setFilteredArray([...data].filter(string => string.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, setData, data])

  return (
    <div className="page">
      <button onClick={handleClick}>sort by {sortBy}</button>
      <input type="text" placeholder="search" value={searchString} onChange={({ target }) => setSearchString(target.value)} />
      {searchString.length > 2
        ? filteredArray.map((text, index) => <Paragraph key={index} text={text} index={index} />)
        : data.map((text, index) => <Paragraph key={index} text={text} index={index} />)
      }
    </div>
  )
}

export default Page;