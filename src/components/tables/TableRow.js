import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ rowData }) => {
  return (
    <tr style={{ backgroundColor: '#000' }}>
      <TableCell content={rowData.proceso} />
      <TableCell content={rowData.indicador} className='d-none d-md-block'/>
      <TableCell content={rowData.estatus} className={rowData.estatus === 'ERROR' ? 'error' : 'ok'} isStatus/>
    </tr>
  );
};

export default TableRow;
