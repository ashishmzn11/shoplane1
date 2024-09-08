import React from "react";

const NewPage = () => {
  return (
    <div>
      <form className="form-main">
        <table>
          <tr>
            <td>
              {" "}
              <p>First Name</p>
              <input type="text" required></input>
              <br />
            </td>
            <td>
              {" "}
              <p>Last Name</p>
              <input type="text" required></input>
              <br />
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              <p>Street Address</p>
              <input type="text" required></input>
              <br />
            </td>
            <td>
              {" "}
              <p>Address Line 2</p>
              <input type="text" required></input>
              <br />
            </td>
          </tr>

          <tr>
            <td>
              <p>country</p>
              <input type="dropdown" required></input>
            </td>
            <td>
              {" "}
              <p>Postal Code</p>
              <input type="number"></input>
              <br />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p>City</p>
              <input type="text" required></input>
            </td>
            <td>
              <p>State/Province</p>
              <input type="dropdown" required></input>
              <br />
            </td>
          </tr>
        </table>

        <p>email</p>
        <input type="email" placeholder="email@email.com" required></input>
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewPage;
