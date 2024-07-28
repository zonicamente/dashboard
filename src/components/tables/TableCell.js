import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TableCell = ({ content, className, isStatus  }) => {
  return (
    <td className={className}>
            {isStatus ? (
                content === 'ERROR' ? (
                    <>
                        <FaTimesCircle className="icon-error error" /> {/* Icono para ERROR */}
                        <span>{content}</span>
                    </>
                ) : (
                    <>
                        <FaCheckCircle className="icon-ok ok" /> {/* Icono para OK */}
                        <span>{content}</span>
                    </>
                )
            ) : (
                content
            )}
        </td>
  );
};

export default TableCell;
