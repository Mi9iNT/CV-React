import React from 'react';

function Experiences({ datas }) {
    console.log(datas);
    return (
        <div className='cursus_exp'>
            
            
            {datas.map((data) => 
                <div className="grid_row_exp" key={data.id}>
                    <div className="grid_item_exp2">
                        <h3 className="grid_title_exp" >{data.title}</h3>
                    </div>
                
                    <div className="grid_item_exp">
                        <ul className="grid_mission_exp">
                            {data.missions.map((missions) => 
                                <li className='missions_exp'key={missions.id}>{missions.title}
                                </li>
                             )}
                        </ul>
                        <p className="grid_date_exp">{data.date}</p>
                        <p className="grid_location_exp">{data.location}</p>
                        
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experiences;