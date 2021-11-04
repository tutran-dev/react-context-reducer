import React from "react";

const Reservation = () => {
  return (
    <div className="reservation">
      <h2>Reservation</h2>
      {/* Form */}
      <form>
        <input type="text" name="name" id="name" placeholder="Customer Name" />{" "}
        <button type="submit">Add To List</button>
      </form>
      {/* List */}
      <ul>
        <li>
          Customer #1: Tu Tran <button>Add to table</button>
        </li>
      </ul>
    </div>
  );
};

export default Reservation;
