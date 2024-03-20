import { icons } from 'assets/icons';
import normalizedCategory from 'helpers/normalizedCategory';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import './react-select.scss';

const ReactSelect = ({ arr, placeholder, action }) => {
    const dispatch = useDispatch();

    const handleChange = selectedOption => {
        dispatch(action(selectedOption.value));
    };

    const CustomDropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <svg>
                    <use href={`${icons}#icon-arrow-down`}></use>
                </svg>
            </components.DropdownIndicator>
        );
    };
    const options = arr.map(item => ({
        value: item,
        label: normalizedCategory(item),
    }));

    return (
        <Select
            options={options}
            placeholder={placeholder}
            isSearchable={false}
            onChange={handleChange}
            className="react-select-container"
            classNamePrefix="react-select"
            components={{ DropdownIndicator: CustomDropdownIndicator }}
            unstyled
        />
    );
};

export default ReactSelect;
