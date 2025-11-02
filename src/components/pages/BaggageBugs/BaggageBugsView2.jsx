import { ProjectCard } from '../../../common/ProjectCard';
import CodeSSLeft from '../../../assets/CodeSSLeft.svg'
import TextSS from '../../../assets/TextSS.png'
import filler2 from '../../../assets/Filler2.svg'
import CodeSS2 from '../../../assets/CodeSS2.svg'
import CodeSS3 from '../../../assets/CodeSS3.svg'

const BaggageBugsView2 = () => {
    return (
        <div className="w-full h-full" style={{ overflow: 'visible' }}>
            <div className='flex flex-col gap-2 h-full w-full relative'>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[40%]">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-full flex items-center justify-center">
                        </div>

                    </div>
                    <div className="lg:col-span-8 relative" style={{ overflow: 'hidden' }}>
                        <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-full flex items-center justify-center">
                        </div>
                               <img
                    className='absolute right-2 top-0 h-[260px]  object-contain' 
                    src={CodeSS3}/>
                    </div>
                </div>
                {/*  lower part */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[60%]">
                    <div className='col-span-6 border-2 border-orange-500 rounded-lg bg-white p-2 w-full relative'>

                    </div>
                    <img
                    className='absolute left-[25%] top-[37%] h-[240px]  object-contain' 
                    src={TextSS}/>
                    <img
                    className='absolute top-[44%] left-[40%] object-contain h-[210px]' 
                    src={filler2}/>

                    <div className='col-span-6'>
                        <ProjectCard
                            className="w-full h-full"
                            titleText="Baggage Bugs"
                            borderTextPosition={["top", "bottom"]}
                            variant="filled"
                        />
                    </div>
                </div>
            <img 
            src={CodeSSLeft}
            className='absolute top-1 right-[44%] -translate-0  h-[98%]  w-full object-contain'
             />
              <img 
            src={CodeSS2}
            className='absolute top-[-1%] right-[14%] -translate-0  h-[44%]  w-full object-contain'
             />
            
            </div>
        </div>
    );
};

export default BaggageBugsView2;
