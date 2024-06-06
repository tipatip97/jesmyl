import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.1564 7.23099L11.2883 6.15969L14.2119 4.24954C4.58902 2.72954 3.15548 8.6394 3.09662 8.90429L3.09093 8.9298L3.08206 8.96494C2.87776 9.71974 2.85964 10.5136 3.02917 11.2825C3.1987 12.0514 3.55113 12.774 4.05808 13.3919L4.92616 14.4632L2 16.3749C11.6227 17.904 13.0587 11.9839 13.1177 11.7185L13.1234 11.693L13.1322 11.6579C13.3366 10.9031 13.3547 10.1093 13.1852 9.34036C13.0157 8.57144 12.6633 7.84892 12.1564 7.23099Z',
  d2: 'M19.5 7V12.5C19.5 16.6421 16.1421 20 12 20M19.5 7C20.2002 7 21.5085 8.9943 22 9.5M19.5 7C18.7998 7 17.4915 8.9943 17 9.5',
  d3: 'M11.2883 6.15969L12.1564 7.23099C12.6633 7.84892 13.0157 8.57144 13.1852 9.34036C13.3547 10.1093 13.3366 10.9031 13.1322 11.6579L13.1234 11.693L13.1177 11.7185C13.0587 11.9839 11.6227 17.904 2 16.3749L4.92616 14.4632L4.05808 13.3919C3.55113 12.774 3.1987 12.0514 3.02917 11.2825C2.85964 10.5136 2.87776 9.71974 3.08206 8.96494L3.09093 8.9298L3.09662 8.90429C3.15548 8.6394 4.58902 2.72954 14.2119 4.24954L11.2883 6.15969ZM8.10593 12.5439C9.33803 12.5439 10.3369 11.5451 10.3369 10.313C10.3369 9.08085 9.33803 8.08203 8.10593 8.08203C6.87382 8.08203 5.875 9.08085 5.875 10.313C5.875 11.5451 6.87382 12.5439 8.10593 12.5439Z',
  d4: 'M1.88979 17.1146C6.86296 17.9029 9.86359 16.7655 11.6364 15.2583C13.3406 13.8094 13.7931 12.1171 13.8583 11.8364C14.0907 10.9686 14.1099 10.0575 13.9157 9.17647C13.7206 8.29124 13.3157 7.4621 12.7359 6.75473L12.7344 6.75288L12.3922 6.33066L14.6202 4.87501C14.8799 4.70536 15.0083 4.39335 14.9434 4.09004C14.8784 3.78674 14.6334 3.55472 14.327 3.50633C9.34852 2.71994 6.34616 3.85747 4.57296 5.36393C2.86939 6.81124 2.41743 8.50089 2.35216 8.78156C2.11984 9.64944 2.10059 10.5605 2.29485 11.4416C2.49002 12.3269 2.89499 13.156 3.47486 13.8634L3.47633 13.8652L3.81841 14.2874L1.59391 15.7406C1.52121 15.7945 1.41821 15.8887 1.37098 15.9607C1.32024 16.0379 1.2831 16.1257 1.26352 16.2211C1.25323 16.271 1.25297 16.3988 1.25297 16.4501L1.2529 16.4588L1.25195 16.4501C1.25195 16.4501 1.25267 16.4684 1.2529 16.4588C1.2658 16.5709 1.30429 16.6818 1.37021 16.7827C1.47567 16.9441 1.71701 17.0688 1.88979 17.1146ZM8.10742 12.8125C9.48813 12.8125 10.6074 11.6932 10.6074 10.3125C10.6074 8.93179 9.48813 7.8125 8.10742 7.8125C6.72671 7.8125 5.60742 8.93179 5.60742 10.3125C5.60742 11.6932 6.72671 12.8125 8.10742 12.8125Z',
  d5: 'M16.0511 9.96317C15.655 9.57824 15.646 8.94514 16.031 8.5491C16.2206 8.30748 16.9239 7.43487 17.1568 7.15998C17.4058 6.86621 17.6917 6.55218 17.9827 6.30431C18.1287 6.18002 18.2993 6.05202 18.4879 5.95109C18.6686 5.8544 18.9328 5.74609 19.248 5.74609C19.5633 5.74609 19.8275 5.8544 20.0082 5.95109C20.1968 6.05202 20.3674 6.18002 20.5134 6.30431C20.8044 6.55218 21.0903 6.86621 21.3392 7.15998C21.5722 7.43487 22.2755 8.30748 22.4651 8.5491C22.8501 8.94514 22.8411 9.57824 22.445 9.96317C22.2524 10.1504 22.0036 10.2445 21.7547 10.2461H20.248V12.2461C20.248 16.9405 16.4425 20.7461 11.748 20.7461C11.1958 20.7461 10.748 20.2984 10.748 19.7461C10.748 19.1938 11.1958 18.7461 11.748 18.7461C15.3379 18.7461 18.248 15.8359 18.248 12.2461V10.2461H16.7414C16.4924 10.2444 16.2437 10.1504 16.0511 9.96317Z',
  d6: 'M1.88979 17.1146C6.86296 17.9029 9.86359 16.7655 11.6364 15.2583C13.3406 13.8094 13.7931 12.1171 13.8583 11.8364C14.0907 10.9686 14.1099 10.0575 13.9157 9.17647C13.7206 8.29124 13.3157 7.4621 12.7359 6.75473L12.7344 6.75288L12.3922 6.33066L14.6202 4.87501C14.8799 4.70536 15.0083 4.39335 14.9434 4.09004C14.8784 3.78674 14.6334 3.55472 14.327 3.50633C9.34852 2.71994 6.34616 3.85747 4.57296 5.36393C2.86939 6.81124 2.41743 8.50089 2.35216 8.78156C2.11984 9.64944 2.10059 10.5605 2.29485 11.4416C2.49002 12.3269 2.89499 13.156 3.47486 13.8634L3.47633 13.8652L3.81841 14.2874L1.59391 15.7406C1.52121 15.7945 1.41821 15.8887 1.37098 15.9607C1.32024 16.0379 1.2831 16.1257 1.26352 16.2211C1.25323 16.271 1.25297 16.3988 1.25297 16.4501L1.2529 16.4588L1.25195 16.4501C1.25195 16.4501 1.25267 16.4684 1.2529 16.4588C1.2658 16.5709 1.30429 16.6818 1.37021 16.7827C1.47567 16.9441 1.71701 17.0688 1.88979 17.1146ZM8.10742 12.811C9.48813 12.811 10.6074 11.6917 10.6074 10.311C10.6074 9.37344 10.0913 8.5564 9.32764 8.12853C8.96673 7.92632 8.55054 7.81104 8.10742 7.81104C6.72671 7.81104 5.60742 8.93032 5.60742 10.311C5.60742 11.2474 6.12216 12.0635 6.88409 12.4918C7.24572 12.6951 7.66303 12.811 8.10742 12.811Z',
  d7: 'M14.6201 4.87501L12.3921 6.33066L9.3275 8.12853C8.96659 7.92632 8.5504 7.81104 8.10728 7.81104C6.72657 7.81104 5.60728 8.93032 5.60728 10.311C5.60728 11.2474 6.12201 12.0635 6.88395 12.4918L3.81827 14.2874L3.47619 13.8652L3.47472 13.8634C2.89485 13.156 2.48988 12.3269 2.29471 11.4416C2.10045 10.5605 2.1197 9.64944 2.35202 8.78156C2.41729 8.50089 2.86925 6.81124 4.57282 5.36393C6.34602 3.85747 9.34838 2.71994 14.3269 3.50633C14.6333 3.55472 14.8782 3.78674 14.9432 4.09004C15.0082 4.39335 14.8798 4.70536 14.6201 4.87501Z',
  d8: 'M8.02738 12.5388C9.24308 12.5388 10.2286 11.5405 10.2286 10.309C10.2286 9.07744 9.24308 8.0791 8.02738 8.0791C6.81169 8.0791 5.82617 9.07744 5.82617 10.309C5.82617 11.5405 6.81169 12.5388 8.02738 12.5388Z',
  d9: 'M2.92368 10.4253C3.11461 4.36115 9.84748 3.43626 13.7583 4.23046C13.8243 4.24387 13.8385 4.33458 13.7819 4.37289L11.1504 6.15411C12.3406 7.59337 13.0565 8.4041 13.1307 10.2023C13.0345 16.3729 5.92851 17.2501 2.28692 16.4004C2.22237 16.3854 2.21022 16.2966 2.26589 16.2589L4.90404 14.4735C3.71378 13.0342 2.99791 12.2235 2.92368 10.4253Z',
  d10: 'M11.8662 19.9858H19.1681C19.2226 19.9858 19.2668 19.9411 19.2668 19.8859V7.62648M16.797 9.49552L19.2668 6.98438L21.7277 9.49552',
  d11: 'M1.88784 17.1146C6.861 17.9029 9.86163 16.7655 11.6345 15.2583C13.3387 13.8094 13.7911 12.1171 13.8564 11.8364C14.0887 10.9686 14.108 10.0575 13.9138 9.17647C13.7186 8.29124 13.3137 7.4621 12.7339 6.75473L12.7324 6.75288L12.3903 6.33066L14.6183 4.87501C14.8779 4.70536 15.0064 4.39335 14.9414 4.09004C14.8764 3.78674 14.6315 3.55472 14.3251 3.50633C9.34657 2.71994 6.34421 3.85747 4.57101 5.36393C2.86744 6.81124 2.41547 8.50089 2.35021 8.78156C2.11789 9.64944 2.09864 10.5605 2.29289 11.4416C2.48807 12.3269 2.89304 13.156 3.47291 13.8634L3.47438 13.8652L3.81645 14.2874L1.59196 15.7406C1.51925 15.7945 1.41625 15.8887 1.36902 15.9607C1.31828 16.0379 1.28115 16.1257 1.26157 16.2211C1.25128 16.271 1.25102 16.3988 1.25102 16.4501L1.25095 16.4588L1.25 16.4501C1.25 16.4501 1.25072 16.4684 1.25095 16.4588C1.26384 16.5709 1.30233 16.6818 1.36825 16.7827C1.47372 16.9441 1.71506 17.0688 1.88784 17.1146ZM8.10547 12.8125C9.48618 12.8125 10.6055 11.6932 10.6055 10.3125C10.6055 8.93179 9.48618 7.8125 8.10547 7.8125C6.72476 7.8125 5.60547 8.93179 5.60547 10.3125C5.60547 11.6932 6.72476 12.8125 8.10547 12.8125Z',
  d12: 'M19.5429 5.33579L22.75 8.54289L21.3358 9.95711L20.5429 9.16421V19.75C20.5429 20.3023 20.0952 20.75 19.5429 20.75H12.0429V18.75H18.5429V9.16421L17.75 9.95711L16.3358 8.54289L19.5429 5.33579Z',
};

export const IconTropicalStormTracks02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-stroke-rounded IconTropicalStormTracks02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="8.10593" 
        cy="10.312" 
        r="2.23093" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconTropicalStormTracks02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-duotone-rounded IconTropicalStormTracks02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="8.10593" 
        cy="10.313" 
        r="2.23093" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconTropicalStormTracks02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-twotone-rounded IconTropicalStormTracks02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8.10593" 
        cy="10.313" 
        r="2.23093" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTropicalStormTracks02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-solid-rounded IconTropicalStormTracks02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTropicalStormTracks02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-bulk-rounded IconTropicalStormTracks02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTropicalStormTracks02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-stroke-sharp IconTropicalStormTracks02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTropicalStormTracks02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-tracks-02-solid-sharp IconTropicalStormTracks02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfTropicalStormTracks02: TheIconSelfPack = {
  name: 'TropicalStormTracks02',
  StrokeRounded: IconTropicalStormTracks02StrokeRounded,
  DuotoneRounded: IconTropicalStormTracks02DuotoneRounded,
  TwotoneRounded: IconTropicalStormTracks02TwotoneRounded,
  SolidRounded: IconTropicalStormTracks02SolidRounded,
  BulkRounded: IconTropicalStormTracks02BulkRounded,
  StrokeSharp: IconTropicalStormTracks02StrokeSharp,
  SolidSharp: IconTropicalStormTracks02SolidSharp,
};