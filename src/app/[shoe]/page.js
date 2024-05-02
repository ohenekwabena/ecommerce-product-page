import React from "react";

function ShoesPage({ params }) {
  console.log(params.shoe);
  return (
    <div>
      <h1>{params.shoe}</h1>
    </div>
  );
}

export default ShoesPage;
