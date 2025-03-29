import { JSX } from 'react'
import Streetfoods from './streetfoods'
// Components
import SubHeading from './sub-headings'
import MainFoods from "./mainfoods"
import Drinks from './drinks'


// Icons
import { faBowlFood,faBurger, faMugHot } from "@fortawesome/free-solid-svg-icons"

const catagories = (): JSX.Element => {
     return (
          <div className='mx-2 md:mx-16'>
               <SubHeading icon={faBowlFood} title="Main Foods" />
               <MainFoods />
               <SubHeading icon={faBurger} title="Street Foods" />
               <Streetfoods />
               <SubHeading icon={faMugHot} title="Drinks" />
               <Drinks />
          </div>
     )
}

export default catagories