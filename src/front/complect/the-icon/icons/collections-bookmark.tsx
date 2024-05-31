import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.9017 6.12874C18 7.25748 18 9.07416 18 12.7075V14.2925C18 17.9258 18 19.7425 16.9017 20.8713C15.8033 22 14.0355 22 10.5 22C6.96447 22 5.1967 22 4.09835 20.8713C3 19.7425 3 17.9258 3 14.2925V12.7075C3 9.07416 3 7.25748 4.09835 6.12874C5.1967 5 6.96447 5 10.5 5C14.0355 5 15.8033 5 16.9017 6.12874Z',
  d2: 'M7.5 5.5V10.3693C7.5 11.3046 7.5 11.7722 7.78982 11.9396C8.35105 12.2638 9.4038 11.1823 9.90375 10.8567C10.1937 10.6678 10.3387 10.5734 10.5 10.5734C10.6613 10.5734 10.8063 10.6678 11.0962 10.8567C11.5962 11.1823 12.6489 12.2638 13.2102 11.9396C13.5 11.7722 13.5 11.3046 13.5 10.3693V5.5',
  d3: 'M9 2H11C15.714 2 18.0711 2 19.5355 3.46447C21 4.92893 21 7.28595 21 12V18',
  d4: 'M7.5 5.04248V10.3693C7.5 11.3046 7.5 11.7722 7.78982 11.9396C8.21829 12.1871 8.93323 11.6153 9.46997 11.1861C9.63628 11.053 9.78548 10.9337 9.90375 10.8567C10.1937 10.6678 10.3387 10.5734 10.5 10.5734C10.6613 10.5734 10.8063 10.6678 11.0962 10.8567C11.2145 10.9337 11.3637 11.053 11.53 11.1861C12.0668 11.6153 12.7817 12.1871 13.2102 11.9396C13.5 11.7722 13.5 11.3046 13.5 10.3693V5.04248C15.1451 5.12675 16.1713 5.37824 16.9017 6.12875C18 7.25749 18 9.07418 18 12.7075V14.2925C18 17.9258 18 19.7425 16.9017 20.8713C15.8033 22 14.0355 22 10.5 22C6.96447 22 5.1967 22 4.09835 20.8713C3 19.7425 3 17.9258 3 14.2925V12.7075C3 9.07418 3 7.25749 4.09835 6.12875C4.82865 5.37824 5.85491 5.12675 7.5 5.04248Z',
  d5: 'M10.5575 4.25C8.83847 4.24998 7.35508 4.24997 6.28258 4.39815C5.17444 4.55126 4.27169 4.87517 3.56083 5.6057C2.85276 6.33336 2.54133 7.25268 2.39363 8.38161C2.24997 9.47969 2.24999 10.8825 2.25 12.6526V14.3474C2.24999 16.1175 2.24997 17.5203 2.39363 18.6184C2.54133 19.7473 2.85276 20.6666 3.56083 21.3943C4.27169 22.1248 5.17444 22.4487 6.28258 22.6018C7.35508 22.75 8.83846 22.75 10.5575 22.75C12.2765 22.75 13.6449 22.75 14.7174 22.6018C15.8256 22.4487 16.7283 22.1248 17.4392 21.3943C18.1472 20.6666 18.4587 19.7473 18.6064 18.6184C18.75 17.5203 18.75 16.1175 18.75 14.3474V12.6526C18.75 10.8825 18.75 9.4797 18.6064 8.38161C18.4587 7.25268 18.1472 6.33336 17.4392 5.6057C16.7283 4.87517 15.8256 4.55126 14.7174 4.39815C13.6449 4.24997 12.2765 4.24998 10.5575 4.25ZM8.25 10.3692V5.9908C8.89397 5.97549 9.63578 5.9751 10.5 5.9751C11.3642 5.9751 12.106 5.97549 12.75 5.9908V10.3692C12.75 10.7158 12.7491 10.9602 12.7391 11.1406L11.4842 10.2142C11.3582 10.1321 11.2194 10.0417 11.0904 9.9759C10.9384 9.89844 10.7417 9.82333 10.5 9.82333C10.2583 9.82333 10.0616 9.89844 9.90961 9.9759C9.78056 10.0417 9.64183 10.1321 9.5158 10.2142L8.26086 11.1406C8.25092 10.9602 8.25 10.7158 8.25 10.3692Z',
  d6: 'M16.1031 3.42414C14.8237 3.25212 13.1353 3.25 10.75 3.25H8.75C8.19772 3.25 7.75 2.80229 7.75 2.25C7.75 1.69772 8.19772 1.25 8.75 1.25L10.8248 1.25C13.1184 1.24998 14.9414 1.24996 16.3696 1.44198C17.8421 1.63994 19.0436 2.05836 19.9926 3.00736C20.9416 3.95636 21.3601 5.15794 21.558 6.63039C21.75 8.05859 21.75 9.88165 21.75 12.1752V18.25C21.75 18.8023 21.3023 19.25 20.75 19.25C20.1977 19.25 19.75 18.8023 19.75 18.25V12.25C19.75 9.86471 19.7479 8.17634 19.5759 6.89689C19.4077 5.64621 19.0939 4.93704 18.5784 4.42157C18.063 3.90611 17.3538 3.59229 16.1031 3.42414Z',
  d7: 'M10.5575 4.25C8.83847 4.24998 7.35508 4.24997 6.28258 4.39815C5.17444 4.55126 4.27169 4.87517 3.56083 5.6057C2.85276 6.33336 2.54133 7.25268 2.39363 8.38161C2.24997 9.47969 2.24999 10.8825 2.25 12.6526V12.6526V14.3474V14.3474C2.24999 16.1175 2.24997 17.5203 2.39363 18.6184C2.54133 19.7473 2.85276 20.6666 3.56083 21.3943C4.27169 22.1248 5.17444 22.4487 6.28258 22.6018C7.35508 22.75 8.83846 22.75 10.5575 22.75C12.2765 22.75 13.6449 22.75 14.7174 22.6018C15.8256 22.4487 16.7283 22.1248 17.4392 21.3943C18.1472 20.6666 18.4587 19.7473 18.6064 18.6184C18.75 17.5203 18.75 16.1175 18.75 14.3474V12.6526C18.75 10.8825 18.75 9.4797 18.6064 8.38161C18.4587 7.25268 18.1472 6.33336 17.4392 5.6057C16.7283 4.87517 15.8256 4.55126 14.7174 4.39815C13.6449 4.24997 12.2765 4.24998 10.5575 4.25H10.5575Z',
  d8: 'M8.25 10.3692V5.9908C8.89397 5.97549 9.63577 5.9751 10.5 5.9751C11.3642 5.9751 12.106 5.97549 12.75 5.9908V10.3692C12.75 10.7158 12.7491 10.9602 12.7391 11.1406L11.4842 10.2142C11.3582 10.1321 11.2194 10.0417 11.0904 9.9759C10.9384 9.89843 10.7417 9.82333 10.5 9.82333C10.2583 9.82333 10.0616 9.89843 9.9096 9.9759C9.78055 10.0417 9.64183 10.1321 9.5158 10.2142L8.26086 11.1406C8.25092 10.9602 8.25 10.7158 8.25 10.3692Z',
  d9: 'M3.00022 5.00026L18 5L18 22L3.00022 22V5.00026Z',
  d10: 'M7.5 5V12L10.5 10L13.5 12V5',
  d11: 'M9 2H21V18',
  d12: 'M17.2498 4.75L3.24998 4.75026C2.6977 4.75027 2.25 5.19798 2.25 5.75026V21.7501C2.25 22.3024 2.69772 22.7501 3.25 22.7501L17.2498 22.7501C17.515 22.7501 17.7694 22.6448 17.9569 22.4572C18.1444 22.2697 18.2498 22.0154 18.2498 21.7501L18.2498 5.75C18.2498 5.48478 18.1444 5.23042 17.9569 5.04289C17.7693 4.85535 17.515 4.75 17.2498 4.75ZM7.25 6.75V12.75L10.25 10.75L13.25 12.75V6.75H7.25Z',
  d13: 'M19.75 3.25H8.75V1.25H20.75C21.3023 1.25 21.75 1.69772 21.75 2.25V18.25H19.75V3.25Z',
} as const;

export const IconCollectionsBookmarkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-stroke-rounded IconCollectionsBookmarkStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCollectionsBookmarkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-duotone-rounded IconCollectionsBookmarkDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconCollectionsBookmarkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-twotone-rounded IconCollectionsBookmarkTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCollectionsBookmarkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-solid-rounded IconCollectionsBookmarkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCollectionsBookmarkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-bulk-rounded IconCollectionsBookmarkBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCollectionsBookmarkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-stroke-sharp IconCollectionsBookmarkStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCollectionsBookmarkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="collections-bookmark-solid-sharp IconCollectionsBookmarkSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCollectionsBookmark: TheIconSelfPack = {
  name: 'CollectionsBookmark',
  StrokeRounded: IconCollectionsBookmarkStrokeRounded,
  DuotoneRounded: IconCollectionsBookmarkDuotoneRounded,
  TwotoneRounded: IconCollectionsBookmarkTwotoneRounded,
  SolidRounded: IconCollectionsBookmarkSolidRounded,
  BulkRounded: IconCollectionsBookmarkBulkRounded,
  StrokeSharp: IconCollectionsBookmarkStrokeSharp,
  SolidSharp: IconCollectionsBookmarkSolidSharp,
};