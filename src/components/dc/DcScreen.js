import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h2>DC Screen</h2>
            <hr />
            
            <HeroList publisher='DC Comics' />
        </div>
    )
}
