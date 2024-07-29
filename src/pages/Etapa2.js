import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MainTableF2 from '../components/tables/MainTableF2';


const Etapa2 = () => {
    return (
        <div className="container mt-4">
            <h3>FASE 02</h3>
            <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="tab1" title="Resumen">
                    <div>
                        <MainTableF2 fase='Fase 02'/>
                    </div>
                </Tab>
                <Tab eventKey="tab2" title="Detalle">
                    <div>
                        <h3>Fase 2</h3>
                        <p>Aquí va el contenido de la segunda pestaña.</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Etapa2;
