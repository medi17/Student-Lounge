
type Props = {
     title: string,
     passage: string
}

const contactCatagories = ({title, passage}:Props) => {
     return (
          <div className="mt-3 bg-white py-3 px-3 rounded-xl max-w-[500px] md:max-w-[300px]">
               <h1 className="text-xl mb-2">{title}</h1>
               <p className="text-sm font-light">{passage}</p>
          </div>
     )
}

export default contactCatagories
