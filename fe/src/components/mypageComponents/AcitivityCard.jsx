import React from 'react'
import { ActivityStyleCardTitleStyle } from './MyPage.styled'
import { ActivityCardTextStyle } from './MyPage.styled'
export default function Answers({mypageOptions}) {

  const pageOptionLowerCase = mypageOptions.toLowerCase();

  return (
    <>
    <ActivityStyleCardTitleStyle >
     0 {mypageOptions}
    </ActivityStyleCardTitleStyle>
    <ActivityCardTextStyle>
      You have not participated in any <span>{pageOptionLowerCase}</span>
      </ActivityCardTextStyle>
    </>
  )
}
