import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.1773 5.17735C14.0936 6.26107 12.0378 5.96225 12.0378 5.96225C12.0378 5.96225 11.7389 3.90637 12.8227 2.82265C13.9064 1.73893 15.9622 2.03775 15.9622 2.03775C15.9622 2.03775 16.2611 4.09363 15.1773 5.17735Z',
  d2: 'M4 14.0593C4 17.341 6.19645 21.1103 8.41889 21.9069C9.1894 22.183 9.98578 21.8019 10.6479 21.3274C11.1502 20.9674 11.7584 20.6236 12.2497 20.6236C12.7409 20.6236 13.3491 20.9674 13.8514 21.3274C14.5135 21.8019 15.3099 22.183 16.0804 21.9069C17.6597 21.3409 19.2258 19.2738 20 16.9473C18.5008 16.5179 17.4057 15.1614 17.4057 13.5544C17.4057 12.0821 18.3248 10.8201 19.6318 10.2886C18.7897 8.79309 17.4136 8 15.8589 8C15.0546 8 14.3154 8.32422 13.7183 8.71286C12.7653 9.33314 11.7341 9.33315 10.781 8.71286C10.1839 8.32422 9.44473 8 8.64044 8C6.07759 8 4 10.1551 4 14.0593Z',
  d3: 'M16.719 2.05078C16.7262 2.12027 16.7347 2.2175 16.741 2.33634C16.7535 2.5727 16.7575 2.90132 16.7229 3.27102C16.6563 3.98291 16.4342 4.98119 15.7077 5.70768C14.9812 6.43416 13.9829 6.65633 13.271 6.72293C12.9013 6.75752 12.5727 6.75345 12.3363 6.74096C12.2175 6.73468 12.1203 6.72617 12.0508 6.71896L11.9308 6.70459C11.6023 6.65683 11.3432 6.3982 11.2955 6.06967L11.281 5.94922C11.2738 5.87973 11.2653 5.7825 11.259 5.66367C11.2466 5.4273 11.2425 5.09868 11.2771 4.72898C11.3437 4.01709 11.5658 3.01881 12.2923 2.29232C13.0188 1.56584 14.0171 1.34367 14.729 1.27707C15.0987 1.24248 15.4273 1.24655 15.6637 1.25904C15.7825 1.26532 15.8797 1.27383 15.9492 1.28104L16.0692 1.29542C16.3977 1.34317 16.6568 1.6018 16.7045 1.93033L16.719 2.05078Z',
  d4: 'M4.77858 9.09078C5.7609 7.88966 7.13419 7.25 8.64044 7.25C9.64385 7.25 10.5261 7.65205 11.1901 8.08427C11.8945 8.54267 12.6049 8.54267 13.3092 8.08427C13.9733 7.65205 14.8555 7.25 15.8589 7.25C17.6963 7.25 19.3163 8.19962 20.2853 9.92065C20.391 10.1084 20.4109 10.3324 20.3399 10.5358C20.2689 10.7392 20.1139 10.9022 19.9143 10.9834C18.8732 11.4067 18.1557 12.4049 18.1557 13.5544C18.1557 14.8087 19.0114 15.884 20.2065 16.2263C20.403 16.2826 20.5681 16.4167 20.6634 16.5975C20.7588 16.7783 20.7762 16.9902 20.7116 17.1842C20.2992 18.4234 19.6749 19.5988 18.9333 20.5488C18.2 21.4881 17.3066 22.2641 16.3335 22.6129C15.1815 23.0258 14.098 22.4268 13.4145 21.937C13.1845 21.7721 12.9469 21.6233 12.7252 21.5182C12.4932 21.4083 12.3354 21.3736 12.2497 21.3736C12.1639 21.3736 12.0061 21.4083 11.7742 21.5182C11.5525 21.6233 11.3148 21.7721 11.0848 21.937C10.4013 22.4268 9.31784 23.0258 8.16585 22.6129C6.81055 22.1272 5.58989 20.8062 4.7243 19.2862C3.84595 17.7438 3.25 15.8542 3.25 14.0593C3.25 11.9787 3.80404 10.2824 4.77858 9.09078Z',
  d5: 'M4 14.0805C4 17.3737 5.5 22 9 22C9 22 11 22 12.2497 20.6677C12.9118 21.1439 14 22 16 22C18.4173 22 19.2258 19.3133 20 16.9786C18.5008 16.5477 17.4057 15.1864 17.4057 13.5738C17.4057 12.0964 18.3248 10.83 19.6318 10.2966C18.7897 8.79586 17.4136 8 15.8589 8C15.0546 8 12.2497 9.18219 12.2497 9.18219C12.2497 9.18219 10.5 8 8.64044 8C6.07759 8 4 10.1626 4 14.0805Z',
  d6: 'M16.7057 1.94149C16.7139 2.02076 16.735 2.22328 16.741 2.33634C16.7535 2.5727 16.7575 2.90132 16.7229 3.27102C16.6563 3.98291 16.4342 4.98119 15.7077 5.70768C14.9812 6.43416 13.9829 6.65633 13.271 6.72293C12.9013 6.75752 12.5727 6.75345 12.3363 6.74096C12.2175 6.73468 11.3761 6.62395 11.3761 6.62395C11.3761 6.62395 11.2653 5.7825 11.259 5.66367C11.2466 5.4273 11.2425 5.09868 11.2771 4.72898C11.3437 4.01709 11.5658 3.01881 12.2923 2.29232C13.0188 1.56584 14.0171 1.34367 14.729 1.27707C15.0987 1.24248 15.4273 1.24655 15.6637 1.25904C15.777 1.26503 15.9798 1.28612 16.0586 1.29432L16.0692 1.29542L16.6239 1.37605L16.7045 1.93033L16.7057 1.94149Z',
  d7: 'M11.349 7.90491C11.7055 8.06405 12.0006 8.22317 12.2092 8.3441C12.4858 8.2315 12.9681 8.03845 13.3731 7.88738C13.7764 7.73696 14.2147 7.58284 14.6088 7.46531C14.9736 7.35652 15.3917 7.25 15.711 7.25C17.5282 7.25 19.129 8.20365 20.0861 9.92962L20.4967 10.6702L19.7197 10.991C18.6916 11.4156 17.9809 12.4177 17.9809 13.5738C17.9809 14.8355 18.8284 15.9146 20.0083 16.2578L20.75 16.4735L20.4274 17.4585L20.4274 17.4585C20.0753 18.5382 19.6704 19.7794 19.0648 20.7618C18.3912 21.8544 17.3908 22.75 15.8505 22.75C14.0807 22.75 12.933 22.1276 12.2006 21.6276C11.5526 22.1398 10.8325 22.4128 10.2575 22.5604C9.89078 22.6546 9.4375 22.75 8.93256 22.75C6.81285 22.75 5.37474 21.3156 4.50666 19.6202C3.63818 17.924 3.25 15.8206 3.25 14.0805C3.25 11.9936 3.79722 10.2924 4.75986 9.09724C5.73029 7.89237 7.08765 7.25 8.57722 7.25C9.64131 7.25 10.641 7.58884 11.349 7.90491Z',
} as const;

export const IconAppleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stroke-rounded IconAppleStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAppleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-duotone-rounded IconAppleDuotoneRounded"
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

export const IconAppleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-twotone-rounded IconAppleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAppleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-solid-rounded IconAppleSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-bulk-rounded IconAppleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-stroke-sharp IconAppleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAppleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="apple-solid-sharp IconAppleSolidSharp"
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

export const iconPackOfApple: TheIconSelfPack = {
  name: 'Apple',
  StrokeRounded: IconAppleStrokeRounded,
  DuotoneRounded: IconAppleDuotoneRounded,
  TwotoneRounded: IconAppleTwotoneRounded,
  SolidRounded: IconAppleSolidRounded,
  BulkRounded: IconAppleBulkRounded,
  StrokeSharp: IconAppleStrokeSharp,
  SolidSharp: IconAppleSolidSharp,
};