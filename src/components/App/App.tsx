import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '../../styles/index.scss'

import Header from '../Header'
import Loading from '../Loading'

const MainPage = lazy(() => import('../../pages/MainPage'))
const AboutPage = lazy(() => import('../../pages/AboutPage'))
const ContactPage = lazy(() => import('../../pages/ContactPage'))
const NewsPage = lazy(() => import('../../pages/NewsPage'))

const App: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'New title 1',
      content: 'News Content 1',
      image: 'https://images.unsplash.com/photo-1631771970274-d7f0442bd28b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80',
      publishDate: (new Date().toDateString())
    },
    {
      id: 2,
      title: 'New title 2',
      content: 'News Content 2',
      image: 'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg',
      publishDate: (new Date().toDateString())
    },
    {
      id: 3,
      title: 'New title 3',
      content: 'News Content 3',
      image: 'https://yourblogworks.com/wp-content/uploads/2016/07/Free-images-1024x683.jpg',
      publishDate: (new Date().toDateString())
    },
    {
      id: 4,
      title: 'New title 4',
      content: 'News Content 4',
      image: 'https://img.freepik.com/premium-photo/hand-holding-camera-dslr-travel-river-sunset-holiday-travel-vintage_10541-1063.jpg',
      publishDate: (new Date().toDateString())
    }
  ]

  const searchAutocomplite = [
    {
      text: "Hello",
      rating: 0.3,
    },
    {
      text: "test",
      rating: 0.4,
    },
    {
      text: "esim",
      rating: 0.1,
    },
    {
      text: "barev",
      rating: 0.8,
    }
  ]

  return (
    <BrowserRouter>
      <div className='app'>
        <Header items={searchAutocomplite} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/article/:id' element={<NewsPage news={news} />} />
            <Route path='/' element={<MainPage news={news} />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App