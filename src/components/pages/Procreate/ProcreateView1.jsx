import characterImage from '../../../assets/CharacterImage.png';
import comicImage from '../../../assets/ComicImage.png';
import { ProjectCard } from '../../../common/ProjectCard';
import './a.css'

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
                <p className="absolute top-3 left-3 text-lg font-semibold text-gray-800 z-20 bg-white/90 px-2 py-1 rounded shadow-sm">
                  Character creation/storyboarding for Brand Identity
                </p>
              </div>
              {/* Business people image positioned outside and overlapping the div */}
                        <img 
                src={characterImage} 
                alt="Business People" 
                className="custom absolute top-4 -right-2 w-[95%] h-[85%] object-contain z-10 pointer-events-none"
                style={{ 
                  transform: 'translateX(5px)'
                }}
              />
            </div>
          </div>
        </div>
                    

      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 relative">
          <div className="w-full h-32 border-2 border-orange-500 rounded-lg overflow-hidden">
            <img 
              src={comicImage} 
              alt="Comic Strip" 
              className="w-full h-full object-cover"
            />
            <div className="absolute right-3 bottom-0 top-0 flex items-center justify-center">
              <div className="transform origin-center translate-y-10 whitespace-nowrap">
                <span className="text-xl font-bold text-gray-700 bg-white/80 px-2 py-1 rounded">Comic?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcreateView1;