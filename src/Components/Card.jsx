import React from 'react'   

function Card(){
    const data = [
        {image: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww' ,name:"Amazon Basics",description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, perferendis nemo? Voluptas."},
        {image: 'https://images.unsplash.com/photo-1612705166546-641e59cef326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZ2F0ZXxlbnwwfHwwfHx8MA%3D%3D' ,name:"Daily Basics",description: "Lorem, ipsum doluptas."},
        {image: 'https://images.unsplash.com/photo-1552858725-2758b5fb1286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkfGVufDB8fDB8fHww' ,name:"Weekend Basics",description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, perferendis nemo? Voluptas . Ea, perferendis nem."}

        ]

    return (
        <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            {data.map((elem,index)=>(
                <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300 '>
                    <img className='w-full h-full object-cover' src={elem.image} alt="" />
                </div>
                <div className='w-full px-3 py-4 '>
                    <h2 className='font-semibold'>{elem.name}</h2>
                    <p className='text-xs mt -3'>{elem.description}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Card;
//ese hum reusable components bnate h
