import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 7C13.5 6.5 14 5.61496 14 5C14 3.61929 12 2 12 2C12 2 10 3.61929 10 5C10 5.61496 10.5 6.5 11 7',
  d2: 'M9.5 7H14.5',
  d3: 'M11 7L9 17M13 7L15 17',
  d4: 'M7.42153 20.1014C6.75257 18.7451 5.65909 17.3295 5 17H19C18.3409 17.3295 17.2474 18.7451 16.5785 20.1014C16.0533 21.1661 15.7908 21.6984 15.5483 21.8492C15.3058 22 14.8705 22 14 22H10C9.12949 22 8.69423 22 8.45174 21.8492C8.20925 21.6984 7.94667 21.1661 7.42153 20.1014Z',
  d5: 'M12 22V20',
  d6: 'M12 2C12 2 10 3.61929 10 5C10 5.61496 10.5 6.5 11 7H13C13.5 6.5 14 5.61496 14 5C14 3.61929 12 2 12 2Z',
  d7: 'M12.9998 20C12.9998 19.4477 12.552 19 11.9998 19C11.4475 19 10.9998 19.4477 10.9998 20V22.35C10.9998 22.5386 10.9998 22.6328 10.9412 22.6914C10.8826 22.75 10.7883 22.75 10.5998 22.75H9.97058C9.56031 22.75 9.20995 22.75 8.93334 22.729C8.6618 22.7084 8.33828 22.6619 8.05554 22.4861C7.88549 22.3804 7.75897 22.2392 7.66579 22.1171C7.56933 21.9906 7.47825 21.8435 7.39002 21.6879C7.21771 21.384 7.013 20.969 6.75999 20.456L6.74873 20.4331C6.43767 19.8025 6.02451 19.1525 5.61499 18.6263C5.18044 18.0678 4.83031 17.7538 4.66442 17.6708C4.35331 17.5153 4.18998 17.1662 4.26989 16.8277C4.34981 16.4892 4.652 16.25 4.99983 16.25H18.9998C19.3477 16.25 19.6499 16.4892 19.7298 16.8277C19.8097 17.1662 19.6464 17.5153 19.3352 17.6708C19.1693 17.7538 18.8192 18.0678 18.3847 18.6263C17.9751 19.1525 17.562 19.8025 17.2509 20.4331L17.2397 20.456C16.9866 20.969 16.7819 21.384 16.6096 21.6879C16.5214 21.8435 16.4303 21.9906 16.3339 22.1171C16.2407 22.2392 16.1142 22.3804 15.9441 22.4861C15.6614 22.6619 15.3379 22.7084 15.0663 22.729C14.7897 22.75 14.4394 22.75 14.0291 22.75H13.3998C13.2112 22.75 13.1169 22.75 13.0583 22.6914C12.9998 22.6328 12.9998 22.5386 12.9998 22.35V20Z',
  d8: 'M15.2931 14.6412C15.3303 14.8268 15.1883 15 14.999 15H9.00115C8.81184 15 8.66985 14.8268 8.70698 14.6412L10.0613 7.86961C10.0737 7.80773 10.0263 7.75 9.96323 7.75H9.50045C9.08623 7.75 8.75045 7.41421 8.75045 7C8.75045 6.58579 9.08623 6.25 9.50045 6.25C9.53646 6.25 9.56019 6.2124 9.54524 6.17964C9.37967 5.81701 9.25045 5.40184 9.25045 5C9.25045 4.48167 9.43492 3.99482 9.65356 3.5914C9.87572 3.18147 10.1625 2.80424 10.4335 2.49127C10.7065 2.17599 10.9772 1.91029 11.1788 1.72393C11.28 1.63029 11.3651 1.55554 11.4258 1.50334C11.4562 1.47722 11.4806 1.45667 11.4981 1.44216L11.5189 1.42496L11.5251 1.41984L11.5272 1.41817L11.5285 1.4171C11.8037 1.1943 12.1972 1.1943 12.4724 1.4171L12.4737 1.41817L12.4758 1.41984L12.482 1.42496L12.5028 1.44216C12.5202 1.45667 12.5447 1.47722 12.5751 1.50334C12.6358 1.55554 12.7209 1.63029 12.8221 1.72393C13.0237 1.91029 13.2944 2.17599 13.5674 2.49127C13.8384 2.80424 14.1252 3.18147 14.3473 3.5914C14.566 3.99482 14.7504 4.48167 14.7504 5C14.7504 5.40184 14.6212 5.81701 14.4557 6.17964C14.4407 6.2124 14.4644 6.25 14.5004 6.25C14.9147 6.25 15.2504 6.58579 15.2504 7C15.2504 7.41421 14.9147 7.75 14.5004 7.75H14.0369C13.9738 7.75 13.9265 7.80773 13.9388 7.86961L15.2931 14.6412Z',
  d9: 'M14.997 15H8.9992C8.80988 15 8.6679 14.8239 8.70502 14.6352L10.0593 7.75H13.9369L15.2912 14.6352C15.3283 14.8239 15.1863 15 14.997 15Z',
  d10: 'M4.27001 16.8277C4.34993 16.4892 4.65212 16.25 4.99995 16.25H19C19.3478 16.25 19.65 16.4892 19.7299 16.8277C19.8098 17.1662 19.6465 17.5153 19.3354 17.6708C19.1695 17.7538 18.8193 18.0678 18.3848 18.6263C17.9753 19.1525 17.5621 19.8025 17.2511 20.4331L17.2398 20.456C16.9868 20.969 16.7821 21.384 16.6098 21.6879C16.5215 21.8435 16.4305 21.9906 16.334 22.1171C16.2408 22.2392 16.1143 22.3804 15.9442 22.4861C15.6615 22.6619 15.338 22.7084 15.0664 22.729C14.7898 22.75 14.4395 22.75 14.0292 22.75H14.0292H9.9707H9.97069C9.56041 22.75 9.21008 22.75 8.93347 22.729C8.66192 22.7084 8.3384 22.6619 8.05566 22.4861C7.88561 22.3804 7.75909 22.2392 7.66591 22.1171C7.56945 21.9906 7.47837 21.8435 7.39015 21.6879C7.21783 21.384 7.01313 20.969 6.76011 20.456L6.74885 20.4331C6.4378 19.8025 6.02463 19.1525 5.61512 18.6263C5.18056 18.0678 4.83044 17.7538 4.66454 17.6708C4.35343 17.5153 4.1901 17.1662 4.27001 16.8277Z',
  d11: 'M12.9998 20C12.9998 19.4477 12.552 19 11.9998 19C11.4475 19 10.9998 19.4477 10.9998 20V22.75H12.9998V20Z',
  d12: 'M9.49988 7.75H9.96266H14.0363H14.4999C14.9141 7.75 15.2499 7.41421 15.2499 7C15.2499 6.58579 14.9141 6.25 14.4999 6.25C14.4639 6.25 14.4401 6.2124 14.4551 6.17964C14.6206 5.81701 14.7499 5.40184 14.7499 5C14.7499 4.48167 14.5654 3.99482 14.3468 3.5914C14.1246 3.18147 13.8379 2.80424 13.5669 2.49127C13.2938 2.17599 13.0231 1.91029 12.8216 1.72393C12.7203 1.63029 12.6353 1.55554 12.5745 1.50334C12.5441 1.47722 12.5197 1.45667 12.5022 1.44216L12.4814 1.42496L12.4752 1.41984L12.4731 1.41817L12.4718 1.4171C12.1966 1.1943 11.8031 1.1943 11.5279 1.4171L11.5266 1.41817L11.5246 1.41984L11.5183 1.42496L11.4975 1.44216C11.4801 1.45667 11.4557 1.47722 11.4253 1.50334C11.3645 1.55554 11.2794 1.63029 11.1782 1.72393C10.9766 1.91029 10.7059 2.17599 10.4329 2.49127C10.1619 2.80424 9.87516 3.18147 9.65299 3.5914C9.43436 3.99482 9.24988 4.48167 9.24988 5C9.24988 5.40184 9.37911 5.81701 9.54467 6.17964C9.55963 6.2124 9.5359 6.25 9.49988 6.25C9.08566 6.25 8.74988 6.58579 8.74988 7C8.74988 7.41421 9.08566 7.75 9.49988 7.75Z',
  d13: 'M12.9536 7.01382C13.448 6.51244 13.9423 5.62495 13.9423 5.00829C13.9423 3.62376 11.9649 2 11.9649 2C11.9649 2 9.98755 3.62376 9.98755 5.00829C9.98755 5.62495 10.4819 6.51244 10.9762 7.01382',
  d14: 'M8.50464 7.01367H15.4255',
  d15: 'M10.9762 7.01367L8.99878 16.5399M12.9535 7.01367L14.9309 16.5399',
  d16: 'M12.0447 22V19',
  d17: 'M18.9889 16.9951H5.01112C5.00341 16.9951 4.99867 17.0037 5.00268 17.0104L7.9987 21.9997H15.9202L18.9973 17.0105C19.0014 17.0038 18.9966 16.9951 18.9889 16.9951Z',
  d18: 'M13 22.75V19H11V22.75H7.57536L4.35688 17.3859C4.21786 17.1542 4.21422 16.8656 4.34735 16.6305C4.48048 16.3953 4.7298 16.25 5 16.25H19C19.2702 16.25 19.5195 16.3953 19.6526 16.6305C19.7858 16.8656 19.7821 17.1542 19.6431 17.3859L16.4246 22.75H13Z',
  d19: 'M8.54888 15H15.4502L13.9239 7.75H15.5V6.25H14.4223C14.6033 5.87129 14.75 5.42809 14.75 5C14.75 4.48167 14.5655 3.99482 14.3469 3.5914C14.1247 3.18147 13.838 2.80424 13.567 2.49127C13.294 2.17599 13.0232 1.91029 12.8217 1.72393C12.7238 1.63337 12.5449 1.4798 12.4783 1.42259L12.4719 1.4171C12.1968 1.1943 11.8032 1.1943 11.5281 1.4171L11.5217 1.42256C11.4551 1.47978 11.2762 1.63338 11.1783 1.72393C10.9768 1.91029 10.706 2.17599 10.433 2.49127C10.162 2.80424 9.87528 3.18147 9.65311 3.5914C9.43448 3.99482 9.25 4.48167 9.25 5C9.25 5.42809 9.39666 5.87129 9.57767 6.25H8.5V7.75H10.0752L8.54888 15Z',
} as const;

export const IconMonasStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-stroke-rounded IconMonasStrokeRounded"
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

export const IconMonasDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-duotone-rounded IconMonasDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconMonasTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-twotone-rounded IconMonasTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonasSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-solid-rounded IconMonasSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonasBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-bulk-rounded IconMonasBulkRounded"
    >
      <path 
        d={d.d9} 
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonasStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-stroke-sharp IconMonasStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonasSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="monas-solid-sharp IconMonasSolidSharp"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMonas: TheIconSelfPack = {
  name: 'Monas',
  StrokeRounded: IconMonasStrokeRounded,
  DuotoneRounded: IconMonasDuotoneRounded,
  TwotoneRounded: IconMonasTwotoneRounded,
  SolidRounded: IconMonasSolidRounded,
  BulkRounded: IconMonasBulkRounded,
  StrokeSharp: IconMonasStrokeSharp,
  SolidSharp: IconMonasSolidSharp,
};