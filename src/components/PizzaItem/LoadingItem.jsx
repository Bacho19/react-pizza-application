import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingItem() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={5}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="122" r="122" />
      <rect x="0" y="261" rx="0" ry="0" width="280" height="25" />
      <rect x="0" y="307" rx="0" ry="0" width="280" height="77" />
      <rect x="0" y="407" rx="5" ry="5" width="70" height="25" />
      <rect x="150" y="399" rx="0" ry="0" width="131" height="41" />
    </ContentLoader>
  )
}

export default LoadingItem
