import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 13.0526V13.2264M21 13.2264C21 12.3517 20.3574 11.6051 19.4807 11.4613L18.2727 11.2632V12.1579M21 13.2264V15.4386C21 17.3832 21 18.3555 20.699 19.1296C20.2388 20.3132 19.2915 21.2485 18.0926 21.7029C17.3086 22 16.3238 22 14.3542 22C13.3213 22 12.8048 22 12.3242 21.8957C11.5909 21.7366 10.9091 21.4 10.3402 20.9163C9.96726 20.5992 9.65737 20.1913 9.03761 19.3755L6.30671 15.7805C5.88709 15.2281 5.89916 14.4654 6.33605 13.9262C6.90702 13.2215 7.97161 13.1633 8.61791 13.8014L10 15.2557V6.5C10 5.67157 10.6716 5 11.5 5C12.3284 5 13 5.67157 13 6.5V9.4737M13 9.4737H13.7273C14.7314 9.4737 15.5455 10.2749 15.5455 11.2632M13 9.4737V12.1579M15.5455 11.2632V12.1579M15.5455 11.2632V10.3684H16.4545C17.4587 10.3684 18.2727 11.1696 18.2727 12.1579M18.2727 12.1579V13.0526',
  d2: 'M7 8H6.17647C4.67907 8 3.93037 8 3.46518 7.56066C3 7.12132 3 6.41421 3 5C3 3.58579 3 2.87868 3.46518 2.43934C3.93037 2 4.67907 2 6.17647 2H17.8235C19.3209 2 20.0696 2 20.5348 2.43934C21 2.87868 21 3.58579 21 5C21 6.41421 21 7.12132 20.5348 7.56066C20.0696 8 19.3209 8 17.8235 8H16.5',
  d3: 'M9.03761 19.3754L6.30671 15.7805C5.88709 15.2281 5.89916 14.4654 6.33605 13.9262C6.90702 13.2215 7.97161 13.1633 8.61791 13.8014L10.0909 15.2557V6.34211C10.0909 5.60088 10.7014 5 11.4545 5C12.2077 5 12.8182 5.60088 12.8182 6.34211V9.92105L13.3434 9.6626C13.5958 9.53836 13.8782 9.45817 14.1527 9.52293C14.9516 9.71143 15.5455 10.419 15.5455 11.2632C15.5455 10.769 15.9525 10.3684 16.4545 10.3684C17.4587 10.3684 18.2727 11.1696 18.2727 12.1579C18.2727 11.6895 18.7 11.3333 19.1694 11.4103L19.4807 11.4613C20.3574 11.6051 21 12.3517 21 13.2264V15.4386C21 17.3832 21 18.3555 20.699 19.1295C20.2388 20.3132 19.2915 21.2485 18.0926 21.7029C17.3086 22 16.3238 22 14.3542 22C13.3213 22 12.8048 22 12.3242 21.8957C11.5909 21.7365 10.9091 21.4 10.3402 20.9163C9.96726 20.5992 9.65737 20.1913 9.03761 19.3754Z',
  d4: 'M11.1842 4.25C10.4648 4.25 9.88158 4.82342 9.88158 5.53077V15.4988C9.88158 15.6735 9.77338 15.8305 9.60842 15.8953C9.44345 15.9601 9.25499 15.9195 9.13262 15.7929L7.5374 14.1425C6.97073 13.5976 6.04007 13.6499 5.54226 14.254C5.16224 14.7151 5.15188 15.3658 5.51669 15.838L8.67878 19.9307C9.4081 20.8747 9.7351 21.2941 10.1225 21.6179C10.7266 22.1229 11.4509 22.4746 12.2306 22.641C12.7309 22.7477 13.2739 22.75 14.4891 22.75C15.6349 22.75 16.4741 22.7498 17.141 22.7086C17.8043 22.6675 18.2677 22.5871 18.6639 22.4394C19.9383 21.9646 20.9432 20.9879 21.431 19.7543C21.5824 19.3715 21.6651 18.9233 21.7073 18.2802C21.7498 17.6336 21.75 16.8195 21.75 15.707V13.1886C21.75 12.4067 21.165 11.731 20.3548 11.6003L20.2677 11.5863C19.8929 11.5258 19.7055 11.4956 19.583 11.5979C19.4605 11.7002 19.4605 11.8869 19.4605 12.2604V12.9907C19.4605 13.2265 19.2661 13.4176 19.0263 13.4176C18.7865 13.4176 18.5921 13.2265 18.5921 12.9907V11.9721C18.5921 11.0891 17.8505 10.3618 16.9211 10.3618C16.6671 10.3618 16.5401 10.3618 16.4502 10.4239C16.4174 10.4466 16.3889 10.4746 16.3658 10.5068C16.3026 10.5952 16.3026 10.7201 16.3026 10.9698V11.9721C16.3026 12.2079 16.1082 12.399 15.8684 12.399C15.6286 12.399 15.4342 12.2079 15.4342 11.9721V10.9535C15.4342 10.0705 14.6926 9.34313 13.7632 9.34313C13.7069 9.34313 13.6788 9.34313 13.6552 9.34632C13.501 9.3672 13.3798 9.48643 13.3585 9.63807C13.3553 9.66126 13.3553 9.6889 13.3553 9.74418V11.9721C13.3553 12.2079 13.1609 12.399 12.9211 12.399C12.6812 12.399 12.4868 12.2079 12.4868 11.9721V5.53077C12.4868 4.82342 11.9036 4.25 11.1842 4.25Z',
  d5: 'M17.7364 1.25C18.4162 1.24995 19.0163 1.24991 19.4999 1.30896C20.0199 1.37245 20.5511 1.5184 20.9909 1.91781C21.4386 2.32437 21.61 2.8278 21.6836 3.32484C21.7501 3.77445 21.7501 4.44903 21.75 5.06015V5.06017C21.7501 5.67128 21.7501 6.22556 21.6836 6.67516C21.61 7.1722 21.4386 7.67563 20.9909 8.08219C20.5511 8.4816 20.0199 8.62755 19.4999 8.69104C19.0163 8.75009 18.4162 8.75005 17.7364 8.75L16.3875 8.74999C15.849 8.74999 15.4125 8.33026 15.4125 7.8125C15.4125 7.29473 15.849 6.875 16.3875 6.875H17.6779C18.434 6.875 18.9083 6.87322 19.2543 6.83098C19.572 6.79219 19.636 6.73361 19.6512 6.71974L19.652 6.71904L19.6531 6.71812C19.6629 6.71014 19.715 6.66752 19.753 6.41091C19.7977 6.10935 19.8 5.69093 19.8 5C19.8 4.30907 19.7977 3.89065 19.753 3.58909C19.715 3.33248 19.6629 3.28986 19.6531 3.28188L19.652 3.28096L19.6512 3.28026C19.636 3.26639 19.572 3.20781 19.2543 3.16902C18.9083 3.12678 18.434 3.125 17.6779 3.125H6.32206C5.56601 3.125 5.09167 3.12678 4.74572 3.16902C4.42805 3.20781 4.36396 3.26639 4.34879 3.28026L4.34802 3.28096L4.34692 3.28188C4.33715 3.28986 4.28496 3.33248 4.24697 3.58909C4.20232 3.89065 4.20001 4.30907 4.20001 5C4.20001 5.69093 4.20232 6.10935 4.24697 6.41091C4.28496 6.66753 4.33715 6.71014 4.34692 6.71812L4.34802 6.71904L4.34879 6.71974C4.36396 6.73361 4.42805 6.79219 4.74572 6.83098C5.09167 6.87322 5.56601 6.875 6.32206 6.875H7.12501C7.66348 6.875 8.1 7.29473 8.1 7.8125C8.1 8.33026 7.66348 8.74999 7.12501 8.74999L6.26361 8.75C5.58377 8.75005 4.9837 8.75009 4.50009 8.69104C3.98007 8.62755 3.44893 8.4816 3.0091 8.08219C2.56141 7.67563 2.39002 7.1722 2.31643 6.67516C2.24987 6.22555 2.24993 5.67126 2.25 5.06013L2.25 5.06013C2.24993 4.449 2.24987 3.77445 2.31643 3.32484C2.39002 2.8278 2.56141 2.32437 3.0091 1.91781C3.44893 1.5184 3.98007 1.37245 4.50009 1.30896C4.9837 1.24991 5.58378 1.24995 6.26362 1.25L17.7364 1.25Z',
  d6: 'M15.5455 13.8579V12.225C15.5455 12.076 15.5189 11.9329 15.4701 11.8M18.2727 14.3276V13.075C18.2727 12.926 18.2462 12.7829 18.1974 12.65M12.8182 10.95V13.0079M12.8182 10.95H14.2219C14.7982 10.95 15.2885 11.3048 15.4701 11.8M12.8182 10.95V6.34211C12.8182 5.60088 12.2077 5 11.4545 5C10.7014 5 10.0909 5.60088 10.0909 6.34211V15.2557L8.61791 13.8014C7.97161 13.1633 6.90702 13.2215 6.33605 13.9262C5.89916 14.4654 5.88709 15.2281 6.30671 15.7805L10.0909 22H18.3529C19.8149 22 21 20.8583 21 19.45V13.925C21 13.2208 20.4074 12.65 19.6765 12.65H18.1974M15.4701 11.8H16.9492C17.5255 11.8 18.0157 12.1548 18.1974 12.65',
  d7: 'M7 8H3V2H21V8H16',
  d8: 'M7.58308 14.1248C7.00675 13.565 6.05584 13.6169 5.54767 14.2338C5.16062 14.7036 5.15005 15.3668 5.52163 15.8479L5.53423 15.8643L9.79344 22.75H19.0995C20.5777 22.75 21.75 21.6182 21.75 20.2531V13.9823C21.75 13.4164 21.2614 12.9325 20.6267 12.9325H19.4108V14.4393H18.6031V13.0176C18.6031 12.896 18.5812 12.7799 18.541 12.6721C18.3905 12.2686 17.9777 11.9678 17.4798 11.9678L16.264 11.9698V13.9062H15.4563V12.0529C15.4563 11.9313 15.4343 11.8152 15.3941 11.7074C15.2436 11.3039 14.8309 11.0031 14.333 11.0031H13.1171V12.9415H12.3094V5.508C12.3094 4.81323 11.7462 4.25 11.0514 4.25C10.3567 4.25 9.79344 4.81323 9.79344 5.508V16.4431L7.58308 14.1248Z',
} as const;

export const IconTouchInteraction04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-stroke-rounded IconTouchInteraction04StrokeRounded"
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

export const IconTouchInteraction04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-duotone-rounded IconTouchInteraction04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconTouchInteraction04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-twotone-rounded IconTouchInteraction04TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTouchInteraction04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-solid-rounded IconTouchInteraction04SolidRounded"
    >
      <path 
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

export const IconTouchInteraction04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-bulk-rounded IconTouchInteraction04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTouchInteraction04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-stroke-sharp IconTouchInteraction04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTouchInteraction04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="touch-interaction-04-solid-sharp IconTouchInteraction04SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTouchInteraction04: TheIconSelfPack = {
  name: 'TouchInteraction04',
  StrokeRounded: IconTouchInteraction04StrokeRounded,
  DuotoneRounded: IconTouchInteraction04DuotoneRounded,
  TwotoneRounded: IconTouchInteraction04TwotoneRounded,
  SolidRounded: IconTouchInteraction04SolidRounded,
  BulkRounded: IconTouchInteraction04BulkRounded,
  StrokeSharp: IconTouchInteraction04StrokeSharp,
  SolidSharp: IconTouchInteraction04SolidSharp,
};