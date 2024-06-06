import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.52051 14.4359L14.4335 9.52283',
  d2: 'M12.5685 15.1086C13.3082 16.249 13.1108 17.418 12.2563 18.2725L9.26109 21.2678C8.28269 22.2462 6.69638 22.2462 5.71798 21.2678L2.73185 18.2816C1.75345 17.3032 1.75345 15.7169 2.73185 14.7385L5.72706 11.7433C6.429 11.0413 7.76312 10.636 8.90958 11.4662M15.1083 12.5688C16.2487 13.3085 17.4177 13.1111 18.2722 12.2566L21.2674 9.26138C22.2458 8.28297 22.2458 6.69666 21.2674 5.71825L18.2813 2.7321C17.3029 1.75369 15.7166 1.75369 14.7382 2.7321L11.743 5.72733C11.041 6.42927 10.6357 7.7634 11.4659 8.90986',
  d3: 'M2.03177 16.9054C2.16293 17.7335 2.84714 18.4177 4.21556 19.7861C5.58398 21.1546 6.26819 21.8388 7.09632 21.9699C7.36377 22.0123 7.63623 22.0123 7.90368 21.9699C8.73181 21.8388 9.41602 21.1546 10.7844 19.7861C12.1529 18.4177 12.8371 17.7335 12.9682 16.9054C13.0106 16.6379 13.0106 16.3655 12.9682 16.098C12.9156 15.7656 12.7738 15.4563 12.5344 15.1167L8.88502 11.4673C8.54538 11.2279 8.23613 11.0861 7.90368 11.0335C7.63623 10.9911 7.36377 10.9911 7.09632 11.0335C6.26819 11.1646 5.58398 11.8488 4.21556 13.2173C2.84714 14.5857 2.16293 15.2699 2.03177 16.098C1.98941 16.3655 1.98941 16.6379 2.03177 16.9054Z',
  d4: 'M9.54297 14.4577L14.456 9.54468',
  d5: 'M9.62012 14.4599L14.5036 9.55103',
  d6: 'M15.1504 12.5624C16.284 13.3014 17.446 13.1042 18.2953 12.2504L21.2725 9.25772C22.2451 8.28013 22.2451 6.69515 21.2725 5.71757L18.3044 2.73392C17.3318 1.75634 15.7551 1.75634 14.7825 2.73392L11.8053 5.72664C11.1075 6.42799 10.7047 7.761 11.5299 8.9065',
  d7: 'M12.505 15.1121C13.2403 16.2515 13.0441 17.4195 12.1947 18.2733L9.21748 21.2661C8.24495 22.2437 6.66817 22.2437 5.69564 21.2661L2.72744 18.2824C1.75492 17.3048 1.75492 15.7198 2.72744 14.7423L5.70467 11.7496C6.40239 11.0482 7.7285 10.6432 8.86808 11.4727',
  d8: 'M15.1631 8.83586C15.5536 9.22639 15.5536 9.85955 15.1631 10.2501L10.2501 15.1631C9.85955 15.5536 9.22639 15.5536 8.83586 15.1631C8.44534 14.7726 8.44534 14.1394 8.83586 13.7489L13.7489 8.83586C14.1394 8.44534 14.7726 8.44534 15.1631 8.83586Z',
  d9: 'M6.93989 10.0441C7.31098 9.98531 7.68902 9.98531 8.06011 10.0441C8.37795 10.0944 8.67232 10.1961 8.95339 10.3391C9.44565 10.5895 9.64171 11.1915 9.39131 11.6838C9.14091 12.176 8.53887 12.3721 8.04661 12.1217C7.80169 11.9971 7.52198 11.9768 7.25276 12.0195C7.08149 12.0466 6.86432 12.134 6.48538 12.4389C6.09177 12.7555 5.62263 13.2227 4.92267 13.9227C4.22271 14.6226 3.75551 15.0918 3.43885 15.4854C3.1301 15.8692 2.94086 16.251 3.01946 16.7472C3.04658 16.9185 3.134 17.1357 3.43885 17.5146C3.75551 17.9082 4.22271 18.3774 4.92267 19.0773C5.62263 19.7773 6.09177 20.2445 6.48538 20.5611C6.86916 20.8699 7.251 21.0591 7.74724 20.9805C7.91851 20.9534 8.13568 20.866 8.51462 20.5611C8.90823 20.2445 9.37737 19.7773 10.0773 19.0773C10.7773 18.3774 11.2445 17.9082 11.5611 17.5146C11.866 17.1357 11.9534 16.9185 11.9805 16.7472C12.0232 16.478 12.0029 16.1983 11.8783 15.9534C11.6279 15.4611 11.824 14.8591 12.3162 14.6087C12.8085 14.3583 13.4105 14.5544 13.6609 15.0466C13.8039 15.3277 13.9056 15.622 13.9559 15.9399C14.0147 16.311 14.0147 16.689 13.9559 17.0601C13.8519 17.717 13.5316 18.256 13.1195 18.7683C12.7268 19.2563 12.1815 19.8016 11.5301 20.453L11.53 20.4531C10.9596 21.0235 10.3978 21.613 9.76828 22.1195C9.25598 22.5316 8.71698 22.8519 8.06011 22.9559C7.68901 23.0147 7.31098 23.0147 6.93989 22.9559C6.28302 22.8519 5.74402 22.5316 5.23172 22.1195C4.74366 21.7268 4.19833 21.1815 3.54691 20.53C2.97651 19.9596 2.38699 19.3978 1.88054 18.7683C1.46839 18.256 1.14812 17.717 1.04408 17.0601C0.985306 16.689 0.985306 16.311 1.04408 15.9399C1.14812 15.283 1.46839 14.744 1.88054 14.2317C2.27318 13.7437 2.81853 13.1983 3.46998 12.5469C4.0404 11.9765 4.60217 11.387 5.23172 10.8805C5.74402 10.4684 6.28302 10.1481 6.93989 10.0441Z',
  d10: 'M15.9399 1.04408C16.311 0.985305 16.689 0.985307 17.0601 1.04408C17.717 1.14812 18.256 1.46839 18.7683 1.88054C19.2563 2.27318 19.8017 2.81853 20.4531 3.46998C21.0235 4.04039 21.613 4.60218 22.1195 5.23172C22.5316 5.74402 22.8519 6.28302 22.9559 6.93989C23.0147 7.31098 23.0147 7.68901 22.9559 8.06011C22.8519 8.71698 22.5316 9.25598 22.1195 9.76828C21.7268 10.2563 21.1814 10.8017 20.53 11.4531C19.9596 12.0235 19.3978 12.613 18.7683 13.1195C18.256 13.5316 17.717 13.8519 17.0601 13.9559C16.689 14.0147 16.311 14.0147 15.9399 13.9559C15.6221 13.9056 15.3277 13.8039 15.0466 13.6609C14.5544 13.4105 14.3583 12.8085 14.6087 12.3162C14.8591 11.824 15.4611 11.6279 15.9534 11.8783C16.1983 12.0029 16.478 12.0232 16.7472 11.9805C16.9185 11.9534 17.1357 11.866 17.5146 11.5611C17.9082 11.2445 18.3774 10.7773 19.0773 10.0773C19.7773 9.37737 20.2445 8.90823 20.5611 8.51462C20.8699 8.13084 21.0591 7.749 20.9805 7.25276C20.9534 7.08149 20.866 6.86432 20.5611 6.48538C20.2445 6.09177 19.7773 5.62263 19.0773 4.92267C18.3774 4.22271 17.9082 3.75551 17.5146 3.43885C17.1357 3.134 16.9185 3.04658 16.7472 3.01946C16.251 2.94086 15.8692 3.1301 15.4854 3.43885C15.0918 3.75551 14.6226 4.22271 13.9227 4.92267C13.2227 5.62263 12.7555 6.09177 12.4389 6.48538C12.134 6.86432 12.0466 7.08149 12.0195 7.25276C11.9768 7.52198 11.9971 7.80169 12.1217 8.04661C12.3721 8.53887 12.176 9.14091 11.6838 9.39131C11.1915 9.64171 10.5895 9.44565 10.3391 8.95339C10.1961 8.67232 10.0944 8.37795 10.0441 8.06011C9.98531 7.68902 9.98531 7.31098 10.0441 6.93989C10.1481 6.28302 10.4684 5.74402 10.8805 5.23172C11.2732 4.74366 11.8185 4.19834 12.47 3.54693C13.0404 2.97653 13.6022 2.387 14.2317 1.88054C14.744 1.46839 15.283 1.14812 15.9399 1.04408Z',
  d11: 'M8.00195 15.9994L16.0004 7.99951',
  d12: 'M15.125 11.625L16.5 13L22 7.5L16.5 2L11 7.5L12.375 8.875',
  d13: 'M11.625 15.125L13 16.5L7.5 22L2 16.5L7.5 11L8.875 12.375',
  d14: 'M16.7068 8.70657L8.70828 16.7065L7.29395 15.2924L15.2924 7.29248L16.7068 8.70657Z',
  d15: 'M15.7929 1.29289C16.1834 0.902369 16.8166 0.902369 17.2071 1.29289L22.7071 6.79289C23.0976 7.18342 23.0976 7.81658 22.7071 8.20711L17.2071 13.7071C16.8166 14.0976 16.1834 14.0976 15.7929 13.7071L14.4179 12.3321L15.8321 10.9179L16.5 11.5858L20.5858 7.5L16.5 3.41421L12.4142 7.5L13.0821 8.16789L11.6679 9.58211L10.2929 8.20711C9.90237 7.81658 9.90237 7.18342 10.2929 6.79289L15.7929 1.29289Z',
  d16: 'M6.79289 10.2929C7.18342 9.90237 7.81658 9.90237 8.20711 10.2929L9.58211 11.6679L8.16789 13.0821L7.5 12.4142L3.41421 16.5L7.5 20.5858L11.5858 16.5L10.9179 15.8321L12.3321 14.4179L13.7071 15.7929C14.0976 16.1834 14.0976 16.8166 13.7071 17.2071L8.20711 22.7071C7.81658 23.0976 7.18342 23.0976 6.79289 22.7071L1.29289 17.2071C0.902369 16.8166 0.902369 16.1834 1.29289 15.7929L6.79289 10.2929Z',
};

export const IconLink03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-stroke-rounded IconLink03StrokeRounded"
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

export const IconLink03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-duotone-rounded IconLink03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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

export const IconLink03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-twotone-rounded IconLink03TwotoneRounded"
    >
      <path 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLink03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-solid-rounded IconLink03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLink03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-bulk-rounded IconLink03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLink03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-stroke-sharp IconLink03StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLink03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="link-03-solid-sharp IconLink03SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfLink03: TheIconSelfPack = {
  name: 'Link03',
  StrokeRounded: IconLink03StrokeRounded,
  DuotoneRounded: IconLink03DuotoneRounded,
  TwotoneRounded: IconLink03TwotoneRounded,
  SolidRounded: IconLink03SolidRounded,
  BulkRounded: IconLink03BulkRounded,
  StrokeSharp: IconLink03StrokeSharp,
  SolidSharp: IconLink03SolidSharp,
};