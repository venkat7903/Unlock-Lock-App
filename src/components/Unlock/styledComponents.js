// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const SubContainer = styled.div`
  width: 90%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Desc = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 60px;
  font-family: 'Roboto';
`

export const LockBtn = styled.button`
  background-color: #06b6d4;
  height: 40px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
`
