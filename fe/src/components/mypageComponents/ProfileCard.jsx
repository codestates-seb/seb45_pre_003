import React from 'react'
import { ActivityStyleCardTitleStyle } from './MyPage.styled'
import { ActivityCardTextStyle } from './MyPage.styled'
export default function Answers({about}) {
  return (
    <>
    <ActivityStyleCardTitleStyle >
     About
    </ActivityStyleCardTitleStyle>
    <ActivityCardTextStyle>
    Your about me section is currently blank. Would you like to add one? <span>{about}</span>
      </ActivityCardTextStyle>
    </>
  )
}