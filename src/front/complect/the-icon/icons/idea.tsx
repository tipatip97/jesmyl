import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14',
  d2: 'M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z',
  d3: 'M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19',
  d4: 'M12 16V11',
  d5: 'M14.8707 19.6466L15 19H9L9.12932 19.6466C9.27073 20.3537 9.34144 20.7072 9.49987 20.9866C9.74484 21.4185 10.1418 21.7439 10.6134 21.8994C10.9184 22 11.2789 22 12 22C12.7211 22 13.0816 22 13.3866 21.8994C13.8582 21.7439 14.2552 21.4185 14.5001 20.9866C14.6586 20.7072 14.7293 20.3537 14.8707 19.6466Z',
  d6: 'M17.2916 16C18.9525 14.5341 20 12.3894 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 12.3894 5.04751 14.5341 6.70835 16H17.2916Z',
  d7: 'M15.8458 15.25C15.976 15.25 16.1044 15.25 16.2126 15.2553C16.3268 15.2609 16.4803 15.2744 16.6402 15.3263C17.1379 15.4876 17.4733 15.8781 17.4987 16.3212C17.5069 16.4635 17.4739 16.5889 17.4442 16.6811C17.4161 16.7684 17.3755 16.8701 17.3343 16.9736C17.1902 17.3358 17.0465 17.6972 16.8653 17.9358C16.4882 18.4326 15.8965 18.7895 15.2123 18.932C14.8836 19.0004 14.5266 19.0002 14.0705 19L13.9881 18.9999H10.0119L9.9295 19C9.47335 19.0002 9.11637 19.0004 8.78764 18.932C8.10347 18.7895 7.5118 18.4326 7.13467 17.9358C6.95351 17.6972 6.84109 17.4145 6.697 17.0523C6.65577 16.9488 6.58388 16.7684 6.55577 16.6811C6.5261 16.5889 6.4931 16.4635 6.50126 16.3212C6.52666 15.8781 6.86202 15.4876 7.35973 15.3263C7.51965 15.2744 7.67317 15.2609 7.78741 15.2553C7.89561 15.25 8.02399 15.25 8.15422 15.25H8.15428H15.8457H15.8458Z',
  d8: 'M12 3.1875C8.23203 3.1875 5.19444 6.19766 5.19444 9.89015C5.19444 11.1533 5.54828 12.3325 6.16379 13.34C6.44299 13.797 6.29751 14.393 5.83886 14.6712C5.38021 14.9494 4.78207 14.8045 4.50288 14.3475C3.70768 13.0458 3.25 11.5195 3.25 9.89015C3.25 5.10904 7.17688 1.25 12 1.25C16.8231 1.25 20.75 5.10904 20.75 9.89015C20.75 11.5195 20.2923 13.0458 19.4971 14.3475C19.2179 14.8045 18.6198 14.9494 18.1611 14.6712C17.7025 14.393 17.557 13.797 17.8362 13.34C18.4517 12.3325 18.8056 11.1533 18.8056 9.89015C18.8056 6.19766 15.768 3.1875 12 3.1875ZM12 9.96875C12.5369 9.96875 12.9722 10.4025 12.9722 10.9375V15.7812C12.9722 16.3163 12.5369 16.75 12 16.75C11.4631 16.75 11.0278 16.3163 11.0278 15.7812V10.9375C11.0278 10.4025 11.4631 9.96875 12 9.96875Z',
  d9: 'M8.41723 19.9029C8.53665 20.5024 8.62973 20.9698 8.84904 21.3565C9.18587 21.9505 9.73163 22.3979 10.3801 22.6117C10.8024 22.7509 11.3902 22.7505 12.0016 22.75C12.6129 22.7505 13.2008 22.7509 13.623 22.6117C14.2715 22.3979 14.8173 21.9505 15.1541 21.3565C15.3734 20.9698 15.4665 20.5024 15.5859 19.9029L15.6164 19.75H8.38672L8.41723 19.9029Z',
  d10: 'M17.0003 16H7C7 16.9319 7 17.3978 7.15224 17.7654C7.35523 18.2554 7.74458 18.6448 8.23463 18.8478C8.60218 19 9.06812 19 10 19H14.0003C14.9322 19 15.3981 19 15.7657 18.8478C16.2557 18.6448 16.6451 18.2554 16.8481 17.7654C17.0003 17.3978 17.0003 16.9319 17.0003 16Z',
  d11: 'M15 19L14 22H10L9 19',
  d12: 'M12 16L12 10',
  d13: 'M12 3.19444C8.23203 3.19444 5.19444 6.2154 5.19444 9.92111C5.19444 11.1888 5.54828 12.3722 6.16379 13.3834L4.50288 14.3944C3.70768 13.0881 3.25 11.5563 3.25 9.92111C3.25 5.12287 7.17688 1.25 12 1.25C16.8231 1.25 20.75 5.12287 20.75 9.92111C20.75 11.5563 20.2923 13.0881 19.4971 14.3944L17.8362 13.3834C18.4517 12.3722 18.8056 11.1888 18.8056 9.92111C18.8056 6.2154 15.768 3.19444 12 3.19444Z',
  d14: 'M17.7503 15.896C17.7503 16.2664 17.7503 16.5756 17.7295 16.8295C17.7079 17.0937 17.6613 17.3433 17.541 17.5853C17.2619 18.1468 16.7265 18.593 16.0527 18.8256C15.7623 18.9258 15.4628 18.9647 15.1457 18.9827C14.8411 19 14.47 19 14.0256 19H9.97474H9.97474C9.53028 19 9.15925 19 8.85464 18.9827C8.53754 18.9647 8.23801 18.9258 7.94762 18.8256C7.27379 18.593 6.73844 18.1468 6.45933 17.5853C6.33905 17.3433 6.29241 17.0937 6.27077 16.8295C6.24999 16.5756 6.24999 16.2664 6.25 15.8961V15.896V15.25H17.7503V15.896Z',
  d15: 'M13 10L13 16L11 16L11 10L13 10Z',
  d16: 'M9.28893 22.2379C9.39102 22.5441 9.67762 22.7507 10.0004 22.7507H14.0004C14.3233 22.7507 14.6099 22.5441 14.712 22.2379L15.4403 20.0527H8.56055L9.28893 22.2379Z',
} as const;

export const IconIdeaStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-stroke-rounded IconIdeaStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconIdeaDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-duotone-rounded IconIdeaDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconIdeaTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-twotone-rounded IconIdeaTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconIdeaSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-solid-rounded IconIdeaSolidRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIdeaBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-bulk-rounded IconIdeaBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconIdeaStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-stroke-sharp IconIdeaStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIdeaSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="idea-solid-sharp IconIdeaSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfIdea: TheIconSelfPack = {
  name: 'Idea',
  StrokeRounded: IconIdeaStrokeRounded,
  DuotoneRounded: IconIdeaDuotoneRounded,
  TwotoneRounded: IconIdeaTwotoneRounded,
  SolidRounded: IconIdeaSolidRounded,
  BulkRounded: IconIdeaBulkRounded,
  StrokeSharp: IconIdeaStrokeSharp,
  SolidSharp: IconIdeaSolidSharp,
};