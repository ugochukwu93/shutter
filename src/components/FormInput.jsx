
import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



 function FormInput( props) {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);

    const onChange = (event) => {
        if (event.target.value.length > 2) {
            setError({ text: '', error: false });
          } else {
            setText({ text: 'Invalid format', error: true });
        }
      };
    return (
        <div>
            
            <TextField
                text={text}
                onChange={onChange}
                error={error}
                required
                id="outlined-password-input"
                label={props.label}
                type="password"
                autoComplete="current-password"
                sx={{
                    m: 1,
                    width: 300,
                    color: 'success.main',
                    '& .MuiSlider-thumb': {
                      borderRadius: '1px',
                    },
                }}
            />
           
        </div>
    )
}

export default FormInput

