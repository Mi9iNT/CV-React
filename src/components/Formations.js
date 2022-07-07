import React from 'react';


function Formations({ datas }) {
    console.log(datas);
    return (
        <div className='cursus'>
            
            
            {datas.map((datas) => 
                <div className="grid_row" key={datas.id}>
                    <div className="grid_item">
                        <h3 className="grid_title" >{datas.title}</h3>
                    </div>
                
                    <div className="grid_item">
                        <p className="grid_date">{datas.date}</p>
                        <p className="grid_location">{datas.location}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Formations;