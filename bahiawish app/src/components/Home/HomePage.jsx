import HeroSection from './HeroSection'
import iphone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

const HomePage = () => {
	return (
		<>
			<HeroSection
				title='Buy iPhone 14 Pro'
				subtitle='Experiencie de power of the latest iPhone 14 with our most Pro camera ever.'
				link='/product/6624196c756990cfba9940a6'
				image={iphone}
			/>
			<FeaturedProducts />
			<HeroSection
				title='Build The Ultimate Setup'
				subtitle='You can add Studio Display and colour-matched Magic accesories to your bag after configure your Mac mini.'
				link='/product/6624196c756990cfba9940ae'
				image={mac}
			/>
		</>
	)
}

export default HomePage
