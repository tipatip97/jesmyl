import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.00148 14C5.00185 11.7778 4.81561 4 8.50178 4C10.4342 4 12.0007 7.58172 12.0007 12C12.0007 16.4183 13.5672 20 15.4996 20C19.1858 20 19 12.2222 19 10',
  d2: 'M2 12H5',
  d3: 'M19 12H22',
  d4: 'M8 12H16',
  d5: 'M20.9146 2.83333C20.7087 2.34784 20.1531 2 19.5 2C18.6716 2 18 2.55964 18 3.25C18 3.94036 18.6716 4.5 19.5 4.5C20.3284 4.5 21 5.05964 21 5.75C21 6.44036 20.3284 7 19.5 7C18.8469 7 18.2913 6.65216 18.0854 6.16667',
  d6: 'M5.54393 17C4.69124 17 4 17.6716 4 18.5V20.5C4 21.3284 4.69124 22 5.54393 22M5.54393 17C6.21616 17 6.78805 17.4174 7 18M5.54393 17C4.87169 17 4.2998 17.4174 4.08785 18M5.54393 22C4.87169 22 4.2998 21.5826 4.08785 21M5.54393 22C6.21616 22 6.78805 21.5826 7 21',
  d7: 'M5.75104 13.6894C5.75135 13.8014 5.75164 13.9053 5.75163 14.0001C5.75156 14.4143 5.41571 14.7501 5.0015 14.75C4.58729 14.7499 4.25156 14.4141 4.25163 13.9999C4.25164 13.9073 4.2513 13.804 4.25092 13.691C4.2469 12.4755 4.23916 10.1382 4.63231 8.02922C4.84642 6.88066 5.19164 5.72496 5.77278 4.83873C6.37092 3.92657 7.26042 3.25 8.50193 3.25C9.23326 3.25 9.8708 3.59204 10.3852 4.08955C10.8961 4.58357 11.3219 5.26222 11.6632 6.04261C12.3468 7.60563 12.7508 9.71246 12.7508 12C12.7508 14.1307 13.1301 16.0239 13.7128 17.3563C14.0047 18.0236 14.3328 18.5166 14.6592 18.8322C14.982 19.1443 15.2649 19.25 15.4998 19.25C16.1013 19.25 16.5709 18.9543 16.9746 18.3387C17.3954 17.6972 17.6948 16.7695 17.895 15.6959C18.2608 13.7339 18.2544 11.5341 18.2508 10.3078C18.2504 10.197 18.2501 10.0941 18.2501 10C18.2501 9.58579 18.5859 9.25 19.0001 9.25C19.4144 9.25 19.7501 9.58579 19.7501 10C19.7501 10.0919 19.7505 10.1943 19.7509 10.3064C19.755 11.5212 19.763 13.8603 19.3696 15.9708C19.1554 17.1194 18.8101 18.2751 18.229 19.1613C17.6308 20.0734 16.7413 20.75 15.4998 20.75C14.7684 20.75 14.1309 20.408 13.6164 19.9104C13.1056 19.4164 12.6798 18.7378 12.3385 17.9574C11.6549 16.3944 11.2508 14.2875 11.2508 12C11.2508 9.86926 10.8716 7.97609 10.2889 6.64368C9.99702 5.97636 9.66885 5.48343 9.34249 5.16781C9.01973 4.85568 8.7368 4.75 8.50193 4.75C7.90036 4.75 7.43083 5.04565 7.02714 5.66127C6.60645 6.30282 6.30705 7.23045 6.1069 8.30411C5.74143 10.2646 5.7476 12.4625 5.75104 13.6894Z',
  d8: 'M1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H5C5.41421 11.25 5.75 11.5858 5.75 12C5.75 12.4142 5.41421 12.75 5 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12Z',
  d9: 'M18.25 12C18.25 11.5858 18.5858 11.25 19 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H19C18.5858 12.75 18.25 12.4142 18.25 12Z',
  d10: 'M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z',
  d11: 'M17.25 3.25C17.25 2.0232 18.3912 1.25 19.5 1.25C20.3987 1.25 21.2614 1.73009 21.6051 2.54048C21.7668 2.92181 21.5888 3.36206 21.2075 3.5238C20.8262 3.68553 20.3859 3.50752 20.2242 3.12619C20.1561 2.96559 19.9076 2.75 19.5 2.75C18.9519 2.75 18.75 3.09609 18.75 3.25C18.75 3.40391 18.9519 3.75 19.5 3.75C20.6088 3.75 21.75 4.5232 21.75 5.75C21.75 6.9768 20.6088 7.75 19.5 7.75C18.6013 7.75 17.7386 7.26991 17.3949 6.45952C17.2332 6.07819 17.4112 5.63794 17.7925 5.4762C18.1738 5.31447 18.6141 5.49248 18.7758 5.87381C18.8439 6.03441 19.0924 6.25 19.5 6.25C20.0481 6.25 20.25 5.90391 20.25 5.75C20.25 5.59609 20.0481 5.25 19.5 5.25C18.3912 5.25 17.25 4.4768 17.25 3.25Z',
  d12: 'M4.75 18.5V20.5C4.75 20.6941 4.83127 20.8789 4.9686 21.0166C5.11103 21.1582 5.31325 21.25 5.54393 21.25C5.90196 21.25 6.19144 21.0288 6.29519 20.7436C6.4368 20.3543 6.86715 20.1536 7.25641 20.2952C7.64566 20.4368 7.84642 20.8672 7.70481 21.2564C7.38466 22.1364 6.53036 22.75 5.54393 22.75C4.29758 22.75 3.25 21.7629 3.25 20.5V18.5C3.25 17.2371 4.29758 16.25 5.54393 16.25C6.53036 16.25 7.38466 16.8636 7.70481 17.7436C7.84642 18.1328 7.64566 18.5632 7.25641 18.7048C6.86715 18.8464 6.4368 18.6457 6.29519 18.2564C6.19144 17.9712 5.90196 17.75 5.54393 17.75C5.31325 17.75 5.11103 17.8418 4.9686 17.9834C4.83127 18.1211 4.75 18.3059 4.75 18.5Z',
  d13: 'M4.9686 21.0166C4.83127 20.8789 4.75 20.6941 4.75 20.5V18.5C4.75 18.3059 4.83127 18.1211 4.9686 17.9834C5.11103 17.8418 5.31325 17.75 5.54393 17.75C5.90196 17.75 6.19144 17.9712 6.29519 18.2564L7.70481 17.7436C7.38466 16.8636 6.53036 16.25 5.54393 16.25C4.29758 16.25 3.25 17.2371 3.25 18.5V20.5C3.25 21.7629 4.29758 22.75 5.54393 22.75C6.53036 22.75 7.38466 22.1364 7.70481 21.2564L6.29519 20.7436C6.19144 21.0288 5.90196 21.25 5.54393 21.25C5.31325 21.25 5.11103 21.1582 4.9686 21.0166Z',
  d14: 'M5.75104 13.6894C5.75135 13.8014 5.75164 13.9053 5.75163 14.0001L4.25163 13.9999C4.25164 13.9073 4.2513 13.804 4.25092 13.691C4.2469 12.4755 4.23916 10.1382 4.63231 8.02922C4.84642 6.88066 5.19164 5.72496 5.77278 4.83873C6.37092 3.92657 7.26042 3.25 8.50193 3.25C9.23326 3.25 9.8708 3.59204 10.3852 4.08955C10.8961 4.58357 11.3219 5.26222 11.6632 6.04261C12.3468 7.60563 12.7508 9.71246 12.7508 12C12.7508 14.1307 13.1301 16.0239 13.7128 17.3563C14.0047 18.0236 14.3328 18.5166 14.6592 18.8322C14.982 19.1443 15.2649 19.25 15.4998 19.25C16.1013 19.25 16.5709 18.9543 16.9746 18.3387C17.3954 17.6972 17.6948 16.7695 17.895 15.6959C18.2608 13.7339 18.2544 11.5341 18.2508 10.3078C18.2504 10.197 18.2501 10.0941 18.2501 10H19.7501C19.7501 10.0919 19.7505 10.1943 19.7509 10.3064C19.755 11.5212 19.763 13.8603 19.3696 15.9708C19.1554 17.1194 18.8101 18.2751 18.229 19.1613C17.6308 20.0734 16.7413 20.75 15.4998 20.75C14.7684 20.75 14.1309 20.408 13.6164 19.9104C13.1056 19.4164 12.6798 18.7378 12.3385 17.9574C11.6549 16.3944 11.2508 14.2875 11.2508 12C11.2508 9.86926 10.8716 7.97609 10.2889 6.64368C9.99702 5.97636 9.66885 5.48343 9.34249 5.16781C9.01973 4.85568 8.7368 4.75 8.50193 4.75C7.90036 4.75 7.43083 5.04565 7.02714 5.66127C6.60645 6.30282 6.30705 7.23045 6.1069 8.30411C5.74143 10.2646 5.7476 12.4625 5.75104 13.6894Z',
  d15: 'M5 12.75H2V11.25H5V12.75Z',
  d16: 'M22 12.75H19V11.25H22V12.75Z',
  d17: 'M16 12.75H8V11.25H16V12.75Z',
  d18: 'M17.25 3.25C17.25 2.0232 18.3912 1.25 19.5 1.25C20.3987 1.25 21.2614 1.73009 21.6051 2.54048L20.2242 3.12619C20.1561 2.96559 19.9076 2.75 19.5 2.75C18.9519 2.75 18.75 3.09609 18.75 3.25C18.75 3.40391 18.9519 3.75 19.5 3.75C20.6088 3.75 21.75 4.5232 21.75 5.75C21.75 6.9768 20.6088 7.75 19.5 7.75C18.6013 7.75 17.7386 7.26991 17.3949 6.45952L18.7758 5.87381C18.8439 6.03441 19.0924 6.25 19.5 6.25C20.0481 6.25 20.25 5.90391 20.25 5.75C20.25 5.59609 20.0481 5.25 19.5 5.25C18.3912 5.25 17.25 4.4768 17.25 3.25Z',
};

export const IconSine01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-stroke-rounded IconSine01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSine01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-duotone-rounded IconSine01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSine01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-twotone-rounded IconSine01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSine01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-solid-rounded IconSine01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSine01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-bulk-rounded IconSine01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSine01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-stroke-sharp IconSine01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSine01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sine-01-solid-sharp IconSine01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSine01: TheIconSelfPack = {
  name: 'Sine01',
  StrokeRounded: IconSine01StrokeRounded,
  DuotoneRounded: IconSine01DuotoneRounded,
  TwotoneRounded: IconSine01TwotoneRounded,
  SolidRounded: IconSine01SolidRounded,
  BulkRounded: IconSine01BulkRounded,
  StrokeSharp: IconSine01StrokeSharp,
  SolidSharp: IconSine01SolidSharp,
};