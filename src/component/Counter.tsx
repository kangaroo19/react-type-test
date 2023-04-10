import * as React from 'react';
import { useState } from 'react';

interface Istate{
    counter:number
}

export function Counter(){
    const [state,setState]=useState<Istate>({
        counter:0
    })
    return(
        <div>

        </div>
    )
}