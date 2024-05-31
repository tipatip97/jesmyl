import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 17.9808V12.7075C3 9.07416 3 7.25748 4.09835 6.12874C5.1967 5 6.96447 5 10.5 5C14.0355 5 15.8033 5 16.9017 6.12874C18 7.25748 18 9.07416 18 12.7075V17.9808C18 20.2867 18 21.4396 17.2755 21.8523C15.8724 22.6514 13.2405 19.9852 11.9906 19.1824C11.2657 18.7168 10.9033 18.484 10.5 18.484C10.0967 18.484 9.73425 18.7168 9.00938 19.1824C7.7595 19.9852 5.12763 22.6514 3.72454 21.8523C3 21.4396 3 20.2867 3 17.9808Z',
  d2: 'M9 2H11C15.714 2 18.0711 2 19.5355 3.46447C21 4.92893 21 7.28595 21 12V18',
  d3: 'M16.1031 3.42414C14.8237 3.25212 13.1353 3.25 10.75 3.25H8.75C8.19772 3.25 7.75 2.80229 7.75 2.25C7.75 1.69772 8.19772 1.25 8.75 1.25L10.8248 1.25C13.1184 1.24998 14.9414 1.24996 16.3696 1.44198C17.8421 1.63994 19.0436 2.05836 19.9926 3.00736C20.9416 3.95636 21.3601 5.15794 21.558 6.63039C21.75 8.05859 21.75 9.88165 21.75 12.1752V18.25C21.75 18.8023 21.3023 19.25 20.75 19.25C20.1977 19.25 19.75 18.8023 19.75 18.25V12.25C19.75 9.86471 19.7479 8.17634 19.5759 6.89689C19.4077 5.64621 19.0939 4.93704 18.5784 4.42157C18.063 3.90611 17.3538 3.59229 16.1031 3.42414Z',
  d4: 'M10.4425 4.25C12.1615 4.24998 13.6449 4.24997 14.7174 4.39815C15.8256 4.55126 16.7283 4.87517 17.4392 5.6057C18.1472 6.33336 18.4587 7.25268 18.6064 8.38161C18.75 9.47969 18.75 10.8825 18.75 12.6526V12.6526L18.75 18.0425C18.75 19.1429 18.7501 20.0518 18.6518 20.7335C18.5517 21.4271 18.3196 22.1206 17.6467 22.504C17.0341 22.8529 16.3603 22.7793 15.8025 22.5987C15.2397 22.4164 14.6717 22.0873 14.1564 21.74L11.5853 19.8135C11.2096 19.5721 10.9761 19.4233 10.788 19.3288C10.5176 19.1742 10.2913 19.2644 10.212 19.3288C10.0239 19.4233 9.79045 19.5721 9.4147 19.8135L6.84361 21.74C6.3283 22.0873 5.76034 22.4164 5.19752 22.5987C4.63975 22.7793 3.96591 22.8529 3.35335 22.504C2.68036 22.1206 2.44826 21.4271 2.34825 20.7335C2.24994 20.0518 2.24997 19.143 2.25 18.0426V18.0425L2.25 12.6526C2.24999 10.8825 2.24997 9.4797 2.39363 8.38161C2.54133 7.25268 2.85276 6.33336 3.56084 5.6057C4.27169 4.87517 5.17444 4.55126 6.28258 4.39815C7.35508 4.24997 8.72354 4.24998 10.4425 4.25H10.4425Z',
  d5: 'M9 2H21V18',
  d6: 'M3 5.01C3 5.00448 3.00448 5 3.01 5H17.99C17.9955 5 18 5.00448 18 5.01V22L10.5 18L3 22V5.01Z',
  d7: 'M2 5.49951C2 5.0853 2.33579 4.74951 2.75 4.74951H17.75C18.1642 4.74951 18.5 5.0853 18.5 5.49951V22.7495L10.25 18.3495L2 22.7495V5.49951Z',
  d8: 'M20 3.25H9.25V1.25H21C21.5523 1.25 22 1.69772 22 2.25V18H20V3.25Z',
} as const;

export const IconAllBookmarkStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-stroke-rounded IconAllBookmarkStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAllBookmarkDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-duotone-rounded IconAllBookmarkDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAllBookmarkTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-twotone-rounded IconAllBookmarkTwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAllBookmarkSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-solid-rounded IconAllBookmarkSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAllBookmarkBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-bulk-rounded IconAllBookmarkBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAllBookmarkStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-stroke-sharp IconAllBookmarkStrokeSharp"
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

export const IconAllBookmarkSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="all-bookmark-solid-sharp IconAllBookmarkSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAllBookmark: TheIconSelfPack = {
  name: 'AllBookmark',
  StrokeRounded: IconAllBookmarkStrokeRounded,
  DuotoneRounded: IconAllBookmarkDuotoneRounded,
  TwotoneRounded: IconAllBookmarkTwotoneRounded,
  SolidRounded: IconAllBookmarkSolidRounded,
  BulkRounded: IconAllBookmarkBulkRounded,
  StrokeSharp: IconAllBookmarkStrokeSharp,
  SolidSharp: IconAllBookmarkSolidSharp,
};