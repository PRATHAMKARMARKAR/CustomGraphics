import { ProjectCard } from '../../../common/ProjectCard';
import filler3 from '../../../assets/Filler3.svg'
import CodeSS4 from '../../../assets/CodeSS4.svg'
import loginButton from '../../../assets/LoginButton1.svg'
import Register2 from '../../../assets/Register2.svg'
import BBButton from '../../../assets/BBButton.svg'
import BBLogo2 from '../../../assets/BBLogo2.png'

const BaggageBugsView1 = () => {
    return (
        <>
        <div className="w-full h-full" style={{ overflow: 'visible' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full relative" style={{ overflow: 'visible' }}>
                <div className="md:col-span-8 flex flex-col gap-4 h-full relative" style={{ overflow: 'visible' }}>
                    <div className="border-2 border-orange-500 rounded-lg bg-white h-full relative" style={{ overflow: 'visible' }}></div>
                    <img 
                    className='absolute top-0 left-20 object-contain w-[80%] h-[110px]'
                    src={filler3} />
                </div>
                <div className="md:col-span-4 flex flex-col justify-center gap-2 relative " style={{ overflow: 'visible' }}>
                    <div className='grid grid-cols-12 gap-1 relative h-1/2'>
                        <div className='col-span-5 rounded-lg bg-white flex flex-col justify-center items-center gap-2 relative'>
                            <div className='w-full h-full border-2 border-orange-500 rounded-lg relative p-4 flex flex-col items-center justify-center gap-3 overflow-hidden'>
                                <img src={BBButton} alt="BB Button" className=' object-contain rounded-full shadow-md' />
                                <img src={loginButton} alt="Login Button" className=' object-contain rounded-full shadow-md' />
                                <img src={Register2} alt="Register Button" className='object-contain rounded-full shadow-md' />
                            </div>
                        </div>
                        <div className='col-span-2'></div> 
                        <div className='col-span-5 relative border-2 border-orange-500 rounded-lg bg-white p-6 flex flex-col justify-center items-center'>
                        </div>
                                <img src={BBLogo2} alt="BB Logo" className='absolute object-contain h-[150px] -right-8 top-5' />
                    </div>
                    <div className='w-full h-[200px] '>
                        <ProjectCard
                            className="w-full h-full"
                            titleText="Baggage Bugs"
                            borderTextPosition={["top", "bottom"]}
                            variant="filled"
                        />
                    </div>
                </div>
            </div>

        </div>
<div
  className="fixed top-[25%] left-15 w-[60%] h-[370px] z-40 flex justify-center items-center"
>
  <img
    src={CodeSS4}
    alt="Code Screenshot"
    className="w-full h-full object-cover"
  />
</div>

        </>
    );
};

export default BaggageBugsView1;