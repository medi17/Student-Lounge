import { JSX } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type Props = {
     icon: IconProp,
     title: string
}

const SubHeadings = ({icon, title}:Props):JSX.Element => {
     return (
          <div className="inline-block bg-gray-hepta px-4 py-1 my-6 rounded-2xl text-xs md:my-10 md:text-[16px]">
               <FontAwesomeIcon icon={icon} className="mr-2"/>
               {title}
          </div>
     )
}

export default SubHeadings
