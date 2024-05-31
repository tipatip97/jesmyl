import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.65309 9C5.18214 5.5 10.5125 3.75 12 2C13.4875 3.75 18.8179 5.5 15.3469 9H8.65309Z',
  d2: 'M18 12V11C18 10.0572 18 9.58579 17.7071 9.29289C17.4142 9 16.9428 9 16 9H8C7.05719 9 6.58579 9 6.29289 9.29289C6 9.58579 6 10.0572 6 11V12',
  d3: 'M17 12H7C5.58579 12 4.87868 12 4.43934 12.4393C4 12.8787 4 13.5858 4 15V19C4 20.4142 4 21.1213 4.43934 21.5607C4.87868 22 5.58579 22 7 22H17C18.4142 22 19.1213 22 19.5607 21.5607C20 21.1213 20 20.4142 20 19V15C20 13.5858 20 12.8787 19.5607 12.4393C19.1213 12 18.4142 12 17 12Z',
  d4: 'M9.50009 22V19C9.48279 16 12 15 12 15C12 15 14.5172 16 14.4999 19V22',
  d5: 'M4.43934 12.4393C4.87868 12 5.58579 12 7 12H17C18.4142 12 19.1213 12 19.5607 12.4393C20 12.8787 20 13.5858 20 15V19C20 20.4142 20 21.1213 19.5607 21.5607C19.1213 22 18.4142 22 17 22H14.4999V19C14.5172 16 12 15 12 15C12 15 9.48279 16 9.50009 19V22H7C5.58579 22 4.87868 22 4.43934 21.5607C4 21.1213 4 20.4142 4 19V15C4 13.5858 4 12.8787 4.43934 12.4393Z',
  d6: 'M12.2769 14.553C12.8037 14.7622 13.4198 15.2289 13.7859 15.5938C14.5273 16.3326 15.2593 17.5165 15.2499 19.2521V22.15C15.2499 22.4328 15.2499 22.5743 15.3378 22.6621C15.4257 22.75 15.5671 22.75 15.8499 22.75H17.0494L17.0494 22.75L17.0494 22.75H17.0495C17.7143 22.75 18.2871 22.7501 18.7459 22.6884C19.2375 22.6223 19.7088 22.4732 20.091 22.091C20.4732 21.7087 20.6223 21.2375 20.6884 20.7458C20.7501 20.2871 20.75 19.7142 20.75 19.0494V14.9506C20.75 14.2858 20.7501 13.7129 20.6884 13.2542C20.6223 12.7625 20.4732 12.2913 20.091 11.909C19.7098 11.5278 19.2401 11.3785 18.75 11.3122L18.75 10.9553V10.9553V10.9552C18.7501 10.5224 18.7501 10.1256 18.7067 9.8028C18.6589 9.44732 18.5465 9.07159 18.2374 8.76257C17.9284 8.45355 17.5527 8.3411 17.1972 8.29331C17.0891 8.27877 16.9727 8.26911 16.8494 8.26269C17.1401 7.72362 17.2743 7.18264 17.2465 6.63759C17.1979 5.68402 16.6611 4.91631 16.0655 4.31564C15.4861 3.73145 14.7577 3.21443 14.1296 2.76861C13.4477 2.28444 12.8692 1.8645 12.5714 1.51425C12.4289 1.34661 12.22 1.24999 12 1.25C11.78 1.25001 11.571 1.34663 11.4285 1.51428C11.1309 1.86451 10.5523 2.28451 9.8704 2.76867C9.24233 3.21447 8.51395 3.73148 7.93464 4.31564C7.33897 4.9163 6.80221 5.68402 6.75358 6.63758C6.72578 7.18263 6.85996 7.72362 7.15068 8.26268C7.02737 8.26911 6.91093 8.27877 6.8028 8.29331C6.44732 8.3411 6.07159 8.45355 5.76257 8.76257C5.45355 9.07159 5.3411 9.44732 5.29331 9.8028C5.24991 10.1256 5.24995 10.5224 5.25 10.9553L5.25001 11V11.3122C4.75987 11.3785 4.29019 11.5278 3.90902 11.909C3.52677 12.2913 3.37771 12.7625 3.31161 13.2542C3.24994 13.7129 3.24997 14.2857 3.25 14.9505V14.9505V14.9506V14.9506L3.25001 15L3.25 19.0494V19.0494V19.0495V19.0495C3.24997 19.7143 3.24994 20.2871 3.31161 20.7458C3.37771 21.2375 3.52677 21.7087 3.90902 22.091C4.29126 22.4732 4.76253 22.6223 5.25416 22.6884C5.71288 22.7501 6.2857 22.75 6.95051 22.75H6.95061L6.95062 22.75L6.95063 22.75H6.95064H8.15009C8.43294 22.75 8.57436 22.75 8.66222 22.6621C8.75009 22.5743 8.75009 22.4328 8.75009 22.15V19.2521C8.74072 17.5165 9.47274 16.3326 10.2141 15.5938C10.5802 15.2289 11.1445 14.809 11.7231 14.553C11.9009 14.4823 12.0991 14.4823 12.2769 14.553ZM6.75001 11.25V11C6.75001 10.5074 6.7516 10.2134 6.77993 10.0027C6.79291 9.90611 6.80821 9.85775 6.81717 9.83597L6.81988 9.82975L6.82187 9.82568L6.82324 9.82324L6.82568 9.82187C6.82761 9.82086 6.83093 9.81924 6.83597 9.81717C6.85775 9.8082 6.90611 9.79291 7.00267 9.77993C7.21339 9.7516 7.5074 9.75001 8.00001 9.75001L16 9.75001C16.4926 9.75001 16.7866 9.7516 16.9973 9.77993C17.0939 9.79291 17.1423 9.8082 17.164 9.81717L17.1693 9.81945L17.1743 9.82187L17.1768 9.82324L17.1781 9.82568L17.1807 9.83107L17.1828 9.83597C17.1918 9.85775 17.2071 9.90611 17.2201 10.0027C17.2484 10.2134 17.25 10.5074 17.25 11V11.25C17.1841 11.25 17.1173 11.25 17.0494 11.25H17.0494L7.00001 11.25L6.95063 11.25H6.95058C6.88276 11.25 6.81589 11.25 6.75001 11.25ZM13.662 22.6621C13.5742 22.75 13.4328 22.75 13.1499 22.75H10.8501C10.5672 22.75 10.4258 22.75 10.338 22.6621C10.2501 22.5743 10.2501 22.4328 10.2501 22.15V19.25L10.2501 19.2457C10.2428 17.9825 10.7604 17.167 11.273 16.6562C11.534 16.3961 11.7963 16.2135 11.9912 16.0972C11.9966 16.094 12.0034 16.094 12.0088 16.0972C12.2037 16.2135 12.466 16.3961 12.727 16.6562C13.2396 17.167 13.7572 17.9825 13.7499 19.2457L13.7499 22.15C13.7499 22.4328 13.7499 22.5743 13.662 22.6621Z',
  d7: 'M12 1.25C12.22 1.24999 12.4289 1.34661 12.5714 1.51425C12.8692 1.8645 13.4477 2.28444 14.1296 2.7686L14.1296 2.76861C14.7577 3.21443 15.4861 3.73145 16.0655 4.31564C16.6611 4.91631 17.1979 5.68402 17.2465 6.63759C17.2961 7.60998 16.8302 8.56947 15.8795 9.52812C15.7386 9.67012 15.5469 9.75 15.3469 9.75H8.65314C8.45314 9.75 8.26143 9.67012 8.1206 9.52812C7.1699 8.56946 6.70399 7.60997 6.75358 6.63758C6.80221 5.68402 7.33897 4.9163 7.93464 4.31564C8.51395 3.73148 9.24233 3.21447 9.8704 2.76867C10.5523 2.28451 11.1309 1.86451 11.4285 1.51428C11.571 1.34663 11.78 1.25001 12 1.25Z',
  d8: 'M6.95063 11.25L7 11.25L17.0494 11.25H17.0494C17.7143 11.25 18.2871 11.2499 18.7458 11.3116C19.2375 11.3777 19.7087 11.5268 20.091 11.909C20.4732 12.2913 20.6223 12.7625 20.6884 13.2542C20.7501 13.7129 20.75 14.2858 20.75 14.9506V19.0494C20.75 19.7142 20.7501 20.2871 20.6884 20.7458C20.6223 21.2375 20.4732 21.7087 20.091 22.091C19.7087 22.4732 19.2375 22.6223 18.7458 22.6884C18.2871 22.7501 17.7142 22.75 17.0494 22.75H17.0494H6.95064H6.95062C6.28576 22.75 5.7129 22.7501 5.25416 22.6884C4.76252 22.6223 4.29126 22.4732 3.90901 22.091C3.52677 21.7087 3.37771 21.2375 3.31161 20.7458C3.24993 20.2871 3.24996 19.7143 3.25 19.0494V19.0494L3.25 15L3.25 14.9506V14.9506C3.24996 14.2857 3.24993 13.7129 3.31161 13.2542C3.37771 12.7625 3.52677 12.2913 3.90901 11.909C4.29126 11.5268 4.76252 11.3777 5.25416 11.3116C5.71289 11.2499 6.28574 11.25 6.95058 11.25H6.95063Z',
  d9: 'M12.2769 14.553C12.0991 14.4823 11.9009 14.4823 11.7231 14.553C11.1445 14.809 10.5802 15.2289 10.2141 15.5938C9.47274 16.3326 8.74071 17.5165 8.75009 19.2521V22.75H10.2501V19.25L10.2501 19.2457C10.2428 17.9825 10.7604 17.167 11.273 16.6562C11.534 16.3961 11.7963 16.2135 11.9912 16.0972L12 16.092L12.0088 16.0972C12.2037 16.2135 12.466 16.3961 12.727 16.6562C13.2396 17.167 13.7572 17.9825 13.7499 19.2457L13.7499 22.75H15.2499V19.2521C15.2593 17.5165 14.5273 16.3326 13.7859 15.5938C13.4198 15.2289 12.8037 14.7623 12.2769 14.553Z',
  d10: 'M5.25001 11.3121C5.25139 11.3119 5.25278 11.3118 5.25416 11.3116C5.6661 11.2562 6.17005 11.2506 6.75001 11.25V11C6.75001 10.5074 6.7516 10.2134 6.77993 10.0026C6.79291 9.90608 6.80821 9.85771 6.81717 9.83593C6.81924 9.83089 6.82086 9.82757 6.82187 9.82564L6.82324 9.82321L6.82568 9.82183C6.82761 9.82082 6.83093 9.8192 6.83597 9.81713C6.85775 9.80817 6.90611 9.79288 7.00267 9.77989C7.21339 9.75156 7.5074 9.74997 8.00001 9.74997L16 9.74997C16.4926 9.74997 16.7866 9.75156 16.9973 9.77989C17.0939 9.79288 17.1423 9.80817 17.164 9.81713C17.1691 9.8192 17.1724 9.82082 17.1743 9.82183L17.1768 9.82321L17.1781 9.82564C17.1792 9.82757 17.1808 9.83089 17.1828 9.83593C17.1918 9.85771 17.2071 9.90608 17.2201 10.0026C17.2484 10.2134 17.25 10.5074 17.25 11V11.25C17.83 11.2506 18.3339 11.2562 18.7458 11.3116C18.7472 11.3118 18.7486 11.3119 18.75 11.3121L18.75 10.9552V10.9552C18.7501 10.5224 18.7501 10.1256 18.7067 9.80276C18.6589 9.44728 18.5465 9.07156 18.2374 8.76253C17.9284 8.45351 17.5527 8.34106 17.1972 8.29327C16.8744 8.24987 16.4776 8.24992 16.0448 8.24997L8.00001 8.24997L7.95526 8.24997H7.95525C7.52244 8.24992 7.12561 8.24987 6.8028 8.29327C6.44732 8.34106 6.07159 8.45351 5.76257 8.76253C5.45355 9.07156 5.3411 9.44728 5.29331 9.80276C5.24991 10.1256 5.24995 10.5224 5.25 10.9552L5.25 10.9552L5.25001 11L5.25001 11.3121Z',
  d11: 'M18 12V9H6V12',
  d12: 'M20 12H4V22H20V12Z',
  d13: 'M9.39704 3.75721C9.80509 3.39683 11.3596 2.54162 11.9905 1.99512C12.5256 2.46844 14.2675 3.44376 14.5779 3.73953C14.8884 4.03531 17.8841 5.77451 15.7128 9.01231H8.25462C6.24351 5.73805 8.88578 4.20874 9.39704 3.75721Z',
  d14: 'M6 8.25C5.58579 8.25 5.25 8.58579 5.25 9V12H6.75V9.75H17.25V12H18.75V9C18.75 8.58579 18.4142 8.25 18 8.25H17.0258C17.2277 7.65803 17.2913 7.08985 17.2249 6.5439C17.1091 5.59217 16.6129 4.8297 16.0237 4.22185C15.4392 3.61879 14.72 3.12399 14.08 2.71068C13.9104 2.60115 13.7491 2.49887 13.5966 2.40213C13.1411 2.11331 12.7634 1.87386 12.4752 1.63821L12.0004 1.25L11.5256 1.63831C11.2374 1.87405 10.8596 2.11363 10.4038 2.40268C10.2515 2.49926 10.0905 2.60136 9.92121 2.71068C9.28124 3.12398 8.56205 3.61876 7.97738 4.22177C7.3881 4.82955 6.89167 5.59194 6.7755 6.54359C6.70884 7.08962 6.77216 7.6579 6.97389 8.25H6Z',
  d15: 'M15.2499 19.002C15.2593 17.2664 14.5273 16.0825 13.7859 15.3437C13.4198 14.9788 13.0538 14.7239 12.7773 14.5589C12.6385 14.4761 12 14.1929 12 14.1929C12 14.1929 11.3615 14.4761 11.2227 14.5589C10.9462 14.7239 10.5802 14.9788 10.2141 15.3437C9.47274 16.0825 8.74072 17.2664 8.75009 19.002V22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V12C3.25 11.5858 3.58579 11.25 4 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12V22C20.75 22.4142 20.4142 22.75 20 22.75H15.2499V19.002Z',
  d16: 'M13.7499 22.75L13.7499 18.9956C13.7572 17.7324 13.2396 16.9169 12.727 16.4061C12.466 16.146 12.1949 15.9582 12 15.8419C11.8051 15.9582 11.534 16.146 11.273 16.4061C10.7604 16.9169 10.2428 17.7324 10.2501 18.9956L10.2501 18.9999V22.75H13.7499Z',
} as const;

export const IconMosque01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-stroke-rounded IconMosque01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-duotone-rounded IconMosque01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-twotone-rounded IconMosque01TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-solid-rounded IconMosque01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-bulk-rounded IconMosque01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMosque01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-stroke-sharp IconMosque01StrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMosque01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mosque-01-solid-sharp IconMosque01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMosque01: TheIconSelfPack = {
  name: 'Mosque01',
  StrokeRounded: IconMosque01StrokeRounded,
  DuotoneRounded: IconMosque01DuotoneRounded,
  TwotoneRounded: IconMosque01TwotoneRounded,
  SolidRounded: IconMosque01SolidRounded,
  BulkRounded: IconMosque01BulkRounded,
  StrokeSharp: IconMosque01StrokeSharp,
  SolidSharp: IconMosque01SolidSharp,
};