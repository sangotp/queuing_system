import Icon from "@ant-design/icons/lib/components/Icon"

const MonitorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.36663 1.66602H14.625C17.5916 1.66602 18.3333 2.40768 18.3333 5.36602V10.641C18.3333 13.6077 17.5916 14.341 14.6333 14.341H5.36663C2.40829 14.3493 1.66663 13.6077 1.66663 10.6493V5.36602C1.66663 2.40768 2.40829 1.66602 5.36663 1.66602Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 14.3496V18.3329" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.66663 10.834H18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.25 18.334H13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)

export const Monitor = () => {
  return (
    <Icon component={MonitorIcon} />
  )
}