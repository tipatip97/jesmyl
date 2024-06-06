import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.4979 13.0526V13.2264M21.4979 13.2264C21.4979 12.3517 20.8545 11.6051 19.9767 11.4613L18.7672 11.2632V12.1579M21.4979 13.2264V15.4386C21.4979 17.3832 21.4979 18.3555 21.1965 19.1296C20.7357 20.3132 19.7873 21.2485 18.5869 21.7029C17.802 22 16.8159 22 14.8439 22C13.8098 22 13.2926 22 12.8114 21.8957C12.0772 21.7366 11.3946 21.4 10.825 20.9163C10.4517 20.5992 10.1414 20.1913 9.52082 19.3755L6.78658 15.7805C6.36644 15.2281 6.37853 14.4654 6.81595 13.9262C7.38762 13.2215 8.45352 13.1633 9.10061 13.8014L10.4844 15.2557V6.5C10.4844 5.67157 11.1568 5 11.9862 5C12.8156 5 13.4881 5.67157 13.4881 6.5V9.4737M18.7672 12.1579C18.7672 11.1696 17.9522 10.3684 16.9468 10.3684H16.0367V11.2632M18.7672 12.1579V13.0526M13.4881 9.4737H14.2163C15.2216 9.4737 16.0367 10.2749 16.0367 11.2632M13.4881 9.4737V12.1579M16.0367 11.2632V12.1579',
  d2: 'M10.4844 9.5C9.25317 8.81764 8.48193 7.50601 8.48193 6C8.48193 3.79086 10.275 2 12.4868 2C14.6986 2 16.4917 3.79086 16.4917 6C16.4917 7.50601 15.6584 8.81764 14.4272 9.5',
  d3: 'M7.88235 6.02265H2.50195M2.50195 6.02265C2.50195 6.50074 3.01683 6.71697 3.33902 7.01135L4.52062 8.00993M2.50195 6.02265C2.50195 5.51157 3.02493 5.29858 3.33902 5.00137L4.52062 3.98999',
  d4: 'M9.54235 19.3754L6.81245 15.7805C6.39299 15.2281 6.40506 14.4654 6.84178 13.9262C7.41254 13.2215 8.47674 13.1633 9.1228 13.8014L10.5952 15.2557V6.34211C10.5952 5.60088 11.2055 5 11.9583 5C12.7113 5 13.3215 5.60088 13.3215 6.34211V9.92105L13.8465 9.6626C14.0989 9.53836 14.3811 9.45817 14.6555 9.52293C15.4542 9.71143 16.0478 10.419 16.0478 11.2632C16.0478 10.769 16.4547 10.3684 16.9565 10.3684C17.9603 10.3684 18.774 11.1696 18.774 12.1579C18.774 11.6895 19.2012 11.3333 19.6704 11.4103L19.9816 11.4613C20.858 11.6051 21.5003 12.3517 21.5003 13.2264V15.4386C21.5003 17.3832 21.5003 18.3555 21.1994 19.1295C20.7394 20.3132 19.7924 21.2485 18.594 21.7029C17.8103 22 16.8258 22 14.857 22C13.8245 22 13.3081 22 12.8277 21.8957C12.0947 21.7365 11.4131 21.4 10.8445 20.9163C10.4717 20.5992 10.1619 20.1913 9.54235 19.3754Z',
  d5: 'M21.5003 13.0526V13.2264M21.5003 13.2264C21.5003 12.3517 20.858 11.6051 19.9816 11.4613L18.774 11.2632V12.1579M21.5003 13.2264V15.4386C21.5003 17.3832 21.5003 18.3555 21.1994 19.1296C20.7394 20.3132 19.7925 21.2485 18.594 21.7029C17.8103 22 16.8258 22 14.857 22C13.8245 22 13.3081 22 12.8277 21.8957C12.0947 21.7366 11.4131 21.4 10.8445 20.9163C10.4717 20.5992 10.1619 20.1913 9.54235 19.3755L6.81245 15.7805C6.39299 15.2281 6.40506 14.4654 6.84178 13.9262C7.41254 13.2215 8.47674 13.1633 9.1228 13.8014L10.5044 15.2557V6.5C10.5044 5.67157 11.1757 5 12.0038 5C12.8319 5 13.5033 5.67157 13.5033 6.5V9.4737M18.774 12.1579C18.774 11.1696 17.9603 10.3684 16.9565 10.3684H16.0478V11.2632M18.774 12.1579V13.0526M13.5033 9.4737H14.2303C15.234 9.4737 16.0478 10.2749 16.0478 11.2632M13.5033 9.4737V12.1579M16.0478 11.2632V12.1579',
  d6: 'M10.5041 9.5C9.27489 8.81764 8.50488 7.50601 8.50488 6C8.50488 3.79086 10.2951 2 12.5034 2C14.7117 2 16.5019 3.79086 16.5019 6C16.5019 7.50601 15.6699 8.81764 14.4407 9.5',
  d7: 'M8.21849 6.02271H2.5M2.5 6.02271C2.639 6.45808 3.01736 6.72198 3.3411 7.01845L4.52838 8.02414M2.5 6.02271C2.61314 5.57994 3.02549 5.2935 3.3411 4.99417L4.52838 3.97559',
  d8: 'M21.4976 13.0526V13.2264M21.4976 13.2264C21.4976 12.3517 20.855 11.6051 19.9783 11.4613L18.7703 11.2632V12.1579M21.4976 13.2264V15.4386C21.4976 17.3832 21.4976 18.3555 21.1966 19.1296C20.7364 20.3132 19.7891 21.2485 18.5902 21.7029C17.8062 22 16.8214 22 14.8518 22C13.8189 22 13.3024 22 12.8218 21.8957C12.0885 21.7366 11.4067 21.4 10.8378 20.9163C10.4649 20.5992 10.155 20.1913 9.53517 19.3755L6.80427 15.7805C6.38465 15.2281 6.39672 14.4654 6.83361 13.9262C7.40458 13.2215 8.46917 13.1633 9.11547 13.8014L10.4976 15.2557V6.5C10.4976 5.67157 11.1692 5 11.9976 5C12.826 5 13.4976 5.67157 13.4976 6.5V9.4737M18.7703 12.1579C18.7703 11.1696 17.9563 10.3684 16.9521 10.3684H16.0431V11.2632M18.7703 12.1579V13.0526M13.4976 9.4737H14.2249C15.229 9.4737 16.0431 10.2749 16.0431 11.2632M13.4976 9.4737V12.1579M16.0431 11.2632V12.1579',
  d9: 'M10.4849 9.5C9.25366 8.81764 8.48242 7.50601 8.48242 6C8.48242 3.79086 10.2755 2 12.4873 2C14.6991 2 16.4922 3.79086 16.4922 6C16.4922 7.50601 15.6589 8.81764 14.4277 9.5M7.88284 6.02265H2.50244M2.50244 6.02265C2.50244 6.50074 3.01732 6.71697 3.33951 7.01135L4.52111 8.00993M2.50244 6.02265C2.50244 5.51157 3.02542 5.29858 3.33951 5.00137L4.52111 3.98999',
  d10: 'M11.6842 4.25C10.9648 4.25 10.3816 4.82342 10.3816 5.53077V15.4988C10.3816 15.6735 10.2734 15.8305 10.1084 15.8953C9.94345 15.9601 9.75499 15.9195 9.63262 15.7929L8.0374 14.1425C7.47073 13.5976 6.54007 13.6499 6.04226 14.254C5.66224 14.7151 5.65188 15.3658 6.01669 15.838L9.17878 19.9307C9.9081 20.8747 10.2351 21.2941 10.6225 21.6179C11.2266 22.1229 11.9509 22.4746 12.7306 22.641C13.2309 22.7477 13.7739 22.75 14.9891 22.75C16.1349 22.75 16.9741 22.7498 17.641 22.7086C18.3043 22.6675 18.7677 22.5871 19.1639 22.4394C20.4383 21.9646 21.4432 20.9879 21.931 19.7543C22.0824 19.3715 22.1651 18.9233 22.2073 18.2802C22.2498 17.6336 22.25 16.8195 22.25 15.707V13.1886C22.25 12.4067 21.665 11.731 20.8548 11.6003L20.7677 11.5863C20.3929 11.5258 20.2055 11.4956 20.083 11.5979C19.9605 11.7002 19.9605 11.8869 19.9605 12.2604V12.9907C19.9605 13.2265 19.7661 13.4176 19.5263 13.4176C19.2865 13.4176 19.0921 13.2265 19.0921 12.9907V11.9721C19.0921 11.0891 18.3505 10.3618 17.4211 10.3618C17.1671 10.3618 17.0401 10.3618 16.9502 10.4239C16.9174 10.4466 16.8889 10.4746 16.8658 10.5068C16.8026 10.5952 16.8026 10.7201 16.8026 10.9698V11.9721C16.8026 12.2079 16.6082 12.399 16.3684 12.399C16.1286 12.399 15.9342 12.2079 15.9342 11.9721V10.9535C15.9342 10.0705 15.1926 9.34313 14.2632 9.34313C14.2069 9.34313 14.1788 9.34313 14.1552 9.34632C14.001 9.3672 13.8798 9.48643 13.8585 9.63807C13.8553 9.66126 13.8553 9.6889 13.8553 9.74418V11.9721C13.8553 12.2079 13.6609 12.399 13.4211 12.399C13.1812 12.399 12.9868 12.2079 12.9868 11.9721V5.53077C12.9868 4.82342 12.4036 4.25 11.6842 4.25Z',
  d11: 'M6.99247 6.75001H5.25V8.00001C5.25 8.29263 5.07982 8.55852 4.8141 8.68107C4.54838 8.80362 4.23565 8.76043 4.01309 8.57046L2.80922 7.54291L2.80921 7.5429C2.56117 7.33127 2.32042 7.12586 2.14794 6.9329C1.95843 6.72089 1.75 6.41552 1.75 6.00001C1.75 5.58451 1.95843 5.27913 2.14794 5.06712C2.32042 4.87416 2.56117 4.66875 2.80922 4.45712L4.01309 3.42956C4.23565 3.23959 4.54838 3.1964 4.8141 3.31895C5.07982 3.4415 5.25 3.70739 5.25 4.00001V5.25001H6.99247C7.35205 2.98302 9.31544 1.25 11.6836 1.25C14.3069 1.25 16.4336 3.37665 16.4336 6C16.4336 6.41421 16.0978 6.75 15.6836 6.75C15.2694 6.75 14.9336 6.41421 14.9336 6C14.9336 4.20507 13.4785 2.75 11.6836 2.75C9.88867 2.75 8.43359 4.20507 8.43359 6C8.43359 7.79493 9.88867 9.25 11.6836 9.25C12.0978 9.25 12.4336 9.58579 12.4336 10C12.4336 10.4142 12.0978 10.75 11.6836 10.75C9.31545 10.75 7.35206 9.01699 6.99247 6.75001Z',
  d12: 'M6.99247 5.25001C7.35205 2.98302 9.31544 1.25 11.6836 1.25C14.3069 1.25 16.4336 3.37665 16.4336 6C16.4336 6.41421 16.0978 6.75 15.6836 6.75C15.2694 6.75 14.9336 6.41421 14.9336 6C14.9336 4.20507 13.4785 2.75 11.6836 2.75C9.88867 2.75 8.43359 4.20507 8.43359 6C8.43359 7.33174 9.23459 8.47639 10.3811 8.97848V10.5692C8.62485 10.0695 7.28348 8.58463 6.99247 6.75001H5.25V8.00001C5.25 8.29263 5.07982 8.55852 4.8141 8.68107C4.54838 8.80362 4.23565 8.76043 4.01309 8.57046L2.80922 7.54291L2.80921 7.5429C2.56117 7.33127 2.32042 7.12586 2.14794 6.9329C1.95843 6.72089 1.75 6.41552 1.75 6.00001C1.75 5.58451 1.95843 5.27913 2.14794 5.06712C2.32042 4.87416 2.56117 4.66875 2.80922 4.45712L4.01309 3.42956C4.23565 3.23959 4.54838 3.1964 4.8141 3.31895C5.07982 3.4415 5.25 3.70739 5.25 4.00001V5.25001H6.99247Z',
  d13: 'M16.5498 14.3393V12.7064C16.5498 12.5574 16.5232 12.4143 16.4745 12.2814M16.4745 12.2814C16.293 11.7862 15.8032 11.4314 15.2274 11.4314H13.8249M16.4745 12.2814H17.9523C18.5281 12.2814 19.0178 12.6362 19.1994 13.1314M19.2746 14.809V13.5564C19.2746 13.4074 19.2481 13.2643 19.1994 13.1314M19.1994 13.1314H20.6772C21.4074 13.1314 21.9995 13.7022 21.9995 14.4064V19.9314C21.9995 21.3397 20.8155 22.4814 19.3547 22.4814H11.1L7.31913 16.2619C6.89988 15.7095 6.91194 14.9468 7.34845 14.4076C7.91892 13.7029 8.98257 13.6447 9.62831 14.2828L11.1 15.7371V6.82356C11.1 6.08233 11.71 5.48145 12.4624 5.48145C13.2149 5.48145 13.8249 6.08233 13.8249 6.82356V11.4314M13.8249 11.4314V13.4893',
  d14: 'M13.9832 10.1992C15.2282 9.67188 16.7552 8.26992 16.4615 5.92578C16.2043 3.87292 14.4276 2.47656 12.3557 2.47656C10.6278 2.5448 8.90368 3.74418 8.5495 5.94206V6.4738H2.02107M4.51488 3.96866L2 6.48551L4.51488 8.98429',
};

export const IconDragLeft04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-stroke-rounded IconDragLeft04StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      /><path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      /><path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-duotone-rounded IconDragLeft04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      /><path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      /><path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      /><path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-twotone-rounded IconDragLeft04TwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      /><path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-solid-rounded IconDragLeft04SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-bulk-rounded IconDragLeft04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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

export const IconDragLeft04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-stroke-sharp IconDragLeft04StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-04-solid-sharp IconDragLeft04SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDragLeft04: TheIconSelfPack = {
  name: 'DragLeft04',
  StrokeRounded: IconDragLeft04StrokeRounded,
  DuotoneRounded: IconDragLeft04DuotoneRounded,
  TwotoneRounded: IconDragLeft04TwotoneRounded,
  SolidRounded: IconDragLeft04SolidRounded,
  BulkRounded: IconDragLeft04BulkRounded,
  StrokeSharp: IconDragLeft04StrokeSharp,
  SolidSharp: IconDragLeft04SolidSharp,
};