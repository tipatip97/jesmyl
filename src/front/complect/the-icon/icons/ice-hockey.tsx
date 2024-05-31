import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.6341 16.5168L22 3M17.5475 3L12.3738 12.7865C11.7391 13.9871 11.3456 14.149 10.0348 13.749C8.36082 13.2381 5.01415 11.4686 3.34756 12.2423C1.6805 13.0162 1.54011 18.1781 3.03845 19.2361C4.71629 20.4208 9.68674 19.9937 11.7961 19.5103',
  d2: 'M8 13L6 20',
  d3: 'M12 19C12 17.3453 12.3453 17 14 17H18C19.6547 17 20 17.3453 20 19C20 20.6547 19.6547 21 18 21H14C12.3453 21 12 20.6547 12 19Z',
  d4: 'M3.34756 12.2417C1.88286 12.9217 1.59669 16.989 2.56505 18.684C2.61144 18.7652 2.63464 18.8058 2.95658 19.0516C3.27852 19.2974 3.435 19.3378 3.74796 19.4185L6 19.9995L8.03296 12.9995C6.39815 12.3679 4.48296 11.7146 3.34756 12.2417Z',
  d5: 'M18.2851 3.67868C18.5373 3.20328 18.355 2.61416 17.8779 2.36283C17.4007 2.11151 16.8094 2.29316 16.5572 2.76857L11.5011 12.2974C11.3563 12.5703 11.2525 12.7306 11.1725 12.8273C11.1375 12.8727 11.0628 12.893 11.0122 12.9C11.0038 12.9011 10.9996 12.9017 10.9868 12.9018C10.974 12.9019 10.9676 12.9011 10.955 12.8996C10.8271 12.8842 10.6427 12.8429 10.3645 12.7583C10.0052 12.6491 9.54309 12.4685 8.97595 12.2468L8.9539 12.2382C8.39454 12.0196 7.75612 11.7709 7.11228 11.5615C6.4717 11.3531 5.78782 11.1706 5.13228 11.0966C4.48891 11.0239 3.77227 11.0436 3.13255 11.3394C2.37067 11.6919 1.93535 12.4495 1.68649 13.1234C1.42322 13.8363 1.2866 14.6736 1.25639 15.4877C1.22611 16.3034 1.30061 17.1508 1.49791 17.8899C1.68463 18.5894 2.02899 19.3709 2.6783 19.8276C3.27002 20.2439 4.05657 20.464 4.82489 20.5879C5.61649 20.7157 6.5016 20.7581 7.37399 20.7484C9.1138 20.7291 10.9135 20.5007 12.0188 20.2484C12.5449 20.1282 12.8737 19.606 12.7531 19.0818C12.6325 18.5576 12.1083 18.2301 11.5822 18.3502C10.6261 18.5685 8.96642 18.7833 7.35223 18.8012C7.23707 18.8025 7.15397 18.6922 7.18561 18.5815L8.33521 14.5579C8.39149 14.3609 8.41963 14.2624 8.49829 14.2231C8.57694 14.1837 8.67322 14.2205 8.86578 14.294C9.19642 14.4202 9.51402 14.5357 9.794 14.6209C10.4235 14.8123 11.1531 14.9883 11.8418 14.7059C12.5338 14.4222 12.9234 13.7837 13.2291 13.2075L18.2851 3.67868Z',
  d6: 'M22.6306 3.68953C22.8888 3.21735 22.714 2.62597 22.2401 2.36866C21.7661 2.11134 21.1726 2.28553 20.9143 2.75772L13.7159 15.9187C13.4576 16.3909 13.6325 16.9823 14.1064 17.2396C14.5803 17.4969 15.1739 17.3227 15.4321 16.8505L22.6306 3.68953Z',
  d7: 'M12.8284 16.3472C13.1736 16.2713 13.57 16.2499 13.9999 16.2499H17.9999C18.4298 16.2499 18.8261 16.2713 19.1714 16.3472C19.5251 16.4249 19.8712 16.5695 20.1507 16.849C20.4302 17.1286 20.5749 17.4747 20.6526 17.8284C20.7284 18.1736 20.7499 18.57 20.7499 18.9999C20.7499 19.4298 20.7284 19.8261 20.6526 20.1714C20.5749 20.5251 20.4302 20.8712 20.1507 21.1507C19.8712 21.4302 19.5251 21.5749 19.1714 21.6526C18.8261 21.7284 18.4298 21.7499 17.9999 21.7499H13.9999C13.57 21.7499 13.1736 21.7284 12.8284 21.6526C12.4747 21.5749 12.1286 21.4302 11.849 21.1507C11.5695 20.8712 11.4249 20.5251 11.3472 20.1714C11.2713 19.8261 11.2499 19.4298 11.2499 18.9999C11.2499 18.57 11.2713 18.1736 11.3472 17.8284C11.4249 17.4747 11.5695 17.1286 11.849 16.849C12.1286 16.5695 12.4747 16.4249 12.8284 16.3472Z',
  d8: 'M14.5 17L22 3M17.5475 3L11.5 14.5C9 13 5.01415 11.4686 3.34756 12.2423C1.6805 13.0162 1.54011 18.1781 3.03845 19.2361C4.71629 20.4208 9.68674 19.9937 11.7961 19.5103',
  d9: 'M19 17H13C12.4477 17 12 17.4477 12 18V20C12 20.5523 12.4477 21 13 21H19C19.5523 21 20 20.5523 20 20V18C20 17.4477 19.5523 17 19 17Z',
  d10: 'M15.1611 17.1066L22.75 3.20813L21.4278 2.5L13.8389 16.3984L15.1611 17.1066Z',
  d11: 'M11.7945 15.3043L18.2113 3.20367L16.8837 2.50571L11.1979 13.2167C10.0259 12.5763 8.64728 11.9662 7.33474 11.5565C6.5448 11.31 5.75737 11.1293 5.0401 11.0648C4.33794 11.0017 3.62222 11.042 3.03174 11.316C2.34284 11.6358 1.92843 12.3361 1.6814 13.0074C1.4233 13.7086 1.2867 14.5411 1.25649 15.3578C1.22623 16.1759 1.30111 17.0205 1.4954 17.7508C1.68158 18.4506 2.01389 19.1826 2.60585 19.6004C3.16483 19.995 3.92478 20.2133 4.69815 20.3385C5.48938 20.4666 6.37979 20.51 7.2638 20.5001C9.02802 20.4805 10.8517 20.2477 11.9636 19.993L11.6286 18.5313C10.6311 18.7598 8.91491 18.9821 7.2471 19.0006C7.16245 19.0016 7.07814 19.002 6.99427 19.0019L8.53881 13.5974C9.46175 13.9869 10.3592 14.4433 11.1141 14.8962L11.7945 15.3043Z',
  d12: 'M13.9993 16.0012H18.0007C18.6978 16.0012 19.0464 16.0012 19.33 16.0872C19.9697 16.281 20.4702 16.7816 20.664 17.4212C20.75 17.7048 20.75 18.0534 20.75 18.7505C20.75 19.4476 20.75 19.7961 20.664 20.0798C20.4702 20.7194 19.9697 21.22 19.33 21.4138C19.0464 21.4997 18.6978 21.4997 18.0007 21.4997H13.9993C13.3022 21.4997 12.9536 21.4997 12.67 21.4138C12.0303 21.22 11.5298 20.7194 11.336 20.0798C11.25 19.7961 11.25 19.4476 11.25 18.7505C11.25 18.0534 11.25 17.7048 11.336 17.4212C11.5298 16.7816 12.0303 16.281 12.67 16.0872C12.9536 16.0012 13.3022 16.0012 13.9993 16.0012Z',
} as const;

export const IconIceHockeyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-stroke-rounded IconIceHockeyStrokeRounded"
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

export const IconIceHockeyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-duotone-rounded IconIceHockeyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconIceHockeyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-twotone-rounded IconIceHockeyTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconIceHockeySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-solid-rounded IconIceHockeySolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceHockeyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-bulk-rounded IconIceHockeyBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceHockeyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-stroke-sharp IconIceHockeyStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconIceHockeySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ice-hockey-solid-sharp IconIceHockeySolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIceHockey: TheIconSelfPack = {
  name: 'IceHockey',
  StrokeRounded: IconIceHockeyStrokeRounded,
  DuotoneRounded: IconIceHockeyDuotoneRounded,
  TwotoneRounded: IconIceHockeyTwotoneRounded,
  SolidRounded: IconIceHockeySolidRounded,
  BulkRounded: IconIceHockeyBulkRounded,
  StrokeSharp: IconIceHockeyStrokeSharp,
  SolidSharp: IconIceHockeySolidSharp,
};