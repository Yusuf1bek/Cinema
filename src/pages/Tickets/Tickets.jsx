import React from 'react'
import Ganre from "../../components/Ganre"
import { useTranslation } from 'react-i18next'

const Tickets = () => {
  const {t} = useTranslation()
  document.title = (t("header.genre"))
  return (
    <>
      <Ganre/>
    </>
  )
}

export default Tickets