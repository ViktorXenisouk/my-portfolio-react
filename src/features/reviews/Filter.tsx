import { MenuItem, Select, InputLabel, FormControl, ToggleButtonGroup, ToggleButton, Paper, } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SortOption, SortOrder } from './types';
import { useLabels } from '../../features/labels/useLabels';

type Props = {
    onOptionChange: (option: SortOption) => void
    onOrderChange: (order: SortOrder) => void
    option: SortOption,
    order: SortOrder,
}

const Filter: React.FC<Props> = ({ onOptionChange, onOrderChange, option, order }) => {

    const labels = useLabels()

    const handleSortOptionChange = (event: any) => {
        const newSort = event.target.value as SortOption;
        onOptionChange(newSort)
    };

    const handleSortOrderChange = (
        _: any,
        newOrder: SortOrder | null
    ) => {
        if (newOrder) {
            onOrderChange(newOrder)
        }
    };

    return (
        <Paper sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start',my:1,p:2 }}>
            <FormControl sx={{ width: '150px' }} size="small">
                <InputLabel sx={{ minWidth: 50 }} id="sort-by-label">{labels.sort_by}</InputLabel>
                <Select
                    labelId="sort-by-label"
                    value={option}
                    onChange={handleSortOptionChange}
                    label="sort-by"
                >
                    <MenuItem value="date">{labels.date}</MenuItem>
                    <MenuItem value="rate">{labels.rate}</MenuItem>
                </Select>
            </FormControl>

            <ToggleButtonGroup
                value={order}
                exclusive
                onChange={handleSortOrderChange}
                size="small"
            >
                <ToggleButton value="asc" aria-label="по возрастанию">
                    <ArrowUpwardIcon fontSize="small" />
                </ToggleButton>
                <ToggleButton value="desc" aria-label="по убыванию">
                    <ArrowDownwardIcon fontSize="small" />
                </ToggleButton>
            </ToggleButtonGroup>
        </Paper>
    );
};

export default Filter;