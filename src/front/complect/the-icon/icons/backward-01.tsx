import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.06492 12.6258C4.31931 13.8374 5.67295 14.7077 8.38024 16.4481C11.3247 18.3411 12.797 19.2876 13.9895 18.9229C14.3934 18.7994 14.7654 18.5823 15.0777 18.2876C16 17.4178 16 15.6118 16 12C16 8.38816 16 6.58224 15.0777 5.71235C14.7654 5.41773 14.3934 5.20057 13.9895 5.07707C12.797 4.71243 11.3247 5.6589 8.38024 7.55186C5.67295 9.29233 4.31931 10.1626 4.06492 11.3742C3.97836 11.7865 3.97836 12.2135 4.06492 12.6258Z',
  d2: 'M20 5V19',
  d3: 'M7.89529 6.89181L7.80597 6.94923C6.48938 7.79563 5.44302 8.4683 4.6995 9.08377C3.94314 9.70986 3.38505 10.3671 3.20592 11.2203C3.09803 11.7342 3.09803 12.2661 3.20592 12.78C3.38505 13.6333 3.94314 14.2905 4.6995 14.9166C5.44302 15.532 6.48936 16.2047 7.80594 17.0511L7.89527 17.1085C9.32885 18.0301 10.4642 18.7601 11.3906 19.2076C12.3227 19.658 13.2088 19.9079 14.0838 19.6403C14.5999 19.4825 15.0725 19.2058 15.4673 18.8334C16.1281 18.2102 16.3844 17.3148 16.5049 16.2571C16.625 15.2029 16.625 13.8139 16.625 12.051V11.9493C16.625 10.1865 16.625 8.79739 16.5049 7.7432C16.3844 6.68556 16.1281 5.79017 15.4673 5.16692C15.0725 4.7945 14.5999 4.51783 14.0838 4.36001C13.2088 4.09245 12.3227 4.34237 11.3906 4.79271C10.4642 5.24027 9.32886 5.97018 7.89529 6.89181Z',
  d4: 'M19.875 4C20.4273 4 20.875 4.44772 20.875 5V19C20.875 19.5523 20.4273 20 19.875 20C19.3227 20 18.875 19.5523 18.875 19V5C18.875 4.44772 19.3227 4 19.875 4Z',
  d5: 'M16 19V5L4 12L16 19Z',
  d6: 'M20 4V20',
  d7: 'M16.3735 4.34964C16.6064 4.4834 16.75 4.73145 16.75 5V19C16.75 19.2685 16.6064 19.5166 16.3735 19.6504C16.1407 19.7841 15.8541 19.7831 15.6221 19.6478L3.6221 12.6478C3.39168 12.5134 3.25 12.2668 3.25 12C3.25 11.7332 3.39168 11.4866 3.6221 11.3522L15.6221 4.35217C15.8541 4.21685 16.1407 4.21589 16.3735 4.34964Z',
  d8: 'M18.75 19.75V4.25H20.75V19.75H18.75Z',
} as const;

export const IconBackward01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-stroke-rounded IconBackward01StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-duotone-rounded IconBackward01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-twotone-rounded IconBackward01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-solid-rounded IconBackward01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-bulk-rounded IconBackward01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBackward01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-stroke-sharp IconBackward01StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconBackward01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="backward-01-solid-sharp IconBackward01SolidSharp"
    >
      <path 
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

export const iconPackOfBackward01: TheIconSelfPack = {
  name: 'Backward01',
  StrokeRounded: IconBackward01StrokeRounded,
  DuotoneRounded: IconBackward01DuotoneRounded,
  TwotoneRounded: IconBackward01TwotoneRounded,
  SolidRounded: IconBackward01SolidRounded,
  BulkRounded: IconBackward01BulkRounded,
  StrokeSharp: IconBackward01StrokeSharp,
  SolidSharp: IconBackward01SolidSharp,
};