import React from 'react';
import TableSection from './TableSection';
import { data_f1 } from '../data/data_f1'; // Importa los datos

const MainTable_f1 = ({ fase }) => {
  return (
    <div className="container">
      <h1>{fase}</h1>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="1) # procesos Finalizados" prosTitle='PROCESO' rowData={data_f1.procesosFinalizados} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="2) # procesos con Errores" prosTitle='PROCESO' rowData={data_f1.procesosErrores} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="3) # registros de UCP vs WEB (Proyecciones)" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="4) Tendencia Enrolamientos" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="5) Tendencia Tiendas" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="6) # registros en BUCKET SAPP vs JSON vs FLEX TABLE" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="7) Tendencia Transacciones insertadas a capa TMP" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="8) # registros de Taggeo, Interacciones, UPAX" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
        <div className='col-12 col-lg-4'>
          <TableSection sectionTitle="9) # archivos CSV generados" prosTitle='CAPA UCP' rowData={data_f1.registrisUCPWEBpropoyecciones} />
        </div>
      </div>
    </div>
  );
};

export default MainTable_f1;
