// Write your code here
import {useState} from 'react'

import {MainContainer, SubContainer, Desc, LockBtn} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  const onToggleLock = () => {
    setIsLocked(prevValue => !prevValue)
  }

  return (
    <MainContainer>
      <SubContainer>
        <img
          src={
            isLocked
              ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
          }
          alt={isLocked ? 'lock' : 'unlock'}
        />
        <Desc>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</Desc>
        {isLocked ? (
          <LockBtn type="button" onClick={onToggleLock}>
            Unlock
          </LockBtn>
        ) : (
          <LockBtn type="button" onClick={onToggleLock}>
            Lock
          </LockBtn>
        )}
      </SubContainer>
    </MainContainer>
  )
}

export default Unlock
