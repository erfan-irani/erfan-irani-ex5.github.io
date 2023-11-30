export default function Pagination({ pageCount, page, onChange }) {
  return (
    <div style={{ margin: "15px 0 0 20px" }}>
      {[...Array(pageCount)].map((_, pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onChange(pageNumber + 1)}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor:
              pageNumber + 1 === page ? "#f9bfbf" : "rgb(202,233,243)",
            color: "black",
            cursor: pageNumber + 1 === page ? "not-allowed" : "pointer",
            marginRight: "8px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
          disabled={pageNumber + 1 === page}
        >
          {pageNumber + 1}
        </button>
      ))}
    </div>
  );
}
