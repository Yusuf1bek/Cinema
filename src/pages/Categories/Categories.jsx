import React from 'react'
import Search from '../../components/Search'
import { useTranslation } from 'react-i18next'

const Categories = () => {
  const {t} = useTranslation()
  document.title = (t("header.search"))
  return (
    <>
      <Search/>
    </>
  )
}

export default Categories