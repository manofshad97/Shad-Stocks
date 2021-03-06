import React from 'react'
import Card from './Card'

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card>
      <span
        className={`absolute left-4 ${
          window.screen.width < 500 && symbol.length >= 3 ? 'top-5' : 'top-4'
        } text-neutral-400 text-lg xl:text-xl 2xl:text-2xl`}
      >
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span
          className={`${
            window.screen.width < 500 && symbol.length >= 3
              ? 'pl-11'
              : window.screen.width < 500
              ? 'pl-4'
              : 'pl-0'
          } text-md xl:text-4xl 2xl:text-5xl flex items-center`}
        >
          ${(price + change).toFixed(2)}
          <span
            className={`${
              window.screen.width < 500 && symbol.length >= 3 ? 'hidden' : ''
            } text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2`}
          >
            {currency}
          </span>
        </span>
        <span
          className={`text-base xl:text-xl 2xl:text-2xl ${
            change > 0 ? 'text-lime-500' : 'text-red-500'
          }`}
        >
          {parseFloat(change).toFixed(2)} <span>({parseFloat(changePercent).toFixed(2)})%</span>
        </span>
      </div>
    </Card>
  )
}

export default Overview
