import React from 'react'
import Widget from '../../components/widget/Widget'

const Homepage = () => {
  return (
    <>
      <span>// При открытии страницы начинается загрузка виджета. Статус загрузки меняется каждые 3 секунды, по истечении 10 секунд рандомно происходит либо успешная загрузка виджета, либо ошибка</span><br/><br/>
      <Widget />
    </>
  )
}

export default Homepage