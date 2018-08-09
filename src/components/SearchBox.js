import React from 'react';
import 'tachyons';

const SearchBox = ({ searchfield, searchChange}) => {
    // const {name, email, id} = props;
    return (
        <div className='pa2'>
        <input 
        className='pa3 ba b--geen bg-lightest-blue' 
        type="search" placeholder='search robots'
        onChange={searchChange} />
        </div>
    )
}
export default SearchBox;