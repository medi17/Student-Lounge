
type Props = {
     className:string
}

const orders = ({className}: Props) => {
     return (
          <div className={className}>
               <h2>Orders</h2>
          </div>
     )
}

export default orders
