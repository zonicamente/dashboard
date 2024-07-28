import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MainTable_f1 from '../components/tables/MainTable_f1';


const Etapa1 = () => {
    return (
        <div className="container mt-4">
            <h3>FASE 01</h3>
            <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="tab1" title="Resumen">
                    <div>
                        <MainTable_f1 fase='Fase 01'/>
                    </div>
                </Tab>
                <Tab eventKey="tab2" title="Detalle">
                    <div>
                        <h3>Fase 1</h3>
                        <p>Aquí va el contenido de la segunda pestaña.</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Etapa1;
