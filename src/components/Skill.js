import React from 'react';

const Skill = ( {title, rating} ) => {
    return (
        <div>
            <div className="skill">
                <h3 className='skill-title'>⊙{title}</h3>
                <div className="skills-wallet">
                    <div className="skill-wallet">{ rating }</div>
                </div>
            </div>
        </div>
    );
};

export default Skill;