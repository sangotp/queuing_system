import Icon from "@ant-design/icons/lib/components/Icon"

const StackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_57_4501)">
<path d="M1.66663 14.166L9.99996 18.3327L18.3333 14.166" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.66663 10L9.99996 14.1667L18.3333 10" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99996 1.66602L1.66663 5.83268L9.99996 9.99935L18.3333 5.83268L9.99996 1.66602Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_57_4501">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
)

export const Stack = () => {
  return (
    <Icon component={StackIcon} />
  )
}