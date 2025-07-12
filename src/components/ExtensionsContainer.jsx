import React,{useState,useEffect} from 'react'
import { extensions as initialExtensions } from '../assets/assets'
import ToggleBtn from './ToggleBtn'

const ExtensionsContainer = () => {

  const [extensions, setExtensions] = useState(() => {
    const saved = localStorage.getItem('extensionsData')
    return saved ? JSON.parse(saved) : initialExtensions
  })

  const [filter, setFilter] = useState('All')

    
   useEffect(() => {
    localStorage.setItem('extensionsData', JSON.stringify(extensions))
  }, [extensions])

  

  let  updateExtensions = (index)=>{
        setExtensions((prev)=>(
            prev.map((e,i)=>(
                i === index ? {...e,active: !e.active} : e
            ))
        ))
  };

  

    const filteredExtensions = extensions.filter(e =>
        filter === 'All' ? true :
        filter === 'Active' ? e.active :
        !e.active
    );

   

  return (
    <div className='container mx-auto px-4 md:px-6 lg:px-10 py-10'>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 mb-8">
            <h1 className='text-title font-bold text-4xl'>Extensions List</h1>

            
        <ul className='space-x-5'>
            <button className={`btn border-none ${filter === 'All' ? 'bg-primary text-white' : ''}`} onClick={() => setFilter('All')}>All</button>
            <button className={`btn border-none ${filter === 'Active' ? 'bg-primary text-white' : ''}`} onClick={() => setFilter('Active')}>Active</button>
            <button className={`btn border-none ${filter === 'Inactive' ? 'bg-primary text-white' : ''}`} onClick={() => setFilter('Inactive')}>Inactive</button>
        </ul>

    </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredExtensions.map((e,index)=>(
                <div key={index} className="bg-card flex flex-col justify-between min-h-55 shadow-lg rounded-xl p-5 transition duration-300 ease-in-out">
                    <div className="flex gap-3.5 items-start">
                        <img src={e.img} alt={e.name} loading='lazy' className='mt-1' />
                        <div>
                            <h2 className='text-title font-bold text-2xl'>{e.name}</h2>
                            <p className='text-text'>{e.description}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button className='btn'>                                  
                            Remove
                        </button>

                    <ToggleBtn isOn={e.active} onToggle = {()=>updateExtensions(index)}/>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default ExtensionsContainer