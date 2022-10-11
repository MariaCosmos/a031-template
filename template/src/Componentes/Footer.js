import React from "react"
import { RedesSociais } from "./RedesSociais"
import { Copywrite } from "./Copywrite"

export function Footer(){
  return(
    <div>
      <p>Isso é um Footer!</p>
      <RedesSociais/>
      <Copywrite/>
    </div>
  )
}