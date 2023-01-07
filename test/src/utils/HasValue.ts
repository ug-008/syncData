function HasValue(__c__: any) 
{
    if(__c__.props.value)
        return __c__.props.value
    else if(__c__.props.value ==='') 
        return true
    else if(__c__.props.defaultValue)
        return __c__.props.defaultValue
    else if(__c__.props.defaultValue ==='')
        return true
    else return undefined
}

export const hasValue = HasValue