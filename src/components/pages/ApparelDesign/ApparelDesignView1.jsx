import { ProjectCard } from '../../../common/ProjectCard';
import pinkPanther from '../../../assets/PinkPanther.svg';
import nike1 from '../../../assets/Nike1.svg';
import nike2 from '../../../assets/nike2.svg';
import nike3 from '../../../assets/nike3.svg';
import cgcourage from '../../../assets/CGCourage.svg';
import shirt1 from '../../../assets/shirt1.svg';
import shirt2 from '../../../assets/shirt2.svg';


const ApparelDesignView1 = () => {
    return (
        <div className="w-full h-full" style={{ overflow: 'visible' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full relative" style={{ overflow: 'visible' }}>
                <div className="md:col-span-2 flex flex-col gap-4 h-full relative" style={{ overflow: 'visible' }}>
                    <div className="border-2 border-orange-500 rounded-lg bg-white h-[90%] relative" style={{ overflow: 'visible' }}></div>
                    <img
                        src={pinkPanther}
                        alt="pink panther"
                        className="absolute -top-8 left-2.5 w-full h-[80%] object-cover z-20"
                        style={{ overflow: 'visible' }}
                    />
                    <img
                        src={nike1}
                        alt="nike sneaker"
                        className="absolute bottom-1 left-2 w-full h-[30%] object-cover z-20"
                        style={{ overflow: 'visible' }}
                    />
                </div>
                <div className="md:col-span-10 flex flex-col justify-center gap-2 relative overflow-hidden">
                    <div className='grid grid-cols-12 gap-1 relative'>
                        <div className='col-span-5 rounded-lg bg-white p-2 h-[250px] flex flex-col justify-center items-center gap-2 relative'>
                            <div className='w-full h-[50%] border-2 border-orange-500 rounded-lg relative'>
                            </div>
                            <div className='w-full h-[50%] relative'>
                                <ProjectCard
                                    className="w-full h-full"
                                    titleText="Apparel Designs"
                                    borderTextPosition={["left", "right"]}
                                    variant="outline"
                                />
                                <p className='w-full text-center absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-500'>Sneaker | Clothing | Lifestyle</p>
                            </div>
                            <img
                                src={nike2}
                                alt="nike sneaker"
                                className="absolute top-[42px] left-10 w-[174px] h-[50px] object-cover z-20"
                                style={{ overflow: 'visible' }}
                            />
                            <img
                                src={nike3}
                                alt="nike sneaker"
                                className="absolute top-[42px] right-24 w-[228px] h-[50px] object-cover z-20"
                                style={{ overflow: 'visible' }}
                            />
                        </div>

                        <div className='col-span-1'></div>
                        <div className='col-span-6 border-2 border-orange-500 rounded-lg bg-white p-6 h-[250px] flex flex-col justify-center items-center relative'>
                        </div>
                    </div>
                    <img 
                        src={cgcourage} 
                        alt='CG Courage' 
                        className='absolute top-[-21px] right-[100px] w-fit h-[515px] object-cover z-20' 
                    />

                    <div className='w-full h-[200px] border-2 border-orange-500 rounded-lg bg-white p-6 flex flex-col justify-center items-center relative'>
                    </div>
                     <img src={shirt1} alt='shirt design 1' className='absolute h-[250px] bottom-[-10px] left-0 object-cover z-20' />
                     <img src={shirt2} alt='shirt design 2' className='absolute h-[250px] bottom-[-10px] left-[18%] object-cover z-20' />
                </div>
            </div>
        </div>
    );
};

export default ApparelDesignView1;