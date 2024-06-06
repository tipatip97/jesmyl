import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 10.5L19.5 12.5M14 14L16 16M10.5 17.5L12.5 19.5',
  d2: 'M10.5355 4.67767C11.9002 3.31296 12.5826 2.6306 13.3438 2.3153C14.3587 1.8949 15.4991 1.8949 16.5141 2.3153C17.2753 2.6306 17.9576 3.31296 19.3223 4.67767C20.687 6.04238 21.3694 6.72474 21.6847 7.48594C22.1051 8.50088 22.1051 9.64126 21.6847 10.6562C21.3694 11.4174 20.687 12.0998 19.3223 13.4645L13.4645 19.3223C12.0998 20.687 11.4174 21.3694 10.6562 21.6847C9.64126 22.1051 8.50088 22.1051 7.48594 21.6847C6.72474 21.3694 6.04238 20.687 4.67767 19.3223C3.31296 17.9576 2.6306 17.2753 2.3153 16.5141C1.8949 15.4991 1.8949 14.3587 2.3153 13.3438C2.6306 12.5826 3.31296 11.9002 4.67767 10.5355L10.5355 4.67767Z',
  d3: 'M16.8011 1.62239C15.6024 1.12587 14.2555 1.12587 13.0568 1.62239C12.5696 1.8242 12.1382 2.13201 11.673 2.53776C11.2173 2.93519 10.6906 3.46195 10.0247 4.12781L10.0247 4.12784L10.0246 4.12791L4.12791 10.0246L4.1279 10.0246L4.1278 10.0247C3.46194 10.6906 2.93519 11.2174 2.53776 11.673C2.13201 12.1382 1.8242 12.5696 1.62239 13.0568C1.12587 14.2555 1.12587 15.6024 1.62239 16.8011C1.8242 17.2883 2.13201 17.7197 2.53776 18.1849C2.9352 18.6405 3.46199 19.1673 4.12788 19.8332L4.16671 19.872C4.83264 20.538 5.35945 21.0648 5.81512 21.4622C6.28029 21.868 6.71171 22.1758 7.19893 22.3776C8.39764 22.8741 9.7445 22.8741 10.9432 22.3776C11.4304 22.1758 11.8618 21.868 12.327 21.4622C12.4628 21.3438 12.5307 21.2846 12.5566 21.2077C12.575 21.1533 12.5771 21.091 12.5625 21.0355C12.5419 20.9571 12.4759 20.8911 12.3441 20.7593L10.913 19.3282C10.5225 18.9377 10.5225 18.3045 10.913 17.914C11.3035 17.5235 11.9367 17.5235 12.3272 17.914L13.7061 19.2928C13.9061 19.4928 14.0061 19.5928 14.1304 19.5928C14.2546 19.5928 14.3546 19.4928 14.5546 19.2928L15.7919 18.0556C15.9919 17.8556 16.0919 17.7556 16.0919 17.6313C16.0919 17.5071 15.9919 17.4071 15.7919 17.2071L14.413 15.8282C14.0225 15.4377 14.0225 14.8045 14.413 14.414C14.8035 14.0235 15.4367 14.0235 15.8272 14.414L17.2061 15.7928C17.4061 15.9928 17.5061 16.0928 17.6304 16.0928C17.7546 16.0928 17.8546 15.9928 18.0546 15.7928L19.2919 14.5556C19.4919 14.3556 19.5919 14.2556 19.5919 14.1313C19.5919 14.0071 19.4919 13.9071 19.2919 13.7071L17.913 12.3282C17.5225 11.9377 17.5225 11.3045 17.913 10.914C18.3035 10.5235 18.9367 10.5235 19.3272 10.914L20.7574 12.3441C20.8902 12.4769 20.9566 12.5433 21.0357 12.5638C21.0905 12.578 21.152 12.5759 21.2057 12.558C21.2833 12.5322 21.3429 12.4638 21.4622 12.327C21.868 11.8618 22.1758 11.4304 22.3776 10.9432C22.8741 9.7445 22.8741 8.39764 22.3776 7.19893C22.1758 6.71171 21.868 6.28029 21.4622 5.81512C21.0648 5.35945 20.538 4.83264 19.872 4.16671L19.8332 4.12788L19.8331 4.12777C19.1673 3.46193 18.6405 2.93518 18.1849 2.53776C17.7197 2.13201 17.2883 1.8242 16.8011 1.62239Z',
  d4: 'M13.0568 1.62239C14.2555 1.12587 15.6024 1.12587 16.8011 1.62239C17.2883 1.8242 17.7197 2.13201 18.1849 2.53776C18.6405 2.93518 19.1673 3.46193 19.8331 4.12777L19.8332 4.12788L19.872 4.16671C20.538 4.83264 21.0648 5.35945 21.4622 5.81512C21.868 6.28029 22.1758 6.71171 22.3776 7.19893C22.8741 8.39764 22.8741 9.7445 22.3776 10.9432C22.1758 11.4304 21.868 11.8618 21.4622 12.327C21.0648 12.7827 20.538 13.3094 19.8722 13.9753L19.872 13.9754L13.9754 19.872L13.9753 19.8722C13.3094 20.538 12.7827 21.0648 12.327 21.4622C11.8618 21.868 11.4304 22.1758 10.9432 22.3776C9.7445 22.8741 8.39764 22.8741 7.19893 22.3776C6.71171 22.1758 6.28029 21.868 5.81512 21.4622C5.35945 21.0648 4.83264 20.538 4.16671 19.872L4.12788 19.8332C3.46199 19.1673 2.9352 18.6405 2.53776 18.1849C2.13201 17.7197 1.8242 17.2883 1.62239 16.8011C1.12587 15.6024 1.12587 14.2555 1.62239 13.0568C1.8242 12.5696 2.13201 12.1382 2.53776 11.673C2.93521 11.2173 3.462 10.6905 4.1279 10.0246L4.12791 10.0246L10.0246 4.12791L10.0247 4.12784C10.6906 3.46196 11.2173 2.9352 11.673 2.53776C12.1382 2.13201 12.5696 1.8242 13.0568 1.62239Z',
  d5: 'M14.1308 19.7176L13.9754 19.873C13.4859 20.3626 13.0712 20.7772 12.7051 21.1202L10.913 19.3282C10.5225 18.9377 10.5225 18.3045 10.913 17.914C11.3035 17.5235 11.9367 17.5235 12.3272 17.914L14.1308 19.7176Z',
  d6: 'M17.6308 16.2176L16.2166 17.6318L14.413 15.8282C14.0225 15.4377 14.0225 14.8045 14.413 14.414C14.8035 14.0235 15.4367 14.0235 15.8272 14.414L17.6308 16.2176Z',
  d7: 'M21.1193 12.706C20.7762 13.0722 20.3619 13.4866 19.8723 13.9761L19.7166 14.1318L17.913 12.3282C17.5225 11.9377 17.5225 11.3045 17.913 10.914C18.3035 10.5235 18.9367 10.5235 19.3272 10.914L21.1193 12.706Z',
  d8: 'M9.27273 22L22 9.27273L14.7273 2L2 14.7273L9.27273 22Z',
  d9: 'M15.2576 1.46967C14.9647 1.17678 14.4898 1.17678 14.1969 1.46967L1.46967 14.1969C1.17678 14.4898 1.17678 14.9647 1.46967 15.2576L8.7424 22.5303C9.03529 22.8232 9.51016 22.8232 9.80306 22.5303L12.1359 20.1975L9.96875 18.0303L11.0294 16.9697L13.1966 19.1368L15.6359 16.6975L13.4688 14.5303L14.5294 13.4697L16.6966 15.6368L19.1359 13.1975L16.9688 11.0303L18.0294 9.96967L20.1966 12.1368L22.5303 9.80306C22.8232 9.51016 22.8232 9.03529 22.5303 8.7424L15.2576 1.46967Z',
};

export const IconRulerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-stroke-rounded IconRulerStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRulerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-duotone-rounded IconRulerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconRulerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-twotone-rounded IconRulerTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRulerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-solid-rounded IconRulerSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRulerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-bulk-rounded IconRulerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconRulerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-stroke-sharp IconRulerStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRulerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="ruler-solid-sharp IconRulerSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRuler: TheIconSelfPack = {
  name: 'Ruler',
  StrokeRounded: IconRulerStrokeRounded,
  DuotoneRounded: IconRulerDuotoneRounded,
  TwotoneRounded: IconRulerTwotoneRounded,
  SolidRounded: IconRulerSolidRounded,
  BulkRounded: IconRulerBulkRounded,
  StrokeSharp: IconRulerStrokeSharp,
  SolidSharp: IconRulerSolidSharp,
};