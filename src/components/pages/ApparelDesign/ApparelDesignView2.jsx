import { ProjectCard } from '../../../common/ProjectCard';
import CourageSpookedTShirt from '../../../assets/courage-spooked-tshirt.svg' 
import CourageFrontCenter from '../../../assets/courage-front-center.svg' 
import ToteBag1 from '../../../assets/ToteBag1.svg'
import ToteBag2 from '../../../assets/ToteBag2.svg'
import frontShirt from '../../../assets/front-box-tshirt.svg'
import johnnybravoShirt from '../../../assets/johnny-bravo-front-tshirt.svg'

const ApparelDesignView2 = () => {
    return (
        <div className="w-full h-full" style={{ overflow: 'visible' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
                <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className='grid grid-cols-12 h-[240px] gap-4'>
                        <div className='col-span-6 relative'>
                            <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-full flex items-center justify-center">
                            </div>
                            <img 
                                src={CourageSpookedTShirt}
                                className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-contain z-10'
                            />
                        </div>
                        <div className='col-span-6 flex flex-col gap-2 h-full relative'>
                            <div className='border-2 border-orange-500 rounded-lg bg-white p-4 h-full flex items-center justify-center'>
                            </div>
                            <img 
                            src={CourageFrontCenter}
                            className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 object-contain z-10'    
                            />

                            <div className="relative w-full h-full" >
                                <ProjectCard
                                    className="w-full h-full"
                                    titleText="Apparel Designs"
                                    borderTextPosition={["left", "right"]}
                                    variant="outline"
                                />
                                <p className='w-full text-center absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500'>Sneaker | Clothing | Lifestyle</p>
                            </div>
                            
                        </div>

                    </div>
                    <div className="flex gap-2 h-[140px] relative"  style={{overflow:'visible'}}>
                        <div className="border-2 border-orange-500 rounded-lg bg-white p-2 w-full relative">
                        </div>
                    </div>
                        <img 
                            src={ToteBag1}
                            alt="Black Tote Bag"
                            className="absolute bottom-[27%] h-1/3 left-[8%] object-cover z-20"
                        />
                        <img 
                            src={ToteBag2}
                            alt="White Tote Bag"
                            className="absolute h-1/3 bottom-[27%] left-[20%] object-cover z-20"
                        />
                         <img 
                        src={frontShirt}
                        className='absolute h-[25%] bottom-[34%] right-[34%] object-cover z-20'
                        />
                </div>
                <div className="lg:col-span-4 relative" style={{overflow : 'hidden'}}>
                    <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-full flex items-center justify-center">
                    </div>
                    <img 
                    src={johnnybravoShirt}
                    className='absolute h-[440px] left-10 object-cover top-0 '
                     />
                </div>
            </div>
        </div>
    );
};

export default ApparelDesignView2;
