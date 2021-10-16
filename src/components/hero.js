import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
 return (
   <StaticImage
     src="../images/mac.jpg"
     alt="MacBook"
     placeholder="blurred"
     layout="fixed"
     height={200}
   />
 )
}