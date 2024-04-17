import Btn from './Btn'
const Landing = () => {
    return (
        <div className=' text-center relative z-40 mt-[87px] text-white flex justify-between p-2 gap-4'>
            <div style={{ height: 'calc(100vh - 100px)' }} className='md:w-2/3 lg:w-[50%] w-full mx-auto flex flex-col gap-4 justify-center items-center '>
                <h1 className=' text-[40px] font-bold '>
                    Explore the Possibilities of&nbsp;AI&nbsp;Chatting with Brainwave
                </h1>
                <p className='text-gray-300'>Unleash the power of AI within Brainwave. Upgrade your productivity
                    with Brainwave, the open AI chat app.</p>
                <Btn primary={true}>
                    <span>Get Started</span>
                </Btn>
            </div>
        </div>
    )
}

export default Landing