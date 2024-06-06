import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 17.4956V19.4956C22 19.8462 21.9398 20.1828 21.8293 20.4956M20 22.3249C19.6872 22.4355 19.3506 22.4956 19 22.4956C18.6494 22.4956 18.3128 22.4355 18 22.3249M16 17.4956V19.4956C16 19.8462 16.0602 20.1828 16.1707 20.4956M22 8.49561V5.49561M22 14.4956V11.4956M16 14.4956V10.4956',
  d2: 'M1.125 8.37061C1.125 4.64268 4.14708 1.62061 7.875 1.62061C11.6029 1.62061 14.625 4.64268 14.625 8.37061C14.625 12.0985 11.6029 15.1206 7.875 15.1206C4.14708 15.1206 1.125 12.0985 1.125 8.37061Z',
  d3: 'M22.875 5.37061C22.875 4.81832 22.4273 4.37061 21.875 4.37061C21.3227 4.37061 20.875 4.81832 20.875 5.37061V8.37061C20.875 8.92289 21.3227 9.37061 21.875 9.37061C22.4273 9.37061 22.875 8.92289 22.875 8.37061V5.37061ZM16.875 11.1999V14.3706C16.875 14.9229 16.4273 15.3706 15.875 15.3706C15.3227 15.3706 14.875 14.9229 14.875 14.3706L14.875 11.1999C13.7098 10.7881 12.875 9.67682 12.875 8.37061C12.875 6.71375 14.2181 5.37061 15.875 5.37061C17.5319 5.37061 18.875 6.71375 18.875 8.37061C18.875 9.67682 18.0402 10.7881 16.875 11.1999ZM22.875 11.3706C22.875 10.8183 22.4273 10.3706 21.875 10.3706C21.3227 10.3706 20.875 10.8183 20.875 11.3706V14.3706C20.875 14.9229 21.3227 15.3706 21.875 15.3706C22.4273 15.3706 22.875 14.9229 22.875 14.3706V11.3706ZM16.875 17.3706C16.875 16.8183 16.4273 16.3706 15.875 16.3706C15.3227 16.3706 14.875 16.8183 14.875 17.3706V19.3706C14.875 19.8363 14.955 20.2855 15.1029 20.7039C15.2869 21.2246 15.8582 21.4975 16.379 21.3134C16.8997 21.1294 17.1726 20.5581 16.9885 20.0374C16.9153 19.8301 16.875 19.6062 16.875 19.3706V17.3706ZM22.875 17.3706C22.875 16.8183 22.4273 16.3706 21.875 16.3706C21.3227 16.3706 20.875 16.8183 20.875 17.3706V19.3706C20.875 19.6062 20.8347 19.8301 20.7615 20.0374C20.5774 20.5581 20.8503 21.1294 21.371 21.3134C21.8918 21.4975 22.4631 21.2246 22.6471 20.7039C22.795 20.2855 22.875 19.8363 22.875 19.3706V17.3706ZM18.2082 21.2571C17.6875 21.073 17.1162 21.3459 16.9322 21.8667C16.7481 22.3874 17.021 22.9587 17.5418 23.1427C17.9601 23.2906 18.4093 23.3706 18.875 23.3706C19.3407 23.3706 19.7899 23.2906 20.2082 23.1427C20.729 22.9587 21.0019 22.3874 20.8178 21.8667C20.6338 21.3459 20.0625 21.073 19.5418 21.2571C19.3345 21.3303 19.1105 21.3706 18.875 21.3706C18.6395 21.3706 18.4155 21.3303 18.2082 21.2571ZM14.875 8.37061C14.875 7.81832 15.3227 7.37061 15.875 7.37061C16.4273 7.37061 16.875 7.81832 16.875 8.37061C16.875 8.92289 16.4273 9.37061 15.875 9.37061C15.3227 9.37061 14.875 8.92289 14.875 8.37061Z',
  d4: 'M21.875 4.37061C22.4273 4.37061 22.875 4.81832 22.875 5.37061V8.37061C22.875 8.92289 22.4273 9.37061 21.875 9.37061C21.3227 9.37061 20.875 8.92289 20.875 8.37061V5.37061C20.875 4.81832 21.3227 4.37061 21.875 4.37061ZM15.875 9.37061C16.4273 9.37061 16.875 9.81832 16.875 10.3706V14.3706C16.875 14.9229 16.4273 15.3706 15.875 15.3706C15.3227 15.3706 14.875 14.9229 14.875 14.3706V10.3706C14.875 9.81832 15.3227 9.37061 15.875 9.37061ZM21.875 10.3706C22.4273 10.3706 22.875 10.8183 22.875 11.3706V14.3706C22.875 14.9229 22.4273 15.3706 21.875 15.3706C21.3227 15.3706 20.875 14.9229 20.875 14.3706V11.3706C20.875 10.8183 21.3227 10.3706 21.875 10.3706ZM15.875 16.3706C16.4273 16.3706 16.875 16.8183 16.875 17.3706V19.3706C16.875 19.6062 16.9153 19.8301 16.9885 20.0374C17.1726 20.5581 16.8997 21.1294 16.379 21.3134C15.8582 21.4975 15.2869 21.2246 15.1029 20.7039C14.955 20.2855 14.875 19.8363 14.875 19.3706V17.3706C14.875 16.8183 15.3227 16.3706 15.875 16.3706ZM21.875 16.3706C22.4273 16.3706 22.875 16.8183 22.875 17.3706V19.3706C22.875 19.8363 22.795 20.2855 22.6471 20.7039C22.4631 21.2246 21.8918 21.4975 21.371 21.3134C20.8503 21.1294 20.5774 20.5581 20.7615 20.0374C20.8347 19.8301 20.875 19.6062 20.875 19.3706V17.3706C20.875 16.8183 21.3227 16.3706 21.875 16.3706ZM16.9322 21.8667C17.1162 21.3459 17.6875 21.073 18.2082 21.2571C18.4155 21.3303 18.6395 21.3706 18.875 21.3706C19.1105 21.3706 19.3345 21.3303 19.5418 21.2571C20.0625 21.073 20.6338 21.3459 20.8178 21.8667C21.0019 22.3874 20.729 22.9587 20.2082 23.1427C19.7899 23.2906 19.3407 23.3706 18.875 23.3706C18.4093 23.3706 17.9601 23.2906 17.5418 23.1427C17.021 22.9587 16.7481 22.3874 16.9322 21.8667Z',
  d5: 'M15.875 7.37061C15.3227 7.37061 14.875 7.81832 14.875 8.37061C14.875 8.92289 15.3227 9.37061 15.875 9.37061C16.4273 9.37061 16.875 8.92289 16.875 8.37061C16.875 7.81832 16.4273 7.37061 15.875 7.37061ZM12.875 8.37061C12.875 6.71375 14.2181 5.37061 15.875 5.37061C17.5319 5.37061 18.875 6.71375 18.875 8.37061C18.875 10.0275 17.5319 11.3706 15.875 11.3706C14.2181 11.3706 12.875 10.0275 12.875 8.37061Z',
  d6: 'M22 17.4956V19.4956C22 19.666 21.9858 19.833 21.9585 19.9956M20 22.3249C19.6872 22.4355 19.3506 22.4956 19 22.4956C18.6494 22.4956 18.3128 22.4355 18 22.3249M16 17.4956V19.4956C16 19.666 16.0142 19.833 16.0415 19.9956M22 8.49561V5.49561M22 14.4956V11.4956M16 14.4956V10.4956',
  d7: 'M1.25 8.49561C1.25 4.76768 4.27208 1.74561 8 1.74561C11.7279 1.74561 14.75 4.76768 14.75 8.49561C14.75 12.2235 11.7279 15.2456 8 15.2456C4.27208 15.2456 1.25 12.2235 1.25 8.49561Z',
  d8: 'M16 7.24561C15.3096 7.24561 14.75 7.80525 14.75 8.49561C14.75 9.18596 15.3096 9.74561 16 9.74561C16.6904 9.74561 17.25 9.18596 17.25 8.49561C17.25 7.80525 16.6904 7.24561 16 7.24561ZM13.25 8.49561C13.25 6.97682 14.4812 5.74561 16 5.74561C17.5188 5.74561 18.75 6.97682 18.75 8.49561C18.75 10.0144 17.5188 11.2456 16 11.2456C14.4812 11.2456 13.25 10.0144 13.25 8.49561Z',
  d9: 'M22.75 4.74561V9.24561H21.25V4.74561H22.75ZM16.75 9.74561V15.2456H15.25V9.74561H16.75ZM22.75 10.7456V15.2456H21.25V10.7456H22.75ZM16.75 16.7456V19.4956C16.75 19.6242 16.7607 19.7497 16.7811 19.8715L16.9052 20.6112L15.4259 20.8594L15.3018 20.1197C15.2677 19.9163 15.25 19.7077 15.25 19.4956V16.7456H16.75ZM22.75 16.7456V19.4956C22.75 19.7077 22.7323 19.9163 22.6982 20.1197L22.5741 20.8594L21.0948 20.6112L21.2189 19.8715C21.2393 19.7497 21.25 19.6242 21.25 19.4956V16.7456H22.75ZM17.5428 21.3678L18.2499 21.6178C18.4836 21.7003 18.7357 21.7456 19 21.7456C19.2643 21.7456 19.5164 21.7003 19.7501 21.6178L20.4572 21.3678L20.9571 22.7821L20.2499 23.032C19.858 23.1706 19.437 23.2456 19 23.2456C18.563 23.2456 18.142 23.1706 17.7501 23.032L17.0429 22.7821L17.5428 21.3678Z',
};

export const IconMonocleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-stroke-rounded IconMonocleStrokeRounded"
    >
      <circle 
        cx="8" 
        cy="8.49561" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="16" 
        cy="8.49561" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-duotone-rounded IconMonocleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8" 
        cy="8.49561" 
        r="6" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="8" 
        cy="8.49561" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="16" 
        cy="8.49561" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-twotone-rounded IconMonocleTwotoneRounded"
    >
      <circle 
        cx="8" 
        cy="8.49561" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="16" 
        cy="8.49561" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-solid-rounded IconMonocleSolidRounded"
    >
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-bulk-rounded IconMonocleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-stroke-sharp IconMonocleStrokeSharp"
    >
      <circle 
        cx="8" 
        cy="8.49561" 
        r="6" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="16" 
        cy="8.49561" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMonocleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="monocle-solid-sharp IconMonocleSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMonocle: TheIconSelfPack = {
  name: 'Monocle',
  StrokeRounded: IconMonocleStrokeRounded,
  DuotoneRounded: IconMonocleDuotoneRounded,
  TwotoneRounded: IconMonocleTwotoneRounded,
  SolidRounded: IconMonocleSolidRounded,
  BulkRounded: IconMonocleBulkRounded,
  StrokeSharp: IconMonocleStrokeSharp,
  SolidSharp: IconMonocleSolidSharp,
};