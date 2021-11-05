import React, { useContext, useState } from "react";
import { AppContext } from "./AppContextProvider";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 5);

const Reservation = () => {
  const [name, setName] = useState("");
  const {
    dispatch,
    state: { reservations },
  } = useContext(AppContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const customer = { name, customerId: nanoid() };
    dispatch({ type: "ADD CUSTOMER TO RESERVATION LIST", payload: customer });
    setName("");
  };

  const onClickHandler = (customer) => {
    console.log(customer);
    const tableId = nanoid();
    dispatch({
      type: "ADD CUSTOMER TO TABLE LIST",
      payload: { tableId, customer },
    });
    dispatch({
      type: "REMOVE CUSTOMER FROM RESERVATION LIST",
      payload: { customerId: customer.customerId },
    });
  };
  return (
    <div className="reservation">
      <h2>Reservation</h2>
      {/* Form */}
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <button type="submit">Add To List</button>
      </form>
      {/* List */}

      <ul>
        {reservations.map((customer) => (
          <li key={customer.customerId} style={{ marginTop: "1rem" }}>
            Customer #{customer.customerId}: {customer.name}{" "}
            <button onClick={() => onClickHandler(customer)}>
              Add to table
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservation;
