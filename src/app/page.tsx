import Hero from '@components/Basic/Hero';
import UserWeather from '@components/Complex/UserWeather';
import WorldWeather from '@components/Complex/WorldWeather';

export default function Home() {
  return (
    <div className='my-5'>
      <Hero />
      {/* <UserWeather /> */}
      <WorldWeather />
    </div>
  )
}