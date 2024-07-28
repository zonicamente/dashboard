import React, { useState } from 'react';
import TableRow from './TableRow';

const TableSection = ({ sectionTitle, rowData, prosTitle }) => {

  const [isVisible, setIsVisible] = useState(false);

  const handleTitleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="table-section table-responsive table-scroll formatoTabla">
      <h5 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>{sectionTitle}</h5>

      {isVisible && (
        <table className="table table-bordered mb-0 text text-justify" >
          <thead style={{ fontSize: '15px' }}>
            <tr>
              <th>{prosTitle}</th>
              <th className='d-none d-md-block'>INDICADOR</th>
              <th>ESTATUS</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '13px' }}>
            {rowData.map((row, index) => (
              <TableRow key={index} rowData={row} />
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
};

export default TableSection;
