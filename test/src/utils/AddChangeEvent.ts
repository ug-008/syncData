import * as React from 'react';

interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    exit: boolean
}

function AddChangeEvent(__c__: any, updateSyncData: Function) {
    
    /**
     * 
     */
    const [value, setValue] = React.useState(
        __c__.props.value || 
        __c__.props.defaultValue || 
        __c__.props.defaultChecked ||
        ''
    )

    /**
     * Use effect to hook changes
     */
    React.useEffect(()=> updateSyncData?.(__c__.props.name, value), [value])

    /**
     * Defined element properties
     */
    const defOnChangeProp = __c__.props.onChange

    /**
     * 
     */
    __c__= React.cloneElement(
        __c__, 
        {
            value: value, 
            onChange: (e: ChangeEvent)=> {
                if(!e.exit) {
                    e.exit = true

                    var eValue,
                        eType = e.target.type
                    
                    switch(eType) {
                        case 'radio':
                            console.log(e.target.name, '--', e.target.checked)
                            if(e.target.checked)
                                eValue = (e.target as HTMLInputElement).value
                            break;
                        case 'checkbox':
                            eValue = (e.target as HTMLInputElement).value
                            if(!eValue)
                                eValue = e.target.checked
                        default: eValue = e.target.value;
                    }
                    setValue(eValue)
                    defOnChangeProp?.(e)

                }
            }
        }
    )

    return __c__

}

export const addChangeEvent = AddChangeEvent