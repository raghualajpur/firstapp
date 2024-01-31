import './index.css'

const TODOitem=(props)=>{
    
   const {id,title,disc,del}=props
        return(
            <>
            <li key={id} className='list-element'>
                <div className='texters'>
                    <h1 className='heading'>{title}</h1>
                    <p>{disc}</p>
                </div>
                <div>
                    <button onClick={()=>(del(id))}>Delete</button>
                </div>
            </li>
            </>
        )
}

export default TODOitem