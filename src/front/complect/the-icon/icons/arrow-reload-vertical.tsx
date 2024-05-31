import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 3.5L5.5 14.5C5.5 18.2133 8.18503 21 12 21',
  d2: 'M18.5 20.5L18.5 9.5C18.5 5.78672 15.815 3 12 3',
  d3: 'M21 18C21 18 19.1588 20.5 18.5 20.5C17.8412 20.5 16 18 16 18',
  d4: 'M8 5.49998C8 5.49998 6.15878 3.00001 5.49998 3C4.84118 2.99999 3 5.5 3 5.5',
  d5: 'M18.5 20.5L18.5 9.5C18.5 5.78672 15.815 3 12 3M18.5 20.5C19.1588 20.5 21 18 21 18M18.5 20.5C17.8412 20.5 16 18 16 18',
  d6: 'M2.19488 4.9069C1.86736 5.35159 1.96235 5.97759 2.40705 6.3051C2.58581 6.43676 2.79387 6.50014 3.00007 6.49997L4.50012 6.49997L4.50012 14.5C4.50012 18.7552 7.62252 22 12.0001 22C12.5524 22 13.0001 21.5523 13.0001 21C13.0001 20.4477 12.5524 20 12.0001 20C8.74779 20 6.50012 17.6714 6.50012 14.5L6.50012 6.49997L8.00827 6.49997C8.21177 6.49847 8.41668 6.43504 8.59307 6.30513C9.03777 5.97762 9.13265 5.35146 8.80514 4.90676L8.80259 4.90339C8.74581 4.8282 8.58413 4.61414 8.49044 4.49409C8.301 4.25133 8.03872 3.9243 7.75223 3.59433C7.47005 3.26933 7.1447 2.91856 6.83078 2.64118C6.67496 2.5035 6.49836 2.36272 6.31294 2.25094C6.15497 2.15571 5.86092 1.99993 5.50008 1.99993C5.13924 1.99994 4.8452 2.15571 4.68723 2.25094C4.50181 2.36272 4.32521 2.50349 4.16939 2.64117C3.85546 2.91855 3.53011 3.26931 3.24793 3.59431C2.96144 3.92427 2.69915 4.25131 2.50971 4.49406C2.41617 4.61391 2.25476 4.82762 2.19771 4.90314L2.19766 4.90321L2.19488 4.9069Z',
  d7: 'M19.5 9.5C19.5 5.24485 16.3776 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4C15.2523 4 17.5 6.3286 17.5 9.5L17.5 17.5L16 17.5C15.7938 17.4998 15.5857 17.5632 15.407 17.6948C14.9623 18.0223 14.8674 18.6485 15.1949 19.0932L15.1975 19.0967L15.1975 19.0967C15.2544 19.172 15.416 19.3859 15.5096 19.5059C15.6991 19.7486 15.9614 20.0757 16.2479 20.4056C16.53 20.7306 16.8554 21.0814 17.1693 21.3588C17.3251 21.4964 17.5017 21.6372 17.6872 21.749C17.8451 21.8442 18.1392 22 18.5 22C18.8608 22 19.1549 21.8442 19.3129 21.749C19.4983 21.6372 19.6749 21.4964 19.8307 21.3588C20.1446 21.0814 20.47 20.7306 20.7522 20.4056C21.0386 20.0756 21.3009 19.7486 21.4904 19.5058C21.584 19.3859 21.7456 19.1719 21.8025 19.0966L21.8052 19.093C22.1327 18.6483 22.0377 18.0223 21.593 17.6948C21.413 17.5622 21.2033 17.4989 20.9957 17.5L19.5 17.5L19.5 9.5Z',
  d8: 'M12 22C7.6224 22 4.5 18.7552 4.5 14.5L4.5 3.5C4.5 2.94772 4.94771 2.5 5.5 2.5C6.05228 2.5 6.5 2.94772 6.5 3.5L6.5 14.5C6.5 17.6714 8.74767 20 12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22Z',
  d9: 'M2.40705 6.3051C1.96235 5.97759 1.86736 5.35159 2.19488 4.9069L2.19766 4.90321C2.25466 4.82775 2.41614 4.61395 2.50971 4.49406C2.69915 4.25131 2.96144 3.92427 3.24793 3.59431C3.53011 3.26931 3.85547 2.91855 4.16939 2.64117C4.32521 2.50349 4.50181 2.36272 4.68723 2.25094C4.8452 2.15571 5.13924 1.99994 5.50008 1.99993C5.86093 1.99993 6.15497 2.15571 6.31294 2.25094C6.49836 2.36272 6.67496 2.5035 6.83078 2.64118C7.1447 2.91856 7.47005 3.26933 7.75223 3.59433C8.03872 3.92429 8.301 4.25133 8.49044 4.49408C8.58413 4.61414 8.74581 4.8282 8.80259 4.90339L8.80514 4.90677C9.13265 5.35146 9.03777 5.97762 8.59307 6.30513C8.41668 6.43504 8.21177 6.49847 8.00827 6.49997L3.00007 6.49997C2.79387 6.50014 2.58581 6.43676 2.40705 6.3051Z',
  d10: 'M12 2C16.3776 2 19.5 5.24485 19.5 9.5L19.5 20.5C19.5 21.0523 19.0523 21.5 18.5 21.5C17.9477 21.5 17.5 21.0523 17.5 20.5L17.5 9.5C17.5 6.3286 15.2523 4 12 4C11.4477 4 11 3.55229 11 3C11 2.44772 11.4477 2 12 2Z',
  d11: 'M21.593 17.6948C22.0377 18.0223 22.1327 18.6483 21.8052 19.093L21.8025 19.0966C21.7456 19.1719 21.584 19.3859 21.4904 19.5058C21.3009 19.7486 21.0386 20.0756 20.7522 20.4056C20.47 20.7306 20.1446 21.0814 19.8307 21.3588C19.6749 21.4964 19.4983 21.6372 19.3129 21.749C19.1549 21.8442 18.8608 22 18.5 22C18.1392 22 17.8451 21.8442 17.6872 21.749C17.5017 21.6372 17.3251 21.4964 17.1693 21.3588C16.8554 21.0814 16.53 20.7306 16.2479 20.4056C15.9614 20.0757 15.6991 19.7486 15.5096 19.5059C15.416 19.3859 15.2544 19.1719 15.1975 19.0967L15.1949 19.0932C14.8674 18.6485 14.9623 18.0223 15.407 17.6948C15.5857 17.5632 15.7938 17.4998 16 17.5L20.9957 17.5C21.2033 17.4989 21.413 17.5622 21.593 17.6948Z',
  d12: 'M10.0104 6.51442L6.49681 2.99854L3.00098 6.51442M10.9918 19.0134L6.61602 19.0134C6.56073 19.0134 6.49681 18.9682 6.49681 18.9125L6.49681 3.45511',
  d13: 'M13.9911 17.4848L17.5047 21.0007L21.0005 17.4848M13.0098 4.98584L17.3855 4.98586C17.4408 4.98586 17.5047 5.03105 17.5047 5.08678L17.5047 20.5443',
  d14: 'M2 6.50239L6.50005 2.00244L11 6.50239L9.58581 7.91661L7.50005 5.83085L7.50008 20.0023L12.0001 20.0024L12 22.0024L6.50005 22.0023C5.94777 22.0023 5.50008 21.5546 5.50008 21.0023L5.50005 5.83085L3.41421 7.91661L2 6.50239Z',
  d15: 'M12 2L17.5 2C18.0523 2 18.5 2.4477 18.5 2.99998L18.5004 18.1739L20.586 16.0882L22.0002 17.5024L17.5004 22.0023L13.0005 17.5024L14.4147 16.0881L16.5004 18.1738L16.5 4L12 4L12 2Z',
} as const;

export const IconArrowReloadVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-stroke-rounded IconArrowReloadVerticalStrokeRounded"
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

export const IconArrowReloadVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-duotone-rounded IconArrowReloadVerticalDuotoneRounded"
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
        d={d.d5} 
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

export const IconArrowReloadVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-twotone-rounded IconArrowReloadVerticalTwotoneRounded"
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

export const IconArrowReloadVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-solid-rounded IconArrowReloadVerticalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowReloadVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-bulk-rounded IconArrowReloadVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowReloadVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-stroke-sharp IconArrowReloadVerticalStrokeSharp"
    >
      <path 
        d={d.d12} 
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

export const IconArrowReloadVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-reload-vertical-solid-sharp IconArrowReloadVerticalSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfArrowReloadVertical: TheIconSelfPack = {
  name: 'ArrowReloadVertical',
  StrokeRounded: IconArrowReloadVerticalStrokeRounded,
  DuotoneRounded: IconArrowReloadVerticalDuotoneRounded,
  TwotoneRounded: IconArrowReloadVerticalTwotoneRounded,
  SolidRounded: IconArrowReloadVerticalSolidRounded,
  BulkRounded: IconArrowReloadVerticalBulkRounded,
  StrokeSharp: IconArrowReloadVerticalStrokeSharp,
  SolidSharp: IconArrowReloadVerticalSolidSharp,
};