import { ProjectCard } from '../../../common/ProjectCard';
import fullProfileImage from '../../../assets/ProfilePageFullView.svg';
import chat from '../../../assets/Chat.svg';
import settings from '../../../assets/Settings.svg';
import marriageProfile from '../../../assets/MarriageProfile.svg';
import marriageProfile2 from '../../../assets/MarriageProfile2.svg';
import mutualConnection from '../../../assets/MutualConnections.svg';


const MatriMOView1 = () => {
    return (
        <div className="w-full h-full" style={{ overflow: 'visible' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4" style={{ overflow: 'visible' }}>
                <div className="lg:col-span-12 h-[445px] relative" style={{ overflow: 'visible' }}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full" style={{ overflow: 'visible' }}>
                        <div className="md:col-span-7 h-full relative" style={{ overflow: 'visible' }}>
                            <div className='w-full h-full border-2 border-orange-500 rounded-lg bg-white'></div>
                            
                            <div className='absolute left-10 top-1/2 transform -translate-y-1/2 flex items-center gap-10' style={{ zIndex: 5 }}>
                                <div style={{ height: '460px', width: 'auto' }}>
                                    <img src={fullProfileImage} alt='full profile image' className='h-full w-auto object-contain' />
                                </div>
                                <div style={{ height: '460px', width: 'auto' }}>
                                    <img src={chat} alt='chat' className='h-full w-auto object-contain' />
                                </div>
                                <div style={{ height: '460px', width: 'auto' }}>
                                    <img src={settings} alt='settings' className='h-full w-auto object-contain' />
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:col-span-5 h-full relative" style={{ overflow: 'visible' }}>
                            <ProjectCard
                                className="w-full min-h-[35%] mb-2"
                                titleText="MatriMo"
                                borderTextPosition={["left", "right"]}
                                variant="outline"
                            />
                            <p className='w-full text-center absolute bottom-2 z-50 top-30 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-500'>Community Based Matromony Application</p>

                            <div className='w-full mt-12 h-[calc(100%-45%-2px)] border-2 border-orange-500 rounded-lg relative bg-white' style={{ overflow: 'visible' }}>
                                <div className=' absolute left-10 top-1/2 transform -translate-y-[58%] flex items-center gap-12' style={{ zIndex: 5 }}>
                                    <div style={{ height: '280px', width: 'auto' }}>
                                        <img src={marriageProfile} alt='marriage profile' className='h-full w-auto object-contain' />
                                    </div>
                                    <div style={{ height: '280px', width: 'auto' }}>
                                        <img src={marriageProfile2} alt='marriage profile 2' className='h-full w-auto object-contain' />
                                    </div>
                                    <div style={{ height: '280px', width: 'auto' }}>
                                        <img src={mutualConnection} alt='mutual connection' className='h-full w-auto object-contain' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatriMOView1;