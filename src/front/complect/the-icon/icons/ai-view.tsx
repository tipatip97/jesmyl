import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.75 2.75L7 5L7 8M4.75 3.5C5.16421 3.5 5.5 3.16421 5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C4.33579 2 4 2.33579 4 2.75C4 3.16421 4.33579 3.5 4.75 3.5Z',
  d2: 'M19.25 2.75L17 5L17 8M19.25 3.5C18.8358 3.5 18.5 3.16421 18.5 2.75C18.5 2.33579 18.8358 2 19.25 2C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5Z',
  d3: 'M12 2.75L12 7M12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5Z',
  d4: 'M15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16Z',
  d5: 'M12 10C18 10 22 16 22 16C22 16 18 22 12 22C6 22 2 16 2 16C2 16 6 10 12 10Z',
  d6: 'M22 16C22 16 18 10 12 10C6 10 2 16 2 16C2 16 6 22 12 22C18 22 22 16 22 16ZM12 13C13.6569 13 15 14.3431 15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13Z',
  d7: 'M3.25 2.75C3.25 1.92157 3.92157 1.25 4.75 1.25C5.57843 1.25 6.25 1.92157 6.25 2.75C6.25 2.88437 6.23233 3.01461 6.19919 3.13853L7.53033 4.46967C7.67098 4.61032 7.75 4.80109 7.75 5L7.75 8C7.75 8.41421 7.41421 8.75 7 8.75C6.58578 8.75 6.25 8.41421 6.25 8L6.25 5.31066L5.13853 4.19919C5.01461 4.23233 4.88437 4.25 4.75 4.25C3.92157 4.25 3.25 3.57843 3.25 2.75Z',
  d8: 'M17.75 2.75C17.75 1.92157 18.4216 1.25 19.25 1.25C20.0784 1.25 20.75 1.92157 20.75 2.75C20.75 3.57843 20.0784 4.25 19.25 4.25C19.1156 4.25 18.9854 4.23233 18.8615 4.19919L17.75 5.31066L17.75 8C17.75 8.41421 17.4142 8.75 17 8.75C16.5858 8.75 16.25 8.41421 16.25 8L16.25 5C16.25 4.80109 16.329 4.61032 16.4697 4.46967L17.8008 3.13853C17.7677 3.01461 17.75 2.88437 17.75 2.75Z',
  d9: 'M10.5 2.75C10.5 1.92157 11.1716 1.25 12 1.25C12.8284 1.25 13.5 1.92157 13.5 2.75C13.5 3.30521 13.1984 3.78997 12.75 4.04933L12.75 7C12.75 7.41421 12.4142 7.75 12 7.75C11.5858 7.75 11.25 7.41421 11.25 7V4.04933C10.8016 3.78997 10.5 3.30521 10.5 2.75Z',
  d10: 'M22.6237 16.4165L22.6157 16.4274C22.4793 16.6122 22.0973 17.1297 21.8574 17.4176C21.3687 18.0041 20.6521 18.786 19.7381 19.5694C17.922 21.1261 15.2534 22.75 12 22.75C8.74657 22.75 6.07801 21.1261 4.26191 19.5694C3.34794 18.786 2.63134 18.0041 2.14258 17.4176C1.90294 17.1301 1.5213 16.6129 1.38444 16.4275L1.38443 16.4275L1.37596 16.416C1.20801 16.1641 1.20801 15.8359 1.37596 15.584L1.38443 15.5725C1.52128 15.3871 1.90293 14.8699 2.14258 14.5824C2.63134 13.9959 3.34794 13.214 4.26191 12.4306C6.07801 10.8739 8.74657 9.25 12 9.25C15.2534 9.25 17.922 10.8739 19.7381 12.4306C20.6521 13.214 21.3687 13.9959 21.8574 14.5824C22.0971 14.8699 22.4787 15.3871 22.6156 15.5725L22.624 15.584C22.792 15.8359 22.7917 16.1646 22.6237 16.4165ZM12 19.75C9.92893 19.75 8.25 18.0711 8.25 16C8.25 13.9289 9.92893 12.25 12 12.25C14.0711 12.25 15.75 13.9289 15.75 16C15.75 18.0711 14.0711 19.75 12 19.75Z',
  d11: 'M22.6157 16.4274L22.6237 16.4165C22.7917 16.1646 22.792 15.8359 22.624 15.584L22.6156 15.5725C22.4787 15.3871 22.0971 14.8699 21.8574 14.5824C21.3687 13.9959 20.6521 13.214 19.7381 12.4306C17.922 10.8739 15.2534 9.25 12 9.25C8.74657 9.25 6.07801 10.8739 4.26191 12.4306C3.34794 13.214 2.63134 13.9959 2.14258 14.5824C1.90293 14.8699 1.52128 15.3871 1.38443 15.5725L1.37596 15.584C1.20801 15.8359 1.20801 16.1641 1.37596 16.416L1.38443 16.4275C1.52127 16.6129 1.90293 17.1301 2.14258 17.4176C2.63134 18.0041 3.34794 18.786 4.26191 19.5694C6.07801 21.1261 8.74657 22.75 12 22.75C15.2534 22.75 17.922 21.1261 19.7381 19.5694C20.6521 18.786 21.3687 18.0041 21.8574 17.4176C22.0973 17.1297 22.4793 16.6122 22.6157 16.4274Z',
  d12: 'M8.25 16C8.25 18.0711 9.92893 19.75 12 19.75C14.0711 19.75 15.75 18.0711 15.75 16C15.75 13.9289 14.0711 12.25 12 12.25C9.92893 12.25 8.25 13.9289 8.25 16Z',
  d13: 'M4.75 2.75L7 5V8.5M4.75 3.5C5.16421 3.5 5.5 3.16421 5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C4.33579 2 4 2.33579 4 2.75C4 3.16421 4.33579 3.5 4.75 3.5Z',
  d14: 'M19.25 2.75L17 5L17 8.5M19.25 3.5C18.8358 3.5 18.5 3.16421 18.5 2.75C18.5 2.33579 18.8358 2 19.25 2C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5Z',
  d15: 'M12 2.75L12 7.5M12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5Z',
  d16: 'M3.25 2.75C3.25 1.92157 3.92157 1.25 4.75 1.25C5.57843 1.25 6.25 1.92157 6.25 2.75C6.25 2.88437 6.23233 3.01461 6.19919 3.13853L7.53033 4.46967C7.67098 4.61032 7.75 4.80109 7.75 5V8.5H6.25V5.31066L5.13853 4.19919C5.01461 4.23233 4.88437 4.25 4.75 4.25C3.92157 4.25 3.25 3.57843 3.25 2.75Z',
  d17: 'M17.75 2.75C17.75 1.92157 18.4216 1.25 19.25 1.25C20.0784 1.25 20.75 1.92157 20.75 2.75C20.75 3.57843 20.0784 4.25 19.25 4.25C19.1156 4.25 18.9854 4.23233 18.8615 4.19919L17.75 5.31066L17.75 8.5H16.25L16.25 5C16.25 4.80109 16.329 4.61032 16.4697 4.46967L17.8008 3.13853C17.7677 3.01461 17.75 2.88437 17.75 2.75Z',
  d18: 'M10.5 2.75C10.5 1.92157 11.1716 1.25 12 1.25C12.8284 1.25 13.5 1.92157 13.5 2.75C13.5 3.30521 13.1984 3.78997 12.75 4.04933L12.75 7.5H11.25V4.04933C10.8016 3.78997 10.5 3.30521 10.5 2.75Z',
  d19: 'M22.6406 16.1628C22.5139 16.352 22.3192 16.6427 22.2751 16.7032C22.1481 16.8778 21.9619 17.1239 21.7205 17.4176C21.2386 18.0041 20.5319 18.786 19.6306 19.5694C17.8397 21.1261 15.2083 22.75 12 22.75C8.79175 22.75 6.16025 21.1261 4.36937 19.5694C3.46809 18.786 2.76144 18.0041 2.27947 17.4176C2.03808 17.1239 1.85194 16.8778 1.72486 16.7032C1.68083 16.6427 1.48612 16.352 1.35941 16.1629C1.30319 16.0789 1.26036 16.015 1.25 16C1.25 16 1.6613 15.3841 1.72486 15.2968C1.85194 15.1222 2.03808 14.8761 2.27947 14.5824C2.76144 13.9959 3.46809 13.214 4.36937 12.4306C6.16025 10.8739 8.79175 9.25 12 9.25C15.2083 9.25 17.8397 10.8739 19.6306 12.4306C20.5319 13.214 21.2386 13.9959 21.7205 14.5824C21.9619 14.8761 22.1481 15.1222 22.2751 15.2968C22.3192 15.3573 22.5139 15.648 22.6406 15.8372C22.6968 15.9211 22.7396 15.985 22.75 16C22.7396 16.015 22.6968 16.0789 22.6406 16.1628ZM12 19.75C9.92893 19.75 8.25 18.0711 8.25 16C8.25 13.9289 9.92893 12.25 12 12.25C14.0711 12.25 15.75 13.9289 15.75 16C15.75 18.0711 14.0711 19.75 12 19.75Z',
} as const;

export const IconAiViewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-stroke-rounded IconAiViewStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiViewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-duotone-rounded IconAiViewDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiViewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-twotone-rounded IconAiViewTwotoneRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAiViewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-solid-rounded IconAiViewSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconAiViewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-bulk-rounded IconAiViewBulkRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconAiViewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-stroke-sharp IconAiViewStrokeSharp"
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
        d={d.d4} 
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

export const IconAiViewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ai-view-solid-sharp IconAiViewSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAiView: TheIconSelfPack = {
  name: 'AiView',
  StrokeRounded: IconAiViewStrokeRounded,
  DuotoneRounded: IconAiViewDuotoneRounded,
  TwotoneRounded: IconAiViewTwotoneRounded,
  SolidRounded: IconAiViewSolidRounded,
  BulkRounded: IconAiViewBulkRounded,
  StrokeSharp: IconAiViewStrokeSharp,
  SolidSharp: IconAiViewSolidSharp,
};