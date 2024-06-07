import { FC, useState } from 'react';
import Select, {
    components,
    DropdownIndicatorProps,
    SingleValue,
} from 'react-select';

import normalizedCategory from 'helpers/normalizedCategory';
import { useAppDispatch } from '../../hooks/store';
import { resetFilter } from '../../redux/filter/filter-slice';

import { IOption } from 'components/Filters/FilterByCategories';
import { icons } from 'assets/icons';

interface ICustomSelect {
    optionsArr: string[];
    placeholder: string;
    operation: (value: string) => void;
}

const CustomSelect: FC<ICustomSelect> = ({
    optionsArr,
    placeholder,
    operation,
}) => {
    const [, setSelectedOption] = useState<IOption | null>(null);
    const dispatch = useAppDispatch();

    const options: IOption[] = optionsArr.map((option) => ({
        value: option,
        label: normalizedCategory(option),
    }));

    const CustomDropdownIndicator = (props: DropdownIndicatorProps) => {
        return (
            <components.DropdownIndicator {...props}>
                <svg>
                    <use href={`${icons}#icon-arrow-down`}></use>
                </svg>
            </components.DropdownIndicator>
        );
    };

    const handleChange = (newValue: SingleValue<IOption>) => {
        if (newValue !== null) {
            setSelectedOption(newValue);
            if (newValue.value === 'Show all') {
                return dispatch(resetFilter());
            }
            operation(newValue.value);
        } else {
            setSelectedOption(null);
        }
    };
    return (
        <Select
            options={options}
            onChange={(newValue) =>
                handleChange(newValue as SingleValue<IOption> | null)
            }
            isSearchable={false}
            placeholder={placeholder}
            unstyled
            className="react-select-container"
            classNamePrefix="react-select"
            components={{ DropdownIndicator: CustomDropdownIndicator }}
        />
    );
};

export default CustomSelect;
