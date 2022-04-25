import { Routes, Route } from 'react-router-dom'
import HomePage from './views/pages/Home'
import AboutPage from './views/pages/About'
import ProjectPage from './views/pages/Project'
import PlaygroundPage from './views/pages/Playground'
import ContactPage from './views/pages/Contact'
import NotFoundPage from './views/pages/NotFound'

const RootRouter = () => {
  return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='about' element={<AboutPage />} />
			<Route path='project' element={<ProjectPage />} />
			<Route path='playground' element={<PlaygroundPage />} />
			<Route path='contact' element={<ContactPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

export default RootRouter