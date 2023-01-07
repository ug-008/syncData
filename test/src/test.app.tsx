import * as React from 'react'
import SyncData from './SyncData'
import { SyncDataProps } from './SyncDataProps';
import TextField from '@mui/material/TextField'

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
                <input name='surname' value={''} pattern={''} />
                <div>
                    <input name='firstName' value={'Hi'} />
                </div>
                <TextField name='fullName' value={''} />
            </SyncData>
            <button 
                onClick={()=> {
                    syncRef.current?.validate?.()
                }}
            > 
                Submit 
            </button>
        </div>
    )
}