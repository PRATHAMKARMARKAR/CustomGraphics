import characterImage from '../../../assets/CharacterImage.png';
import comicImage from '../../../assets/ComicImage.png';
import { ProjectCard } from '../../../common/ProjectCard';

const ProcreateView1 = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        <div className="lg:col-span-12 h-[200px] relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
            <div className="md:col-span-5 h-full">
              <ProjectCard
                className="w-full h-full min-h-[180px]"
                titleText="Procreate"
                borderTextPosition={["top", "bottom"]}
                variant="outline"
              />
            </div>
            <div className="md:col-span-7 h-full relative overflow-visible">
              <div className="w-full h-full min-h-[180px] border-2 border-orange-500 rounded-lg relative bg-white">
                <p className="absolute top-3 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-800 z-20 bg-white/90 px-2 py-1 ">
                  Character creation/storyboarding for Brand Identity
                </p>
              </div>
              {/* Business people image positioned below heading, centered, and slightly overflowing */}
              <img 
                src={characterImage} 
                alt="Business People" 
                className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[105%] h-[75%] object-contain z-10 pointer-events-none"
              />
            </div>
          </div>
        </div>
                    

      </div>

      <div className="grid  grid-cols-12 gap-4">
        <div className="col-span-12 relative">
          <div className="w-full h-32 border-2 border-orange-500 rounded-lg overflow-hidden">
            <img 
              src={comicImage} 
              alt="Comic Strip" 
              className="w-full h-full object-cover"
            />
            {/* Comic text positioned in the gap between panels */}
            <div className="absolute right-60 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="writing-mode-vertical text-orientation-mixed">
                <span className="text-2xl font-bold text-gray-700 bg-white/90 px-2 py-1 rounded rotate-180 " 
                      style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
                  Comic?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcreateView1;