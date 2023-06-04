import Image from 'next/image'

import { WeatherProps, daytime } from '@shared/types/weather';

import weatherImage from '@/public/morning.png';
import { getRandomImage } from '@utils/image';

export default function WeatherCard({ weather }: WeatherProps) {
  const weatherConditionImage = weather ? `https:${weather?.condition.icon}` : weatherImage;

  let daytime: daytime = new Date(weather?.localtime).getHours() > 18 ? 'night' : 'day';

  if(!daytime) daytime = 'day'

  return (
    <div className={`bg-white rounded mx-2 px-2 bg-[url(${getRandomImage(daytime)})]`}>
      <div className='flex-between'>
        <h3 className='hero-weather font-bold font-inter text-left text-[35px]'>{weather?.name}</h3>
        <div className='flex-center'>
          <h4 className='font-bold font-inter text-xl'>{weather.temp_c}°C/{weather.temp_f}°F</h4>
          <Image
            src={weatherConditionImage}
            alt="Weather condition"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className='flex-end px-2 mx-2'>
        {weather?.condition.text}
      </div>
      <div>
        <p>{weather.region}</p>
        <div className='flex-end p-2'>
          <Image
            src={getRandomImage(daytime)}
            alt="Weather condition"
            width={50}
            height={50}
            className='w-60 h-40'
          />
        </div>
      </div>
    </div>
  )
}