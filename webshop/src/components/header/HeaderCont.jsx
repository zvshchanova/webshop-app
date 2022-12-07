import React from 'react'

export default function HeaderCont() {
  return (
    <div>
     HeaderCont:
      <HeaderLogo />
      <HeaderNav />
    </div>
  )
}

export function HeaderLogo() {
    return (
      <div>
        <img src="https://d1lhyycl5p8pom.cloudfront.net/media/image/ff/be/cd/apocalyptica.png" alt="Official Apocalyptica Shop"></img>
      </div>
    )
  }

  export function HeaderNav() {
    return (
      <div>
        HeaderNav:  Icons
      </div>
    )
  }