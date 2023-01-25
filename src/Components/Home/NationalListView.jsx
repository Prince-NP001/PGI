import React from "react";
import "../../styles/NationalListViews.css";

export default function NationalListView() {
  return (
    <div className="div-table">
      <table className="list-view-table">
        <tr>
          <th>States</th>
          <th>Daksh</th>
          <th>Utkarsh</th>
          <th>Atti-utam</th>
          <th>Uttam</th>
          <th>Prachesta-1</th>
          <th>Prachesta-2</th>
          <th>Prachesta-3</th>
          <th>Akanshi-1</th>
          <th>Akanshi-2</th>
          <th>Akanshi-3</th>
        </tr>
        <NewTR
          key={1}
          data={["Andaman & Nicobar Islands", 3, 0, 5, 0, 0, 7, 0, 0, 0, 0]}
        />
        <NewTR
          key={2}
          data={["Andhra Pradesh", 9, 0, 6, 0, 7, 0, 0, 0, 0, 0]}
        />
        <NewTR
          key={3}
          data={["Arunachal Pradesh", 5, 0, 0, 2, 0, 0, 0, 0, 0, 0]}
        />
        <NewTR key={4} data={["Assam", 0, 9, 0, 0, 0, 0, 10, 0, 3, 0]} />
        <NewTR key={5} data={["Bihar", 0, 1, 0, 0, 1, 0, 0, 2, 0, 0]} />
        <NewTR key={6} data={["Chandigarh", 0, 0, 0, 5, 0, 0, 0, 1, 0, 0]} />
        <NewTR key={7} data={["Chhattisgarh", 0, 0, 0, 7, 0, 2, 0, 6, 0, 0]} />
        <NewTR
          key={8}
          data={[
            "Daman & Diu and Dadra & Nagar Haveli",
            0,
            0,
            0,
            3,
            0,
            8,
            0,
            1,
            0,
            0,
          ]}
        />
        <NewTR key={9} data={["Delhi", 0, 0, 3, 0, 0, 0, 0, 0, 0, 0]} />
        <NewTR key={10} data={["Goa", 0, 0, 0, 4, 0, 0, 0, 0, 1, 0]} />
        <NewTR key={11} data={["Gujarat", 0, 2, 0, 0, 1, 0, 0, 3, 0, 0]} />
        <NewTR key={12} data={["Haryana", 0, 0, 0, 0, 5, 0, 2, 5, 0, 0]} />
        <NewTR
          key={13}
          data={["Himachal Pradesh", 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]}
        />
        <NewTR
          key={14}
          data={["Jammu & Kashmir", 0, 1, 0, 0, 6, 0, 0, 0, 0, 0]}
        />
        <NewTR key={15} data={["Jharkhand", 0, 0, 0, 3, 0, 0, 9, 0, 0, 0]} />
        <NewTR key={16} data={["Karnataka", 0, 0, 0, 4, 0, 1, 5, 0, 0, 0]} />
        <NewTR key={17} data={["Kerala", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
        <NewTR key={18} data={["Ladakh", 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]} />
        <NewTR key={19} data={["Lakshadweep", 0, 0, 7, 0, 9, 0, 0, 0, 0, 0]} />
        <NewTR
          key={20}
          data={["Madhya Pradesh", 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]}
        />
        <NewTR key={21} data={["Maharashtra", 0, 0, 0, 0, 5, 0, 0, 0, 0, 0]} />
        <NewTR key={22} data={["Manipur", 0, 0, 0, 0, 0, 9, 0, 0, 0, 0]} />
        <NewTR key={23} data={["Meghalaya", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
        <NewTR key={24} data={["Mizoram", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
        <NewTR key={25} data={["Nagaland", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
        <NewTR key={26} data={["Odisha", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
      </table>
    </div>
  );
}

const NewTR = (props) => {
  return (
    <tr>
      {props.data.map((val) => {
        return <td>{val}</td>;
      })}
    </tr>
  );
};
