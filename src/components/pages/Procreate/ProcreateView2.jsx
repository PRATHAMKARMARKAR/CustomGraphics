import { ProjectCard } from '../../../common/ProjectCard';
import imageBundle from '../../../assets/ImageBundle.svg';
import fillerSvg from '../../../assets/Filler.svg';

const ProcreateView2 = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 h-[445px] ">
        <div className='col-span-1'></div>
        <div className="lg:col-span-4 flex flex-col gap-4 h-full">
          <div className="flex-1">
          <ProjectCard
                className="w-full h-full min-h-[180px]"
                titleText="Procreate"
                borderTextPosition={["top", "bottom"]}
                variant="outline"
              />
          </div>
          <div className="flex-1">
            <div className="w-full h-full border-2 border-orange-500 rounded-lg bg-white flex flex-col items-start justify-center px-6">
              <p className="text-3xl font-medium text-gray-500 leading-tight overflow-hidden">Level up your</p>
              <p className="text-3xl font-bold text-orange-500 leading-tight overflow-hidden">Social Media</p>
              <p className="text-3xl font-medium text-gray-500 leading-tight overflow-hidden">Game</p>
            </div>
          </div>

        </div>

        <div className='col-span-1'></div>

        <div className="lg:col-span-5 relative h-full">
  <div className="w-full h-full border-2 border-orange-500 rounded-lg bg-white relative overflow-hidden flex">
    <div className="w-11/12 h-full  border-orange-500">
      <img
        src={imageBundle}
        alt="Image Bundle"
        className="w-full h-full object-contain object-left"
      />
    </div>

    <div className="w-1/12 h-full">
      <img
        src={fillerSvg}
        alt="Filler"
        className="w-full h-full object-contain "
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ProcreateView2;
