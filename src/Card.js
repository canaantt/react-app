import React, { Component } from 'react';


// class Card extends Component {
//     render() {
//         return (
//             <div className='f1 tc'>
//                 <p>This is Card Component.</p>
//             </div>
//         )
//     }
// }


const Card = ({name, email, id}) => {
    // const {name, email, id} = props;
    return (
        <div className='bg-light-purple dib br3 pa5 ma2 grow bw4 shadow-5'>
            <img alt='hummer' src={`https://robohash.org/${id}?200x200`}/>
            <div clasName='f1 tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;

