import React from 'react'

const PageLoading = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center bg-white">
      <svg className="mx-auto" width="120" height="120" viewBox="0 0 38 38" stroke="#5264AE">
          <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)" strokeWidth="1">
                  <circle strokeOpacity=".3" cx="18" cy="18" r="18"/>
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"/>
                  </path>
              </g>
          </g>
      </svg>
    </div>
  )
}

export default PageLoading
