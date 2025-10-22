import { ProjectCard } from '../../../common/ProjectCard';

const ApparelDesignView2 = () => {
    return (
        <div className="w-full h-full" style={{ overflow: 'visible' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
                {/* Left Column - Stacked Items */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    {/* Courage Spooked T-shirt */}
                    <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-[200px] flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-800 mb-2">Courage Spooked</div>
                            <div className="text-sm text-gray-600">White t-shirt with monster shadow</div>
                            <div className="text-xs text-gray-500 mt-1">CUS2म logo</div>
                        </div>
                    </div>
                    
                    {/* Tote Bags Row */}
                    <div className="flex gap-2 h-[150px]">
                        {/* Black Tote Bag */}
                        <div className="border-2 border-orange-500 rounded-lg bg-white p-2 flex-1 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-sm font-bold text-gray-800 mb-1">Black Tote</div>
                                <div className="text-xs text-gray-600">Japanese character</div>
                            </div>
                        </div>
                        
                        {/* Beige Tote Bag */}
                        <div className="border-2 border-orange-500 rounded-lg bg-white p-2 flex-1 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-sm font-bold text-gray-800 mb-1">Beige Tote</div>
                                <div className="text-xs text-gray-600">Skull with wings</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 3D Cube T-shirt */}
                    <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-[150px] flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-800 mb-2">3D Cube Design</div>
                            <div className="text-sm text-gray-600">Minimalist line drawing</div>
                        </div>
                    </div>
                </div>

                {/* Middle Column - Narrower Section */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    {/* Courage Thumbs Up T-shirt */}
                    <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-[200px] flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-800 mb-2">Courage Thumbs Up</div>
                            <div className="text-sm text-gray-600">White t-shirt</div>
                        </div>
                    </div>
                    
                    {/* Central Text Block */}
                    <div className="border-2 border-orange-500 rounded-lg bg-white p-6 h-[300px] flex flex-col justify-center items-center relative">
                        {/* Vertical text on sides */}
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-bold text-gray-800 whitespace-nowrap">
                            Custom Graphics Custom G
                        </div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-bold text-gray-800 whitespace-nowrap">
                            Custom Graphics Custom G
                        </div>
                        
                        {/* Main content */}
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">Apparel Designs</div>
                            <div className="text-orange-500 text-xl mb-4">→</div>
                            <div className="text-lg text-gray-600">Sneaker | Clothing | Lifestyle</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Large Johnny Bravo T-shirt */}
                <div className="lg:col-span-4">
                    <div className="border-2 border-orange-500 rounded-lg bg-white p-4 h-[500px] flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800 mb-4">Johnny Bravo</div>
                            <div className="text-lg text-gray-600 mb-2">Motorcycle Design</div>
                            <div className="text-sm text-gray-500">Large display t-shirt</div>
                            <div className="text-xs text-gray-400 mt-2">Blonde pompadour character</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApparelDesignView2;
