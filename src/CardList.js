import React from 'react';
import Card from './Card';

import { robots } from './robot';

const CardList = () => {
    return (
        <div>
            {
                robots.map((r) => {
                    return <Card id={r.id} name={r.name} email={r.email}/>
                })
            }
        </div>        
    )
}

export default CardList;

