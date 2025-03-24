import { JSX } from 'react'
// Components
import SubHeading from '../shared/sub-headings'
import MainFoods from "../shared/mainfoods"

// Icons
import { faBowlFood } from "@fortawesome/free-solid-svg-icons"


const catagories = ():JSX.Element => {
     return (
          <div className='mx-6 md:mx-16'>
               <SubHeading icon={faBowlFood} title="Main Foods" />
               <MainFoods />
               <SubHeading icon={faBowlFood} title="Street Foods" />
          </div>
     )
}

export default catagories
