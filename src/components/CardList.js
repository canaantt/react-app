import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    if(false){
        throw new Error('Oops!');
    }
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

