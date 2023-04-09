import { useParams } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box'

const ProfileDetails = () => {

    const {id} = useParams();
    return (
        <Box>
            <h1>{id}</h1>
        </Box>
    )
}
 
export default ProfileDetails;