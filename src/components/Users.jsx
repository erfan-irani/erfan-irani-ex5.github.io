import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import PerPage from "./PerPage";

export default function Test() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    fetch(
      "https://www.melivecode.com/api/users?page=" +
        page +
        "&per_page=" +
        perPage
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCharacters(res.data);
        setPageCount(res.total_pages);
      });
  }, [page, perPage]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
         
        }}
      >
        <Pagination
          pageCount={pageCount}
          page={page}
          onChange={(pageIndex) => setPage(pageIndex)}
        />

        <PerPage
          perPage={perPage}
          onChange={(dropDownChoice) => setPerPage(dropDownChoice)}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingLeft: "20px",
        }}
      >
        {characters.map((character) => (
          <UserCard key={character.id} data={character} />
        ))}
      </div>
    </div>
  );
}
