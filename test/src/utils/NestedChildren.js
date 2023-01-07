import React from 'react'

function NestedChildren(children, __fn__) {
    return React.Children.map(
        children, 
        function(__c__) {
            const __not__= !React.isValidElement(__c__)
            
            if(__not__)
                return __c__
    
            if(__c__.props.children)
                __c__= React.cloneElement(
                            __c__,
                            {children: NestedChildren(__c__.props.children, __fn__)}
                        )
                        
            if(__c__.props.name) return __fn__(__c__)
            else
                return __c__               
        }
    )
}
export const nestedChildren = NestedChildren;