import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ rowData }) => {
  const rowColors = [
    { id: '90_SAPP', color: '#f0f0f0' }, // Gris claro
    { id: 2, color: '#e0e0e0' }, // Gris un poco más oscuro
    { id: 3, color: '#d0d0d0' }  // Gris más oscuro
  ];
  return (
    <tr style={{ backgroundColor: '#000' }}>
      <TableCell content={rowData.proceso} />
      <TableCell content={rowData.indicador} className='d-none d-md-block'/>
      <TableCell content={rowData.estatus} className={rowData.estatus === 'ERROR' ? 'error' : 'ok'} isStatus/>
    </tr>
  );
};

export default TableRow;
