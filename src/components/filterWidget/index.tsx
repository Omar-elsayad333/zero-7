import { colors } from 'styles/colors'
import style from './filterWidget.module.css'
import SelectInput from 'components/Inputs/SelectInput'

// MUI
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const FilterWidget: React.FC<Props> = ({ data }) => {
    return (
        <div className={style.container}>
            <div className={style.filtersContainer} data-aos="fade-right" data-aos-duration="1000">
                <SelectInput 
                    data={data.genders}
                    value={''}
                    onChange={()=>{}}
                    placeholder='Genders'
                    disabled={false}
                />
                <SelectInput 
                    data={data.categorys}
                    value={''}
                    onChange={()=>{}}
                    placeholder='Categorys'
                    disabled={false}
                />
            </div>
            <svg className={style.filter} width="25" height="25" viewBox="0 0 24 24" fill={colors.primary.main} xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5ZM6.17071 5C6.58254 3.83481 7.69378 3 9 3C10.3062 3 11.4175 3.83481 11.8293 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H11.8293C11.4175 8.16519 10.3062 9 9 9C7.69378 9 6.58254 8.16519 6.17071 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H6.17071ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H12.1707ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19C9.55228 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17ZM6.17071 17C6.58254 15.8348 7.69378 15 9 15C10.3062 15 11.4175 15.8348 11.8293 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H11.8293C11.4175 20.1652 10.3062 21 9 21C7.69378 21 6.58254 20.1652 6.17071 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H6.17071Z" fill="inherit"/>
            </svg>
            <div className={style.filterControllers} data-aos="fade-left" data-aos-duration="1000">
                <Typography variant='h4' color={'primary'}>
                    Clear Filters
                </Typography>
            </div>
        </div>
    );
}

export default FilterWidget;