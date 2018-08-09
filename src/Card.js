import React from 'react';


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
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='hummer' src={`https://robohash.org/${id}?200x200`}/>
            <div className='f1 tc'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;

