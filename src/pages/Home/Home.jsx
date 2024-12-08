import React from 'react'
import SwiperGalery from '../../components/SwiperGalery'
import Inweeks from '../../components/Inweeks'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const {t} = useTranslation()
  document.title = (t("header.afisha"))
  return (
    <section className='container'>
      <SwiperGalery/>
      <Inweeks/>
    </section>
  )
}

export default Home