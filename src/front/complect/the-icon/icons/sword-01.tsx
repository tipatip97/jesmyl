import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 19.5C2.98686 19.5717 3.45571 19.7949 3.83041 20.1696C4.20512 20.5443 4.42832 21.0131 4.5 21.5',
  d2: 'M8 16L4 20',
  d3: 'M9 16.5L19.8538 7.92675C20.1737 7.64942 20.3975 7.27769 20.4927 6.86509L21.5 2.5L17.1349 3.50733C16.7223 3.60254 16.3506 3.82626 16.0732 4.14625L7.5 15',
  d4: 'M4 13H4.57157C5.10201 13 5.61071 13.2107 5.98579 13.5858L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4284V20',
  d5: 'M19.8538 7.92675L9 16.5L7.5 15L16.0732 4.14625C16.3506 3.82626 16.7223 3.60254 17.1349 3.50733L21.5 2.5L20.4927 6.86509C20.3975 7.27769 20.1737 7.64942 19.8538 7.92675Z',
  d6: 'M4.19432 12.25C3.67272 12.25 3.24988 12.6728 3.24988 13.1944C3.24988 13.716 3.67272 14.1389 4.19432 14.1389H4.73414C4.98462 14.1389 5.22485 14.2384 5.40196 14.4155L6.786 15.7995L3.97367 18.6119C3.63294 18.4325 3.26782 18.3152 2.89567 18.2604C2.34928 18.18 1.84112 18.5577 1.76068 19.1041C1.68023 19.6505 2.05796 20.1586 2.60435 20.2391C2.88587 20.2805 3.15569 20.4088 3.37332 20.6264C3.59095 20.8441 3.71923 21.1139 3.76068 21.3954C3.84112 21.9418 4.34928 22.3195 4.89567 22.2391C5.44207 22.1586 5.81979 21.6505 5.73935 21.1041C5.68455 20.7319 5.56727 20.3668 5.38788 20.0261L8.20022 17.2138L9.58437 18.5979C9.76149 18.775 9.86099 19.0153 9.86099 19.2657V19.8056C9.86099 20.3272 10.2838 20.75 10.8054 20.75C11.327 20.75 11.7499 20.3272 11.7499 19.8056V19.2657C11.7499 18.5143 11.4514 17.7936 10.92 17.2623L6.73761 13.0799C6.20626 12.5485 5.48559 12.25 4.73414 12.25H4.19432Z',
  d7: 'M22.0302 1.96968C22.2131 2.15254 22.2888 2.41669 22.2307 2.66866L21.2233 7.03375C21.0924 7.60108 20.7848 8.11221 20.3448 8.49353C20.3362 8.50099 20.3275 8.50825 20.3185 8.51531L9.46477 17.0886C9.16627 17.3243 8.73853 17.2993 8.46955 17.0303L6.96955 15.5303C6.70058 15.2614 6.67556 14.8336 6.91134 14.5351L15.4846 3.68138C15.4916 3.67245 15.4989 3.66367 15.5064 3.65507C15.8877 3.21508 16.3988 2.90747 16.9661 2.77655L21.3312 1.76922C21.5832 1.71107 21.8474 1.78683 22.0302 1.96968Z',
  d8: 'M9 16.5L20.4927 7.5L21.5 2.5L16.5 3.50733L7.5 15',
  d9: 'M4 13L5.4 13.0002L11 18.6V20',
  d10: 'M9.65666 17.0199L20.7195 8.35631L22 2L15.6439 3.28058L6.98046 14.3437L5.30893 12.6722L3.60416 12.672L3.60391 14.1669L4.68964 14.1671L6.73216 16.2096L3.37014 19.5717C3.01196 19.3554 2.61933 19.2175 2.21775 19.1584L2 20.6374C2.33172 20.6862 2.65021 20.8377 2.90624 21.0937C3.16227 21.3498 3.31376 21.6683 3.3626 22L4.84157 21.7822C4.78237 21.3802 4.64418 20.9871 4.42745 20.6285L7.78924 17.2667L9.83282 19.3102V20.3959H11.3277V18.691L9.65666 17.0199Z',
} as const;

export const IconSword01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-stroke-rounded IconSword01StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSword01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-duotone-rounded IconSword01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSword01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-twotone-rounded IconSword01TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSword01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-solid-rounded IconSword01SolidRounded"
    >
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

export const IconSword01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-bulk-rounded IconSword01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSword01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-stroke-sharp IconSword01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
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

export const IconSword01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sword-01-solid-sharp IconSword01SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSword01: TheIconSelfPack = {
  name: 'Sword01',
  StrokeRounded: IconSword01StrokeRounded,
  DuotoneRounded: IconSword01DuotoneRounded,
  TwotoneRounded: IconSword01TwotoneRounded,
  SolidRounded: IconSword01SolidRounded,
  BulkRounded: IconSword01BulkRounded,
  StrokeSharp: IconSword01StrokeSharp,
  SolidSharp: IconSword01SolidSharp,
};