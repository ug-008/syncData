import * as React from 'react'
import SyncData from './SyncData'
import { SyncDataProps } from './SyncDataProps';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { SyncIgnore } from './SyncIgnore';
import { SyncGroup } from './SyncGroup';

export default function TestApp() {
    const syncRef= React.useRef<SyncDataProps>();
    return(
        <div>
            <SyncData 
                refData={syncRef} 
                validate={function(data: any){
                    console.log('data6 ', data)
                }}>
                <div >
                    Sync data container
                </div>
                <SyncGroup 
                    data-sync='nativeCheckBox' 
                    singleChoice >
                    <input type='checkbox' value='1'/><br/>
                    <input type='checkbox' value='2'/><br/>
                </SyncGroup>
                <Checkbox
                    name='muiCheckbox'
                    sx={{
                        '&.Mui-checked': {
                        },
                    }}
                />
                <br />
            </SyncData>
            <button 
                onClick={()=> {
                    console.log(syncRef.current)
                }}
            > 
                Submit 
            </button>
        </div>
    )
}