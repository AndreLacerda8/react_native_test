import styled from 'styled-components/native'

const FormStyle = styled.View`
  background-color: #fff;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
`

export function Form(props: { children: any }){
  return (
    <FormStyle>
      {props.children}
    </FormStyle>
  )
}