import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [isPortableDevice, setIsPortableDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px), (max-height: 597px)");

    setIsPortableDevice(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsPortableDevice(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white ${isPortableDevice ? 'text-[40px]' : 'text-[65px]'}`}>
            Привет, я <span className="text-[#915eff]">Юрий</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 ${isPortableDevice ? 'text-[25px]' : 'text-[30px]'}`}>
            Я разрабатываю пользовательские интерфейсы{' '}
            <br className="md:block hidden" />и веб-приложения
          </p>
        </div>
      </div>

      <ComputersCanvas isPortableDevice={isPortableDevice} />

      <div className='absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className={`${isPortableDevice ? 'w-[30px] h-[54px]' : 'w-[35px] h-[64px]'} rounded-3xl border-4 border-secondary flex justify-center items-start p-2`}>
            <motion.dev
              animate={{
                y: isPortableDevice ? [-12, 14, -12] : [-10, 22, -10],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1"
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-secondary"
              />
            </motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
