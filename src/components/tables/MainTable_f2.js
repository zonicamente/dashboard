import React from 'react';
import TableSection2 from './TableSeccion2';

const data = [
  { PROCESO_PYTHON: "00_SAPP_TOPICOS_Descarga.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "00_SAPP_TOPICOS_log_Descarga.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "01_SAPP_TOPICOS_Carga_a_Vertica.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "02_SAPP_TOPICOS_TX_Carga_a_Vertica.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "10_BANCA_DIG_ACTIVACIONES.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "20_BANCA_DIG_TX.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "20_SAPP_TX.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "21_SAPP_TX_MAC_WAC.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "22_SAPP_TX_WEB_USABILIDAD.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "23_BANCA_DIG_REFRESH.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "26_SAPP_TX_Historia_Act.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "27_BANCA_DIG_Borrar_2_dias.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "27_SAPP_TX_Reproceso_Historia.py", FECHA_FIN: "21/07/2024" },
  { PROCESO_PYTHON: "31_SAPP_INTERACCIONES_Carga_a_Vertica.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "32_SAPP_TAGGEO_Carga_a_Vertica.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "50_BIENESTAR_MOVIMIENTOS.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "50_SAPP_MOVIMIENTOS.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "50_WEB_DIG_MOVIMIENTOS.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "51_SAPP_SALDOS.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "56_BIENESTAR_MOVIMIENTOS_Historia_Act.py", FECHA_FIN: "21/07/2024" },
  { PROCESO_PYTHON: "56_SAPP_MOV_Y_SALDOS_Historia_Act.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "56_WEB_DIG_MOVIMIENTOS_Historia_Act.py", FECHA_FIN: "21/07/2024" },
  { PROCESO_PYTHON: "61_SAPP_CLIENTES_TXND_ZEUS.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "66_SAPP_SIN_USO.py", FECHA_FIN: "21/07/2024" },
  { PROCESO_PYTHON: "81_GASTOS_RH_Validacion_FASE_09.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_INV_EFECTIVO_Validacion_FASE_11.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_PLANTILLA_Validacion_FASE_08.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_PTOS_VENTA_Validacion_FASE_10.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_SAPP_Validacion_FASE_01.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_SAPP_Validacion_FASE_02.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_SAPP_Validacion_FASE_03.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_SAPP_Validacion_FASE_04.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_SAPP_Validacion_FASE_06.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_SAPP_Validacion_FASE_06_REFRESH.py", FECHA_FIN: "22/07/2024" },
  { PROCESO_PYTHON: "81_TIEMPOAIRE_Validacion_FASE_07.py", FECHA_FIN: "22/07/2024" },
  // Agrega más datos según sea necesario
];

const MainTable_f2 = () => {
  return (
    <div className="container">
      <h1>FASE 02</h1>
      <TableSection2 sectionTitle="Datos obtenidos" rowData={data} />
      {/* Agrega más secciones según sea necesario */}
    </div>
  );
};

export default MainTable_f2;
