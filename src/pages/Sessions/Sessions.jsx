import React from 'react'
import PopularMovies from "../../components/PopularMovies"
import { useTranslation } from 'react-i18next'

const Sessions = () => {
  const {t} = useTranslation()
  document.title = (t("header.sessions"))
  return (
    <>
      <PopularMovies/>
    </>
  )
}

export default Sessions