import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.2143 22H13.7857C15.3951 22 16.1998 22 16.747 21.5637C16.8641 21.4703 16.9703 21.3641 17.0637 21.247C17.5 20.6998 17.5 19.8951 17.5 18.2857V14C17.5 11.2386 15.2614 9 12.5 9C9.73858 9 7.5 11.2386 7.5 14V18.2857C7.5 19.8951 7.5 20.6998 7.93634 21.247C8.02971 21.3641 8.13594 21.4703 8.25302 21.5637C8.80017 22 9.60488 22 11.2143 22Z',
  d2: 'M15 14H17.5M15 18H17.5',
  d3: 'M12.5 9V6',
  d4: 'M15 6H9C8.51194 6 8.26792 6 8.03739 6.02684C7.10692 6.13518 6.24399 6.56665 5.59904 7.24602C5.43925 7.41433 5.29283 7.60956 5 8',
  d5: 'M15 5.99954C16.0195 5.49103 17.5998 4.17647 18.3402 3.29011C18.8693 2.6567 19.5 2 21 2V10C19.5 10 18.8693 9.34284 18.3402 8.70943C17.5998 7.82307 16.0195 6.50805 15 5.99954Z',
  d6: 'M4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11Z',
  d7: 'M17.5 14V18.2857C17.5 19.8951 17.5 20.6998 17.0637 21.247C16.9703 21.3641 16.8641 21.4703 16.747 21.5637C16.1998 22 15.3951 22 13.7857 22H11.2143C9.60488 22 8.80017 22 8.25302 21.5637C8.13594 21.4703 8.02971 21.3641 7.93634 21.247C7.5 20.6998 7.5 19.8951 7.5 18.2857V14C7.5 11.2386 9.73858 9 12.5 9M17.5 14C17.5 11.2386 15.2614 9 12.5 9M17.5 14H15M12.5 9V6M15 18H17.5',
  d8: 'M12.5 8.25C9.32437 8.25 6.75 10.8244 6.75 14V18.3298V18.3299V18.3299C6.74998 19.097 6.74996 19.7369 6.80953 20.251C6.87208 20.7909 7.0087 21.2867 7.34997 21.7146C7.47835 21.8756 7.62442 22.0217 7.78541 22.15C8.21334 22.4913 8.70913 22.6279 9.24899 22.6905C9.7631 22.75 10.4031 22.75 11.1702 22.75H13.8298C14.597 22.75 15.2369 22.75 15.751 22.6905C16.2909 22.6279 16.7867 22.4913 17.2146 22.15C17.3756 22.0216 17.5217 21.8756 17.65 21.7146C17.9913 21.2867 18.1279 20.7909 18.1905 20.251C18.2388 19.8338 18.2479 19.3337 18.2496 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H18.25V14.75H15C14.5858 14.75 14.25 14.4142 14.25 14C14.25 13.5858 14.5858 13.25 15 13.25H18.2015C17.834 10.4287 15.4215 8.25 12.5 8.25Z',
  d9: 'M8.94269 5.00001C8.96155 5.00001 8.98067 5.00001 9.00006 5.00001H16.0001C16.5523 5.00001 17.0001 5.44773 17.0001 6.00001C17.0001 6.5523 16.5523 7.00001 16.0001 7.00001H13.5001V9.00001C13.5001 9.5523 13.0523 10 12.5001 10C11.9478 10 11.5001 9.5523 11.5001 9.00001V7.00001H9.00006C8.48828 7.00001 8.31245 7.00159 8.1531 7.02014C7.45525 7.10139 6.80805 7.42499 6.32434 7.93452C6.21389 8.05087 6.10713 8.19059 5.80006 8.60001C5.46869 9.04184 4.84189 9.13138 4.40006 8.80001C3.95823 8.46864 3.86869 7.84184 4.20006 7.40001C4.21169 7.3845 4.22316 7.3692 4.23448 7.35411C4.49424 7.00766 4.67346 6.76862 4.87386 6.55753C5.68005 5.70832 6.75871 5.16898 7.9218 5.03356C8.2109 4.9999 8.50967 4.99994 8.94269 5.00001Z',
  d10: 'M2.25 9.5C2.25 8.25736 3.25736 7.25 4.5 7.25C5.74264 7.25 6.75 8.25736 6.75 9.5C6.75 10.7426 5.74264 11.75 4.5 11.75C3.25736 11.75 2.25 10.7426 2.25 9.5Z',
  d11: 'M18.9241 1.76204C19.4648 1.44217 20.1325 1.25 21 1.25C21.4142 1.25 21.75 1.58579 21.75 2V10C21.75 10.4142 21.4142 10.75 21 10.75C20.1324 10.75 19.4646 10.5577 18.924 10.2376C18.3959 9.92505 18.0378 9.51727 17.7646 9.19025C17.4355 8.79621 16.894 8.27927 16.2999 7.79332C15.7028 7.30486 15.1025 6.88879 14.6652 6.67068C14.4108 6.54377 14.25 6.28388 14.25 5.99954C14.25 5.7152 14.4108 5.45531 14.6652 5.3284C15.1025 5.11027 15.7028 4.69426 16.3 4.20594C16.8941 3.7201 17.4355 3.20329 17.7646 2.80929C18.0379 2.48219 18.396 2.07452 18.9241 1.76204Z',
  d12: 'M6.75 14C6.75 10.8244 9.32436 8.25 12.5 8.25C15.6756 8.25 18.25 10.8244 18.25 14V18.3298C18.25 19.097 18.25 19.7369 18.1905 20.251C18.1279 20.7909 17.9913 21.2867 17.65 21.7146C17.5217 21.8756 17.3756 22.0216 17.2146 22.15C16.7867 22.4913 16.2909 22.6279 15.751 22.6905C15.2369 22.75 14.597 22.75 13.8298 22.75H11.1702C10.4031 22.75 9.7631 22.75 9.24899 22.6905C8.70913 22.6279 8.21334 22.4913 7.78541 22.15C7.62442 22.0217 7.47835 21.8756 7.34997 21.7146C7.0087 21.2867 6.87208 20.7909 6.80953 20.251C6.74996 19.7369 6.74998 19.097 6.75 18.3299V18.3298V14Z',
  d13: 'M14.25 14C14.25 13.5858 14.5858 13.25 15 13.25H18.2015C18.2335 13.4955 18.25 13.7458 18.25 14V14.75H15C14.5858 14.75 14.25 14.4142 14.25 14Z',
  d14: 'M14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H18.25V18.3298C18.25 18.4744 18.25 18.6145 18.2496 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18Z',
  d15: 'M7.92202 5.03356C8.21113 4.9999 8.5099 4.99994 8.94291 5.00001L16.0003 5.00001C16.5526 5.00001 17.0003 5.44773 17.0003 6.00001C17.0003 6.5523 16.5526 7.00001 16.0003 7.00001H13.5003V8.33666C13.1755 8.2797 12.8413 8.25 12.5002 8.25C12.1592 8.25 11.825 8.2797 11.5003 8.33664V7.00001H9.00028C8.48851 7.00001 8.31267 7.00159 8.15333 7.02014C7.45548 7.10139 6.80828 7.42499 6.32456 7.93452C6.29171 7.96913 6.25918 8.0058 6.22162 8.05102C5.80888 7.5612 5.1909 7.25 4.50022 7.25C4.43501 7.25 4.37045 7.25277 4.30664 7.25821C4.52871 6.9625 4.69273 6.74857 4.87408 6.55753C5.68027 5.70832 6.75894 5.16898 7.92202 5.03356Z',
  d16: 'M7.5 22H17.5V14C17.5 11.2386 15.2614 9 12.5 9C9.73858 9 7.5 11.2386 7.5 14V22Z',
  d17: 'M14 14H17.5M14 18H17.5',
  d18: 'M15 6H7L5 8',
  d19: 'M12.5 8.25C9.32436 8.25 6.75 10.8244 6.75 14V22C6.75 22.1989 6.82902 22.3897 6.96967 22.5303C7.11032 22.671 7.30109 22.75 7.5 22.75H17.5C17.9142 22.75 18.25 22.4142 18.25 22V18.75H15V17.25H18.25V14.75H15V13.25H18.2015C17.834 10.4287 15.4214 8.25 12.5 8.25Z',
  d20: 'M21 1.25C20.1325 1.25 19.4648 1.44217 18.9241 1.76204C18.396 2.07452 18.0379 2.48219 17.7646 2.80929C17.4355 3.20329 16.894 3.7201 16.3 4.20594C15.9303 4.50828 15.5593 4.7829 15.2266 5H6.58574L4.32937 7.25637C3.16644 7.34357 2.25 8.31476 2.25 9.5C2.25 10.7426 3.25736 11.75 4.5 11.75C5.74264 11.75 6.75 10.7426 6.75 9.5C6.75 8.98425 6.57647 8.50904 6.28462 8.12955L7.41417 7H11.5V9C11.5 9.55228 11.9477 10 12.5 10C13.0522 10 13.5 9.55228 13.5 9V7H15.228C15.5603 7.21698 15.9307 7.49132 16.2999 7.79332C16.894 8.27927 17.4355 8.79621 17.7646 9.19025C18.0378 9.51727 18.3959 9.92505 18.924 10.2376C19.4646 10.5577 20.1324 10.75 21 10.75H21.75V1.25H21Z',
} as const;

export const IconBreastPumpStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-stroke-rounded IconBreastPumpStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="9.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconBreastPumpDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-duotone-rounded IconBreastPumpDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="9.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconBreastPumpTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-twotone-rounded IconBreastPumpTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBreastPumpSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-solid-rounded IconBreastPumpSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBreastPumpBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-bulk-rounded IconBreastPumpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBreastPumpStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-stroke-sharp IconBreastPumpStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="4.5" 
        cy="9.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBreastPumpSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="breast-pump-solid-sharp IconBreastPumpSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBreastPump: TheIconSelfPack = {
  name: 'BreastPump',
  StrokeRounded: IconBreastPumpStrokeRounded,
  DuotoneRounded: IconBreastPumpDuotoneRounded,
  TwotoneRounded: IconBreastPumpTwotoneRounded,
  SolidRounded: IconBreastPumpSolidRounded,
  BulkRounded: IconBreastPumpBulkRounded,
  StrokeSharp: IconBreastPumpStrokeSharp,
  SolidSharp: IconBreastPumpSolidSharp,
};