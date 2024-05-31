import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.50586 15.9916L8.03146 9.02875C8.49073 8.06222 9.19305 7.26286 9.99777 9.17999C10.7406 10.9497 11.8489 14.1903 12.5031 15.9954M6.65339 13.002H11.3215',
  d2: 'M3.46447 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.46447 19.682C4.92893 21 7.28596 21 12 21C16.714 21 19.0711 21 20.5355 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.5355 4.31802C19.0711 3 16.714 3 12 3C7.28596 3 4.92893 3 3.46447 4.31802Z',
  d3: 'M18.4843 8.98682V11.9815M18.4843 11.9815V15.9252M18.4843 11.9815H16.466C16.2263 11.9815 15.9885 12.0261 15.7645 12.113C14.0707 12.7702 14.0707 15.2124 15.7645 15.8696C15.9885 15.9565 16.2263 16.0011 16.466 16.0011H18.4843',
  d4: 'M2 12C2 7.75736 2 5.63604 3.46447 4.31802C4.92893 3 7.28596 3 12 3C16.714 3 19.0711 3 20.5355 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.5355 19.682C19.0711 21 16.714 21 12 21C7.28596 21 4.92893 21 3.46447 19.682C2 18.364 2 16.2426 2 12Z',
  d5: 'M18.4843 8.98633V11.981M18.4843 11.981V15.9247M18.4843 11.981H16.466C16.2263 11.981 15.9885 12.0256 15.7645 12.1125C14.0707 12.7697 14.0707 15.2119 15.7645 15.8691C15.9885 15.956 16.2263 16.0006 16.466 16.0006H18.4843',
  d6: 'M5.51855 15.9892L8.04416 9.02631C8.50343 8.05978 9.20574 7.26042 10.0105 9.17755C10.7533 10.9472 11.8616 14.1879 12.5158 15.993M6.66608 12.9996H11.3342M18.4741 8.97885V11.9735M18.4741 11.9735V15.9173M18.4741 11.9735H16.4558C16.216 11.9735 15.9783 12.0181 15.7542 12.105C14.0604 12.7622 14.0604 15.2044 15.7542 15.8616C15.9783 15.9486 16.216 15.9931 16.4558 15.9931H18.4741',
  d7: 'M17.5765 2.42018C16.1699 2.24998 14.365 2.24999 12.0522 2.25C9.73933 2.24999 7.83014 2.24998 6.42355 2.42018C4.99222 2.59338 3.85936 2.95359 2.96274 3.76055C2.05481 4.57769 1.63907 5.62747 1.44129 6.95147C1.24997 8.23221 1.24998 9.99422 1.25 12.0625C1.24998 14.1308 1.24997 15.7678 1.44129 17.0485C1.63907 18.3725 2.05481 19.4223 2.96274 20.2395C3.85936 21.0464 4.99222 21.4066 6.42355 21.5798C7.83014 21.75 9.73935 21.75 12.0522 21.75C14.365 21.75 16.1699 21.75 17.5765 21.5798C19.0078 21.4066 20.1406 21.0464 21.0373 20.2395C21.9452 19.4223 22.3609 18.3725 22.5587 17.0485C22.75 15.7678 22.75 14.1308 22.75 12.0625C22.75 9.99426 22.75 8.23221 22.5587 6.95147C22.3609 5.62747 21.9452 4.57769 21.0373 3.76055C20.1406 2.95359 19.0078 2.59338 17.5765 2.42018ZM7.89398 11.5372C8.29337 10.4213 8.5694 9.65423 8.819 9.15832C8.8913 9.01468 8.95184 8.91388 9.0002 8.84443C9.04857 8.91388 9.10911 9.01468 9.18141 9.15832C9.43101 9.65423 9.70704 10.4213 10.1064 11.5372L10.3615 12.25H7.63889L7.89398 11.5372ZM11.7941 16.2527L10.8984 13.75H7.10205L6.20634 16.2527C6.06677 16.6427 5.63747 16.8457 5.24748 16.7061C4.85749 16.5666 4.65449 16.1373 4.79407 15.7473L6.50102 10.9778C6.87645 9.92873 7.18276 9.0728 7.47914 8.48394C7.63027 8.18368 7.80702 7.89345 8.03147 7.67172C8.27166 7.43445 8.59519 7.25 9.0002 7.25C9.40521 7.25 9.72875 7.43445 9.96894 7.67172C10.1934 7.89345 10.3701 8.18368 10.5213 8.48394C10.8176 9.07279 11.1239 9.92871 11.4994 10.9778L11.4994 10.9778L13.2063 15.7473C13.3459 16.1373 13.1429 16.5666 12.7529 16.7061C12.3629 16.8457 11.9336 16.6427 11.7941 16.2527ZM19.2507 9.00018C19.2507 8.58597 18.9149 8.25018 18.5007 8.25018C18.0865 8.25018 17.7507 8.58597 17.7507 9.00018V11.2502H16.5001C14.9814 11.2502 13.7502 12.4814 13.7502 14.0001C13.7502 15.5188 14.9814 16.75 16.5001 16.75H18.5002C18.9144 16.75 19.2502 16.4143 19.2502 16.0001L19.2507 9.00018ZM15.2502 14.0001C15.2502 13.3098 15.8098 12.7502 16.5001 12.7502H17.7506L17.7503 15.25H16.5001C15.8098 15.25 15.2502 14.6904 15.2502 14.0001Z',
  d8: 'M12.0522 2.25C14.365 2.24999 16.1699 2.24998 17.5765 2.42018C19.0078 2.59338 20.1406 2.95359 21.0373 3.76055C21.9452 4.57769 22.3609 5.62747 22.5587 6.95147C22.75 8.23221 22.75 9.99426 22.75 12.0625C22.75 14.1308 22.75 15.7678 22.5587 17.0485C22.3609 18.3725 21.9452 19.4223 21.0373 20.2395C20.1406 21.0464 19.0078 21.4066 17.5765 21.5798C16.1699 21.75 14.365 21.75 12.0522 21.75C9.73935 21.75 7.83014 21.75 6.42355 21.5798C4.99222 21.4066 3.85936 21.0464 2.96274 20.2395C2.05481 19.4223 1.63907 18.3725 1.44129 17.0485C1.24997 15.7678 1.24998 14.1308 1.25 12.0625C1.24998 9.99422 1.24997 8.23221 1.44129 6.95147C1.63907 5.62747 2.05481 4.57769 2.96274 3.76055C3.85936 2.95359 4.99222 2.59338 6.42355 2.42018C7.83014 2.24998 9.73933 2.24999 12.0522 2.25Z',
  d9: 'M8.819 9.15832C8.5694 9.65423 8.29337 10.4213 7.89398 11.5372L7.63889 12.25H10.3615L10.1064 11.5372C9.70704 10.4213 9.43101 9.65423 9.18141 9.15832C9.10911 9.01468 9.04857 8.91388 9.0002 8.84443C8.95184 8.91388 8.8913 9.01468 8.819 9.15832ZM10.8984 13.75L11.7941 16.2527C11.9336 16.6427 12.3629 16.8457 12.7529 16.7061C13.1429 16.5666 13.3459 16.1373 13.2063 15.7473L11.4994 10.9778C11.124 9.92873 10.8176 9.0728 10.5213 8.48394C10.3701 8.18368 10.1934 7.89345 9.96894 7.67172C9.72875 7.43445 9.40521 7.25 9.0002 7.25C8.59519 7.25 8.27166 7.43445 8.03147 7.67172C7.80702 7.89345 7.63027 8.18368 7.47914 8.48394C7.18276 9.0728 6.87645 9.92873 6.50102 10.9778L4.79407 15.7473C4.65449 16.1373 4.85749 16.5666 5.24748 16.7061C5.63747 16.8457 6.06677 16.6427 6.20634 16.2527L7.10205 13.75H10.8984ZM18.5007 8.25018C18.9149 8.25018 19.2507 8.58597 19.2507 9.00018L19.2502 16.0001C19.2502 16.4143 18.9144 16.75 18.5002 16.75H16.5001C14.9814 16.75 13.7502 15.5188 13.7502 14.0001C13.7502 12.4814 14.9814 11.2502 16.5001 11.2502H17.7507V9.00018C17.7507 8.58597 18.0865 8.25018 18.5007 8.25018ZM16.5001 12.7502C15.8098 12.7502 15.2502 13.3098 15.2502 14.0001C15.2502 14.6904 15.8098 15.25 16.5001 15.25H17.7503L17.7506 12.7502H16.5001Z',
  d10: 'M22 3H2V21H22V3Z',
  d11: 'M5.54004 16.0829L9.0781 7.53369L12.5109 16.0829M6.81756 13.0211H11.3305',
  d12: 'M14.5132 14.0034C14.5132 12.897 15.4101 12 16.5166 12H18.491V16.0068H16.5166C15.4101 16.0068 14.5132 15.1099 14.5132 14.0034Z',
  d13: 'M18.4951 11.9889L18.5222 9.02344',
  d14: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM10.0189 7.25H7.97937L4.79688 15.7367L6.20137 16.2633L7.14387 13.75H10.8544L11.7969 16.2633L13.2014 15.7367L10.0189 7.25ZM10.2919 12.25H7.70637L8.99912 8.80267L10.2919 12.25ZM19.249 16.75L19.2496 9.00018H17.7496V11.2502H16.499C14.9803 11.2502 13.7491 12.4814 13.7491 14.0001C13.7491 15.5188 14.9803 16.75 16.499 16.75H19.249ZM15.2491 14.0001C15.2491 13.3098 15.8087 12.7502 16.499 12.7502H17.7495L17.7492 15.25H16.499C15.8087 15.25 15.2491 14.6904 15.2491 14.0001Z',
} as const;

export const IconAdvertisimentStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-stroke-rounded IconAdvertisimentStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdvertisimentDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-duotone-rounded IconAdvertisimentDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdvertisimentTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-twotone-rounded IconAdvertisimentTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdvertisimentSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-solid-rounded IconAdvertisimentSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdvertisimentBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-bulk-rounded IconAdvertisimentBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdvertisimentStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-stroke-sharp IconAdvertisimentStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
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
    </TheIconWrapper>
  );
};

export const IconAdvertisimentSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="advertisiment-solid-sharp IconAdvertisimentSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAdvertisiment: TheIconSelfPack = {
  name: 'Advertisiment',
  StrokeRounded: IconAdvertisimentStrokeRounded,
  DuotoneRounded: IconAdvertisimentDuotoneRounded,
  TwotoneRounded: IconAdvertisimentTwotoneRounded,
  SolidRounded: IconAdvertisimentSolidRounded,
  BulkRounded: IconAdvertisimentBulkRounded,
  StrokeSharp: IconAdvertisimentStrokeSharp,
  SolidSharp: IconAdvertisimentSolidSharp,
};