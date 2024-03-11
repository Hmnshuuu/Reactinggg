import React from 'react' ;  

function Card(){

    const data = [
        {name: "Tum Se Hi", description:"lorem ipsum dolor sit amet consectetur consectetur adipiscing elit esse cillum dolore magna"},
        {name: "Mera Mann", description:"lorem ipsum dolor sit amet consect et dolor consectetur adipiscing elit esse cillum dolore magna"}
    ]
    const onClickFtn = () => {alert("download hora h")};
    return (
        <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
            {data.map((item,index) => (
                <div className='w-60 px-3 py-2 bg-zinc-100 rounded-md' key={index}>
                <h3 className='font-semibold text-xl'>{item.name}</h3>
                <p className='text-xs mt-2'>{item.description}</p>
                <button onClick={onClickFtn} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 mt-2'>Download Now</button>
                </div>
            ))}
        </div>
    )
}
export default Card;
