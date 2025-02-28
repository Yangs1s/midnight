export const Plus = ({ color = "#fff" }: { color?: string }) => {

  return (<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5.67578V15.6758" stroke={color} strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M15 10.6758H5" stroke={color || "#fff"} strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>);
};
