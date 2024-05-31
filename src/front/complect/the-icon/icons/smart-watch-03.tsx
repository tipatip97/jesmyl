import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z',
  d2: 'M9 22H15',
  d3: 'M9 2H15',
  d4: 'M9.3881 9.33138C10.3267 8.78308 11.1459 9.00404 11.638 9.356C11.8398 9.50032 11.9406 9.57248 12 9.57248C12.0594 9.57248 12.1602 9.50032 12.362 9.356C12.8541 9.00404 13.6733 8.78308 14.6119 9.33138C15.8437 10.051 16.1224 12.425 13.2812 14.4278C12.74 14.8093 12.4694 15 12 15C11.5306 15 11.26 14.8093 10.7188 14.4278C7.8776 12.425 8.15632 10.051 9.3881 9.33138Z',
  d5: 'M5.40796 5.96243C4.5 7.06878 4.5 8.71252 4.5 12C4.5 15.2875 4.5 16.9312 5.40796 18.0376C5.57418 18.2401 5.75989 18.4258 5.96243 18.592C7.06878 19.5 8.71252 19.5 12 19.5C15.2875 19.5 16.9312 19.5 18.0376 18.592C18.2401 18.4258 18.4258 18.2401 18.592 18.0376C19.5 16.9312 19.5 15.2875 19.5 12C19.5 8.71252 19.5 7.06878 18.592 5.96243C18.4258 5.75989 18.2401 5.57418 18.0376 5.40796C16.9312 4.5 15.2875 4.5 12 4.5C8.71252 4.5 7.06878 4.5 5.96243 5.40796C5.75989 5.57418 5.57418 5.75989 5.40796 5.96243ZM11.638 9.356C11.1459 9.00404 10.3267 8.78308 9.3881 9.33138C8.15632 10.051 7.8776 12.425 10.7188 14.4278C11.26 14.8093 11.5306 15 12 15C12.4694 15 12.74 14.8093 13.2812 14.4278C16.1224 12.425 15.8437 10.051 14.6119 9.33138C13.6733 8.78308 12.8541 9.00404 12.362 9.356C12.1602 9.50032 12.0594 9.57248 12 9.57248C11.9406 9.57248 11.8398 9.50032 11.638 9.356Z',
  d6: 'M8 22C8 21.4477 8.44772 21 9 21H15C15.5523 21 16 21.4477 16 22C16 22.5523 15.5523 23 15 23H9C8.44772 23 8 22.5523 8 22Z',
  d7: 'M8 2C8 1.44772 8.44772 1 9 1H15C15.5523 1 16 1.44772 16 2C16 2.55228 15.5523 3 15 3H9C8.44772 3 8 2.55228 8 2Z',
  d8: 'M12.0489 3.75H12.0489H11.9511H11.9511C10.3488 3.74999 9.07947 3.74998 8.07525 3.86868C7.04428 3.99055 6.19558 4.24638 5.48663 4.8282C5.24612 5.02558 5.02558 5.24612 4.8282 5.48663C4.24638 6.19558 3.99055 7.04428 3.86868 8.07525C3.74998 9.07947 3.74999 10.3488 3.75 11.9511V11.9511V12.0489V12.0489C3.74999 13.6512 3.74998 14.9205 3.86868 15.9248C3.99055 16.9557 4.24638 17.8044 4.8282 18.5134C5.02558 18.7539 5.24612 18.9744 5.48663 19.1718C6.19558 19.7536 7.04428 20.0095 8.07525 20.1313C9.07945 20.25 10.3488 20.25 11.951 20.25H11.951H11.9511H12.0489H12.049H12.049C13.6512 20.25 14.9206 20.25 15.9248 20.1313C16.9557 20.0095 17.8044 19.7536 18.5134 19.1718C18.7539 18.9744 18.9744 18.7539 19.1718 18.5134C19.7536 17.8044 20.0095 16.9557 20.1313 15.9248C20.25 14.9206 20.25 13.6512 20.25 12.049V12.049V12.0489V11.9511V11.951V11.951C20.25 10.3488 20.25 9.07944 20.1313 8.07525C20.0095 7.04428 19.7536 6.19558 19.1718 5.48663C18.9744 5.24612 18.7539 5.02558 18.5134 4.8282C17.8044 4.24638 16.9557 3.99055 15.9248 3.86868C14.9205 3.74998 13.6512 3.74999 12.0489 3.75ZM14.9899 8.68405C13.8048 7.99175 12.7034 8.22815 11.9997 8.69505C11.296 8.22815 10.1945 7.99175 9.00945 8.68405C8.09079 9.22072 7.61597 10.3166 7.78308 11.5032C7.95111 12.6964 8.74724 13.9561 10.2864 15.041L10.3546 15.0893C10.8374 15.4307 11.2893 15.7503 11.9997 15.7503C12.71 15.7503 13.1619 15.4307 13.6447 15.0893L13.7129 15.041C15.2521 13.9561 16.0482 12.6964 16.2162 11.5032C16.3834 10.3166 15.9085 9.22072 14.9899 8.68405Z',
  d9: 'M12.0489 3.75C13.6512 3.74999 14.9205 3.74998 15.9248 3.86868C16.9557 3.99054 17.8044 4.24638 18.5134 4.8282C18.7539 5.02558 18.9744 5.24612 19.1718 5.48663C19.7536 6.19558 20.0095 7.04428 20.1313 8.07525C20.25 9.07945 20.25 10.3488 20.25 11.951V11.9511V12.0489V12.049C20.25 13.6512 20.25 14.9206 20.1313 15.9248C20.0095 16.9557 19.7536 17.8044 19.1718 18.5134C18.9744 18.7539 18.7539 18.9744 18.5134 19.1718C17.8044 19.7536 16.9557 20.0095 15.9248 20.1313C14.9206 20.25 13.6512 20.25 12.049 20.25H12.0489H11.9511H11.951C10.3488 20.25 9.07945 20.25 8.07525 20.1313C7.04428 20.0095 6.19558 19.7536 5.48663 19.1718C5.24612 18.9744 5.02558 18.7539 4.8282 18.5134C4.24638 17.8044 3.99054 16.9557 3.86868 15.9248C3.74998 14.9205 3.74999 13.6512 3.75 12.0489V11.9511C3.74999 10.3488 3.74998 9.07947 3.86868 8.07525C3.99054 7.04428 4.24638 6.19558 4.8282 5.48663C5.02558 5.24612 5.24612 5.02558 5.48663 4.8282C6.19558 4.24638 7.04428 3.99054 8.07525 3.86868C9.07947 3.74998 10.3488 3.74999 11.9511 3.75H12.0489Z',
  d10: 'M11.9997 8.69505C12.7034 8.22815 13.8048 7.99175 14.9899 8.68405C15.9085 9.22072 16.3834 10.3166 16.2162 11.5032C16.0482 12.6964 15.2521 13.9561 13.7129 15.041L13.6447 15.0893C13.1619 15.4307 12.71 15.7503 11.9997 15.7503C11.2893 15.7503 10.8374 15.4307 10.3546 15.0893L10.2864 15.041C8.74724 13.9561 7.95111 12.6964 7.78308 11.5032C7.61597 10.3166 8.09079 9.22072 9.00945 8.68405C10.1945 7.99175 11.296 8.22815 11.9997 8.69505Z',
  d11: 'M19.5 19.5V4.5H4.5V19.5H19.5Z',
  d12: 'M8 22H16',
  d13: 'M8 2H16',
  d14: 'M14.3918 9.19923C13.2753 8.61642 11.9996 9.54359 11.9996 9.54359C11.9996 9.54359 10.9696 8.70481 9.60721 9.19923C7.94235 9.80334 7.7996 13.524 11.9996 15.0534C16.1996 13.524 16.0685 9.90141 14.3918 9.19923Z',
  d15: 'M16 23H8V21H16V23Z',
  d16: 'M16 3H8V1H16V3Z',
  d17: 'M4.5 3.75C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75H4.5ZM11.2971 15.5588C11.4357 15.6111 11.7016 15.6925 11.8015 15.7231L11.8122 15.7263C11.935 15.758 12.0641 15.758 12.1869 15.7264L12.1978 15.723L12.1979 15.723C12.298 15.6924 12.5637 15.611 12.7022 15.5588C12.9819 15.4532 13.3685 15.2838 13.7129 15.0409C15.2521 13.956 16.0482 12.6963 16.2162 11.5031C16.3834 10.3164 15.9085 9.2206 14.9899 8.68393C13.8048 7.99163 12.7034 8.22802 11.9997 8.69493C11.296 8.22802 10.1945 7.99163 9.00945 8.68393C8.09079 9.2206 7.61597 10.3164 7.78308 11.5031C7.95111 12.6963 8.74724 13.956 10.2864 15.0409C10.6309 15.2838 11.0175 15.4532 11.2971 15.5588Z',
} as const;

export const IconSmartWatch03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-stroke-rounded IconSmartWatch03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-duotone-rounded IconSmartWatch03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-twotone-rounded IconSmartWatch03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-solid-rounded IconSmartWatch03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-bulk-rounded IconSmartWatch03BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-stroke-sharp IconSmartWatch03StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartWatch03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-watch-03-solid-sharp IconSmartWatch03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartWatch03: TheIconSelfPack = {
  name: 'SmartWatch03',
  StrokeRounded: IconSmartWatch03StrokeRounded,
  DuotoneRounded: IconSmartWatch03DuotoneRounded,
  TwotoneRounded: IconSmartWatch03TwotoneRounded,
  SolidRounded: IconSmartWatch03SolidRounded,
  BulkRounded: IconSmartWatch03BulkRounded,
  StrokeSharp: IconSmartWatch03StrokeSharp,
  SolidSharp: IconSmartWatch03SolidSharp,
};