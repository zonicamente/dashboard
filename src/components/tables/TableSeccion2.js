import React from 'react';

const TableSection2 = ({ sectionTitle, rowData }) => {
  return (
    <div className="table-section">
      <h2>{sectionTitle}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            {rowData.length > 0 &&
              Object.keys(rowData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSection2;
