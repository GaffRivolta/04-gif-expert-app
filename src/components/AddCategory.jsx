import React, {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim().length > 2){
            setCategories( categories => [value, ...categories]); // Con callback: categories aca es el estado anterior del array. Se puede usar para no tener que pasar el array por props
            setValue('');
        };  
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory
