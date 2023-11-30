export default function UserCard({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: "60px",
      }}
    >
      <img width={150} src={data.avatar} alt={data.fname} />
      <b>
        {data.fname}
        {data.lname}
      </b>
    </div>
  );
}
