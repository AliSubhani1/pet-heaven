import React from 'react';
import DogsGroup from '../../Assets/DogsGroup.svg';
import { Slide } from 'react-awesome-reveal';
import { OneTimeAnimations } from '../../Utils/constants/index.tsx';
import useAnimationOnce from '../../CustomHooks/useAnimationOnce.ts';

const TopBanner: React.FC = () => {
  const shouldAnimate = useAnimationOnce(OneTimeAnimations.TOP_BANNER_ANIMATION);

  const bannerContent = (
  <div className="bg-yellow-0 rounded-lg flex sm:flex-row flex-col items-center p-2 w-[80%] mx-auto">
    <div className="w-[90%] mx-auto sm:w-1/2">
      <img src={DogsGroup} alt="Dogs" className="w-full h-auto" />
    </div>

    <div className="w-[90%] mx-auto sm:w-1/2 px-6 text-center sm:text-right">
      <h2 className="text-3xl font-bold text-black">One More Friend</h2>
      <h3 className="text-2xl font-bold text-black mt-2">
        Thousands More Fun!
      </h3>
      <p className="text-gray-800 mt-4">
        Having a pet means you have more joy, a new friend, a happy person
        who will always be with you to have fun. We have 200+ different
        pets that can meet your needs!
      </p>
    </div>
  </div>
  )
  return (
    <section className="flex items-center justify-center py-10">
      {shouldAnimate ? <Slide direction="left" triggerOnce={true}>{bannerContent}</Slide> : bannerContent}      
    </section>
  );
};

export default TopBanner;
