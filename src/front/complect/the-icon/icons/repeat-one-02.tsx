import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 10L22 3.36905C22 3.06549 21.7178 2.89221 21.52 3.07435L20 4.47421',
  d2: 'M14.3884 3L15.3913 3.97574C15.8393 4.41165 16.0633 4.62961 15.9844 4.81481C15.9056 5 15.5888 5 14.9552 5H9.19422C5.22096 5 2 8.13401 2 12C2 13.4872 2.47668 14.8662 3.2895 16',
  d3: 'M7.61156 21L6.60875 20.0243C6.16074 19.5883 5.93673 19.3704 6.01557 19.1852C6.09441 19 6.4112 19 7.04478 19H14.8058C18.2499 19 21.2943 16.6452 22 13.5',
  d4: 'M16.881 5H9.19422C5.22096 5 2 8.13401 2 12C2 13.4872 2.47668 14.8662 3.2895 16C3.848 16.9858 5.85306 18.3096 6.90847 18.9219C6.97458 18.9602 7.00764 18.9794 7.04593 18.9897C7.08423 19 7.12375 19 7.20279 19H14.8058C18.779 19 22 15.866 22 12C22 10.5128 21.5233 9.13383 20.7105 8C19.7228 6.4681 17.9648 5.4251 17.1087 5.04654C17.0581 5.02415 17.0327 5.01295 17.0021 5.00648C16.9714 5 16.9413 5 16.881 5Z',
  d5: 'M22.3574 2.1872C22.781 2.44727 23 2.90884 23 3.36888V9.99983C23 10.5521 22.5523 10.9998 22 10.9998C21.4477 10.9998 21 10.5521 21 9.99983V4.91255L20.6774 5.20962C20.2712 5.58376 19.6386 5.55773 19.2644 5.15148C18.8903 4.74523 18.9163 4.1126 19.3226 3.73846L20.8426 2.3386C21.2849 1.93119 21.8978 1.90503 22.3574 2.1872Z',
  d6: 'M8.33043 21.6974C7.94528 22.0933 7.31218 22.1019 6.91634 21.7168L5.91354 20.7411C5.72256 20.5554 5.47232 20.3122 5.3256 20.1224C5.19673 19.9557 4.82489 19.4343 5.09763 18.7936C5.36433 18.1671 5.98229 18.0609 6.188 18.0326C6.42618 17.9998 6.72522 17.9999 6.99646 18.0001L14.8079 18.0001C17.5857 18.0001 19.9091 16.2389 20.7065 13.8343C20.8631 13.362 21.2794 13 21.777 13C22.3935 13 22.8749 13.5445 22.7071 14.1377C21.747 17.5315 18.5568 20.0001 14.8079 20.0001H8.61371V21C8.61375 21.2514 8.51959 21.503 8.33043 21.6974Z',
  d7: 'M3.87389 16.8127C3.42502 17.1344 2.8003 17.0314 2.47852 16.5826C1.5491 15.2861 1.00175 13.7049 1.00175 11.9999C1.00175 7.55602 4.69641 3.99992 9.19597 3.99992H13.3902V3C13.3902 2.74861 13.4843 2.49697 13.6735 2.30256C14.0586 1.90673 14.6917 1.89806 15.0876 2.28321L16.0904 3.25894C16.2813 3.44457 16.5316 3.68781 16.6783 3.87758C16.8072 4.04428 17.179 4.56574 16.9063 5.20642C16.6396 5.83292 16.0216 5.93914 15.8159 5.96744C15.5777 6.00021 15.2787 6.00007 15.0075 5.99994H15.0074L14.957 5.99992H9.19597C5.74902 5.99992 3.00175 8.71184 3.00175 11.9999C3.00175 13.2695 3.40777 14.4461 4.10399 15.4173C4.42577 15.8662 4.32275 16.4909 3.87389 16.8127Z',
  d8: 'M21.9995 9.97754V2.97754H21.4991L19.998 4.24139',
  d9: 'M3.29875 15.9628C1.60835 13.7758 1.50712 10.2414 3.35527 7.88812C5.20343 5.53483 6.84203 5.0042 10.549 5.0042C12.9533 5.0042 15.8343 4.98957 17.7413 4.99222M14.0047 2L17.2509 4.81119',
  d10: 'M5.25277 19.0278C6.97884 19.0278 10.6312 19.0399 13.4707 19.0399C17.1776 19.0399 19.1363 18.0648 20.6635 16.1059C21.7002 14.5161 22.0285 13.4164 21.9968 11.9696M9.00092 21.9951L5.73756 19.1992',
  d11: 'M21.1347 2.01855H22.9998V10.0186H20.9998V4.74748L20.6442 5.04714L19.3555 3.51767L21.1347 2.01855Z',
  d12: 'M14.6402 1.24902L18 4.04887V6.01724H9.19422C5.74727 6.01724 3 8.72916 3 12.0172C3 13.2868 3.40602 14.4634 4.10224 15.4346L2.47676 16.5999C1.54735 15.3034 1 13.7222 1 12.0172C1 7.57334 4.69465 4.01724 9.19422 4.01724H14.8379L13.3598 2.78547L14.6402 1.24902Z',
  d13: 'M14.8058 17.9834C18.2527 17.9834 21 15.2715 21 11.9834H23C23 16.4273 19.3053 19.9834 14.8058 19.9834H8.16205L9.64018 21.2152L8.35982 22.7516L5 19.9518V17.9834H14.8058Z',
} as const;

export const IconRepeatOne02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-stroke-rounded IconRepeatOne02StrokeRounded"
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

export const IconRepeatOne02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-duotone-rounded IconRepeatOne02DuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRepeatOne02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-twotone-rounded IconRepeatOne02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRepeatOne02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-solid-rounded IconRepeatOne02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconRepeatOne02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-bulk-rounded IconRepeatOne02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconRepeatOne02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-stroke-sharp IconRepeatOne02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconRepeatOne02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="repeat-one-02-solid-sharp IconRepeatOne02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRepeatOne02: TheIconSelfPack = {
  name: 'RepeatOne02',
  StrokeRounded: IconRepeatOne02StrokeRounded,
  DuotoneRounded: IconRepeatOne02DuotoneRounded,
  TwotoneRounded: IconRepeatOne02TwotoneRounded,
  SolidRounded: IconRepeatOne02SolidRounded,
  BulkRounded: IconRepeatOne02BulkRounded,
  StrokeSharp: IconRepeatOne02StrokeSharp,
  SolidSharp: IconRepeatOne02SolidSharp,
};