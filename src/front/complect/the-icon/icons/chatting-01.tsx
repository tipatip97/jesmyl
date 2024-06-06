import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 9C19.2048 5.01455 15.5128 2 11.0793 2C6.06549 2 2 5.85521 2 10.61C2 12.8946 2.93819 14.9704 4.46855 16.5108C4.80549 16.85 5.03045 17.3134 4.93966 17.7903C4.78982 18.5701 4.45026 19.2975 3.95305 19.9037C5.26123 20.1449 6.62147 19.9277 7.78801 19.3127C8.20039 19.0954 8.40657 18.9867 8.55207 18.9646C8.65392 18.9492 8.78659 18.9636 9 19.0002',
  d2: 'M11 16.2617C11 19.1674 13.4628 21.5234 16.5 21.5234C16.8571 21.5238 17.2132 21.4908 17.564 21.425C17.8165 21.3775 17.9428 21.3538 18.0309 21.3673C18.119 21.3807 18.244 21.4472 18.4938 21.58C19.2004 21.9558 20.0244 22.0885 20.8169 21.9411C20.5157 21.5707 20.31 21.1262 20.2192 20.6496C20.1642 20.3582 20.3005 20.075 20.5046 19.8677C21.4317 18.9263 22 17.6578 22 16.2617C22 13.356 19.5372 11 16.5 11C13.4628 11 11 13.356 11 16.2617Z',
  d3: 'M19.8657 12.1001C19.954 11.6161 20 11.1182 20 10.61C20 5.85521 15.97 2 11 2C6.03 2 2 5.85521 2 10.61C2 12.8946 2.93 14.9704 4.447 16.5108C4.781 16.85 5.004 17.3134 4.914 17.7903C4.76547 18.5701 4.42887 19.2975 3.936 19.9037C5.23276 20.1449 6.58112 19.9277 7.73749 19.3127C8.14626 19.0954 8.35065 18.9867 8.49487 18.9646C8.6391 18.9426 8.84569 18.9814 9.25887 19.059C9.83292 19.1668 10.4156 19.2208 11 19.2201C11.3106 19.2201 11.6174 19.205 11.9199 19.1757C11.3387 18.3414 11 17.3393 11 16.2617C11 13.356 13.4628 11 16.5 11C17.7678 11 18.9354 11.4105 19.8657 12.1001Z',
  d4: 'M10.25 16.2617C10.25 12.9108 13.0802 10.25 16.5 10.25C19.9198 10.25 22.75 12.9108 22.75 16.2617C22.75 17.8671 22.0953 19.3213 21.039 20.3939C20.9957 20.4379 20.9721 20.478 20.9621 20.5032C20.9595 20.5098 20.9581 20.5143 20.9575 20.5171C21.0261 20.8706 21.1789 21.1975 21.3988 21.468C21.5658 21.6733 21.6121 21.9514 21.5209 22.1998C21.4296 22.4482 21.2142 22.6301 20.954 22.6785C19.9913 22.8576 18.9951 22.6961 18.1416 22.2422C18.0361 22.1861 17.9664 22.1492 17.9148 22.1234C17.8665 22.1314 17.8009 22.1436 17.7025 22.1621C17.306 22.2365 16.9034 22.2739 16.4995 22.2734C13.08 22.2731 10.25 19.6125 10.25 16.2617Z',
  d5: 'M11 1.25C5.64745 1.25 1.25 5.41003 1.25 10.61C1.25 13.1039 2.26637 15.3654 3.9126 17.037C4.14324 17.2712 4.2056 17.4985 4.1771 17.6507C4.05135 18.3102 3.76709 18.9225 3.35406 19.4306C3.18713 19.6359 3.14075 19.914 3.23202 20.1624C3.32329 20.4107 3.53869 20.5926 3.79885 20.641C5.26585 20.9139 6.7864 20.668 8.08964 19.9749C8.2562 19.8864 8.37575 19.8229 8.4685 19.7765C8.52845 19.7465 8.55843 19.7315 8.58217 19.7241C8.60285 19.7178 8.60711 19.7167 8.60787 19.7166C8.61159 19.7158 8.60229 19.7178 8.60802 19.7168C8.61376 19.7158 8.60444 19.717 8.60816 19.7165C8.62713 19.714 8.64925 19.7137 8.67407 19.7175C8.77272 19.731 8.9062 19.7559 9.12044 19.7961C9.36087 19.8413 9.53788 19.5825 9.43432 19.3609C8.99592 18.4227 8.75 17.3758 8.75 16.2617C8.75 12.0181 12.3175 8.75 16.5 8.75C17.6243 8.75 18.7042 8.98615 19.6822 9.41393C20.1809 9.632 20.4302 9.74104 20.5719 9.62639C20.7137 9.51173 20.6649 9.27283 20.5673 8.79503C19.6849 4.47485 15.7127 1.25 11 1.25Z',
  d6: 'M11 1.25C5.64745 1.25 1.25 5.41003 1.25 10.61C1.25 13.1039 2.26637 15.3654 3.9126 17.037C4.14324 17.2712 4.2056 17.4985 4.1771 17.6507C4.05135 18.3102 3.76709 18.9225 3.35406 19.4306C3.18713 19.6359 3.14075 19.914 3.23202 20.1624C3.32329 20.4107 3.53869 20.5926 3.79885 20.641C5.26585 20.9139 6.7864 20.668 8.08964 19.9749C8.2562 19.8864 8.37575 19.8229 8.4685 19.7765C8.52845 19.7465 8.55843 19.7315 8.58217 19.7241C8.60591 19.7168 8.60661 19.7167 8.60802 19.7165C8.62702 19.714 8.64918 19.7137 8.67407 19.7175C8.77272 19.731 8.9062 19.7559 9.12044 19.7961C9.36087 19.8413 9.53788 19.5825 9.43432 19.3609C8.99592 18.4227 8.75 17.3758 8.75 16.2617C8.75 12.0181 12.3175 8.75 16.5 8.75C17.6243 8.75 18.7042 8.98615 19.6822 9.41393C20.1809 9.632 20.4302 9.74104 20.5719 9.62639C20.7137 9.51173 20.6649 9.27283 20.5673 8.79503C19.6849 4.47485 15.7127 1.25 11 1.25Z',
  d7: 'M8.98368 18.8571C8.4529 18.7286 7.92497 18.5621 7.37131 18.3685L3.79112 19.9492C3.78341 19.9526 3.7752 19.9456 3.77743 19.9375L4.69206 16.617C3.4357 15.3458 2.00622 13.8115 2.00622 10.3996C1.82328 5.4028 7.24655 1.74833 11.1012 2.01194C11.9954 2.01212 12.9963 2.25396 13.8395 2.45769L13.8735 2.4659C15.1064 2.8253 17.1562 3.99932 18.3692 5.68609C19.3875 7.10215 19.7414 8.54366 19.8281 9.0031',
  d8: 'M21.5829 18.1216C22.9036 15.2437 20.8918 12.001 18.1313 11.2207C15.5118 10.3421 12.1405 11.8825 11.2565 14.5C10.3724 17.1175 11.7078 20.3461 14.8531 21.1618C16.4741 21.7055 17.7451 21.3271 18.1736 21.1616C18.8539 21.3751 20.3554 21.6856 20.8648 21.9975C20.9744 22.0645 20.7937 21.2464 20.6428 19.517C20.9028 19.0975 21.4739 18.6987 21.5829 18.1216Z',
  d9: 'M22.75 16.2093C22.75 12.8975 19.9301 10.25 16.5 10.25C13.0699 10.25 10.25 12.8975 10.25 16.2093C10.25 19.5211 13.0699 22.1686 16.5 22.1686C17.317 22.1686 18.0986 22.0189 18.8155 21.7461L21.5872 22.75L21.0574 20.2874C22.1042 19.2241 22.75 17.79 22.75 16.2093Z',
  d10: 'M11.5 1.25C5.87469 1.25 1.25 5.38009 1.25 10.5465C1.25 13.0125 2.30905 15.2496 4.02593 16.9083L3.15699 20.75L7.70259 19.1839C8.41767 19.4428 9.17198 19.6305 9.95471 19.738C9.3486 18.7025 9 17.5023 9 16.2093C9 12.1462 12.4421 9 16.5 9C18.5111 9 20.3709 9.77277 21.7355 11.0469C21.7451 10.8813 21.75 10.7144 21.75 10.5465C21.75 5.38009 17.1253 1.25 11.5 1.25Z',
};

export const IconChatting01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-stroke-rounded IconChatting01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconChatting01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-duotone-rounded IconChatting01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconChatting01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-twotone-rounded IconChatting01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconChatting01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-solid-rounded IconChatting01SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChatting01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-bulk-rounded IconChatting01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChatting01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-stroke-sharp IconChatting01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconChatting01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chatting-01-solid-sharp IconChatting01SolidSharp"
    >
      <path 
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

export const iconPackOfChatting01: TheIconSelfPack = {
  name: 'Chatting01',
  StrokeRounded: IconChatting01StrokeRounded,
  DuotoneRounded: IconChatting01DuotoneRounded,
  TwotoneRounded: IconChatting01TwotoneRounded,
  SolidRounded: IconChatting01SolidRounded,
  BulkRounded: IconChatting01BulkRounded,
  StrokeSharp: IconChatting01StrokeSharp,
  SolidSharp: IconChatting01SolidSharp,
};