import { Background } from '../components/Background'
import LoadingBar from '../components/playgrounds/LoadingBar'
import MusicPlayer from '../components/playgrounds/MusicPlayer'

const HomePage = () => {
  return (
		<Background>
			<LoadingBar />
			<MusicPlayer />
		</Background>
	)
}

export default HomePage