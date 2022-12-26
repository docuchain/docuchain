import React from 'react';
import ActiveNtwCnt from './utils/ActiveNtwCnt';
import TotalBlockCnt from './utils/TotalBlockCnt';
import TotalServiceCnt from './utils/TotalServiceCnt';
import TotalTransCnt from './utils/TotalTransCnt';
import './Dashboard.scss'
import NtwTransSpeed from './utils/NtwTransSpeed';
import NtwBlockTime from './utils/NtwBlockTime';
import ServiceEnrollCnt from './utils/ServiceEnrollCnt';
import ActiveNtw from './utils/ActiveNtw';


const dashboard = () => {
    
    return (
        <div className='dashboard' > 
            <TotalBlockCnt/>
            <TotalTransCnt/>
            <ActiveNtwCnt/>
            <TotalServiceCnt/>
            <NtwTransSpeed />
            <NtwBlockTime />
            <ServiceEnrollCnt/>
            <ActiveNtw/>
        </div>
    );
};

export default dashboard;