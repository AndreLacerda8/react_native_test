import styled from 'styled-components/native'

const ActionButtonStyle = styled.TouchableOpacity<{ outline?: boolean }>`
  background-color: ${props => props.outline ? 'transparent' : '#27C383'};
  border: ${props => props.outline ? '1px solid #27C383' : '0px'};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`

const ActionText = styled.Text<{ outline?: boolean }>`
  color: ${props => props.outline ? '#27C383' : '#fff'};
  font-size: 15px;
  font-weight: ${props => props.outline ? 'normal' : 'bold'};
  padding: 10px 20px;
`

export function ActionButton({ action, outline, children }: { action: string, outline?: boolean, children?: any }){
  return (
    <ActionButtonStyle outline={outline ? true : false} activeOpacity={0.5}>
      {children && children}
      <ActionText outline={outline ? true : false}>{action}</ActionText>
    </ActionButtonStyle>
  )
}
