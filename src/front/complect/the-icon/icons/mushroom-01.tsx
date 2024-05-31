import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 15C19.412 14.6082 21 13.9411 21 13.1839C21 11.9778 16.9706 11 12 11C7.02944 11 3 11.9778 3 13.1839C3 13.9411 4.58803 14.6082 7 15',
  d2: 'M21 13C21 6.92487 16.9706 2 12 2C7.02944 2 3 6.92487 3 13',
  d3: 'M18 4.76514C17.5348 5.50377 16.671 6 15.6823 6C14.2009 6 13 4.88603 13 3.51187C13 2.94318 13.2057 2.41905 13.5518 2',
  d4: 'M10 11.5C9.99527 14.9495 9.90043 20.1752 8 22M14 11.5C14.0047 14.9495 14.0996 20.1752 16 22',
  d5: 'M9.00781 7L8.99883 7',
  d6: 'M3 13.1839C3 11.9778 7.02944 11 12 11C16.7979 11 20.7189 11.911 20.9855 13.059C20.9951 13.1004 21 13.142 21 13.1839V13C21 6.92487 16.9706 2 12 2C7.02944 2 3 6.92487 3 13V13.1839ZM15.6823 6.00011C14.2009 6.00011 13 4.88613 13 3.51198C13 3.0053 13.1633 2.534 13.4437 2.14087C15.1722 2.4815 16.736 3.4238 17.9866 4.78637C17.5183 5.51331 16.6616 6.00011 15.6823 6.00011Z',
  d7: 'M18 4.76501C17.9956 4.77207 17.9911 4.7791 17.9866 4.78612M17.9866 4.78612C16.736 3.42356 15.1722 2.48126 13.4437 2.14062C13.1633 2.53376 13 3.00506 13 3.51174C13 4.88589 14.2009 5.99986 15.6823 5.99986C16.6616 5.99986 17.5183 5.51307 17.9866 4.78612Z',
  d8: 'M10.0014 10.5C10.5537 10.5008 11.0008 10.9491 11 11.5014C10.9976 13.2248 10.9736 15.4533 10.7021 17.4913C10.5662 18.5115 10.3646 19.5149 10.0589 20.4008C9.75657 21.2769 9.32776 22.1114 8.69261 22.7213C8.29424 23.1038 7.6612 23.091 7.27869 22.6926C6.89617 22.2942 6.90902 21.6612 7.3074 21.2787C7.62246 20.9762 7.91816 20.4732 8.16828 19.7484C8.41497 19.0336 8.59369 18.1728 8.71964 17.2272C8.97186 15.3339 8.99763 13.2247 9 11.4986C9.00076 10.9463 9.44909 10.4992 10.0014 10.5ZM13.9986 10.5C14.5509 10.4992 14.9992 10.9463 15 11.4986C15.0024 13.2247 15.0281 15.3339 15.2804 17.2272C15.4063 18.1728 15.585 19.0336 15.8317 19.7484C16.0818 20.4732 16.3775 20.9762 16.6926 21.2787C17.091 21.6612 17.1038 22.2942 16.7213 22.6926C16.3388 23.091 15.7058 23.1038 15.3074 22.7213C14.6722 22.1114 14.2434 21.2769 13.9411 20.4008C13.6354 19.5149 13.4338 18.5115 13.2979 17.4913C13.0264 15.4533 13.0024 13.2248 13 11.5014C12.9992 10.9491 13.4463 10.5008 13.9986 10.5Z',
  d9: 'M12 1.25C12.206 1.25 12.4103 1.25754 12.6125 1.27238C12.7415 1.28185 12.806 1.28658 12.8495 1.31514C12.9083 1.35382 12.9441 1.42655 12.939 1.49677C12.9352 1.54861 12.8982 1.60496 12.8242 1.71767C12.4637 2.22819 12.25 2.84566 12.25 3.51179C12.25 5.35223 13.8408 6.74991 15.6823 6.74991C16.91 6.74991 18.0072 6.13903 18.6171 5.19231L18.6234 5.1825C18.7524 4.96783 18.8169 4.8605 18.9191 4.85211C18.9234 4.85176 18.928 4.85153 18.9323 4.85146C19.0349 4.84982 19.1076 4.94781 19.2532 5.14377C20.8151 7.24599 21.749 10.0176 21.75 12.9952C21.75 12.9979 21.7479 13 21.7452 13C21.7424 13 21.7401 13.0025 21.7405 13.0054C21.7467 13.0583 21.75 13.1126 21.75 13.1685C21.75 13.6873 21.4567 14.0806 21.1637 14.3392C20.8707 14.5977 20.4946 14.8004 20.1028 14.9641C19.3133 15.294 18.246 15.5525 17.0313 15.738C16.4998 15.8192 15.9989 15.4799 15.9126 14.9802C15.8263 14.4805 16.1872 14.0096 16.7187 13.9284C17.8557 13.7548 18.7384 13.528 19.3109 13.2888C19.4222 13.2423 19.4223 13.0946 19.311 13.0482C18.9845 12.9117 18.5392 12.7725 17.9749 12.6438C16.4821 12.3032 14.3692 12.0833 12 12.0833C9.63084 12.0833 7.51792 12.3032 6.02505 12.6438C5.4608 12.7725 5.01547 12.9117 4.68895 13.0482C4.57771 13.0946 4.57782 13.2423 4.68907 13.2888C5.2616 13.528 6.1443 13.7548 7.28132 13.9284C7.81283 14.0096 8.17372 14.4805 8.08739 14.9802C8.00106 15.4799 7.50019 15.8192 6.96868 15.738C5.75402 15.5525 4.68673 15.294 3.89717 14.9641C3.50545 14.8004 3.12926 14.5977 2.83634 14.3392C2.54333 14.0806 2.25 13.6873 2.25 13.1685C2.25 13.1126 2.25327 13.0583 2.25952 13.0054C2.25985 13.0025 2.25764 13 2.25477 13C2.25214 13 2.25 12.9978 2.25 12.9952C2.25213 6.65567 6.48291 1.25 12 1.25ZM9.01228 8C9.5621 8 10.0078 7.55228 10.0078 7C10.0078 6.44772 9.5621 6 9.01228 6H9.00334C8.45353 6 8.00781 6.44771 8.00781 7C8.00781 7.55228 8.45353 8 9.00334 8H9.01228Z',
  d10: 'M14.4734 1.93917C14.5555 1.81423 14.5965 1.75176 14.6632 1.73004C14.73 1.70833 14.7977 1.73386 14.9332 1.78493C15.8957 2.1478 16.7883 2.68456 17.5894 3.36205C17.7073 3.46176 17.7662 3.51162 17.7782 3.5842C17.7902 3.65678 17.7494 3.72479 17.6676 3.86082L17.3503 4.38894C17.0221 4.89144 16.4089 5.24991 15.6823 5.24991C14.5611 5.24991 13.75 4.41965 13.75 3.51179C13.75 3.17 13.8593 2.84951 14.0543 2.57618L14.0626 2.56447L14.4734 1.93917Z',
  d11: 'M14.4734 1.93956C14.5555 1.81461 14.5965 1.75214 14.6632 1.73043C14.73 1.70871 14.7977 1.73425 14.9332 1.78531C15.8957 2.14818 16.7883 2.68495 17.5894 3.36243C17.7073 3.46215 17.7663 3.512 17.7782 3.58458C17.7902 3.65717 17.7494 3.72518 17.6676 3.8612L17.3503 4.38932C17.0221 4.89183 16.4089 5.25029 15.6823 5.25029C14.5611 5.25029 13.75 4.42003 13.75 3.51217C13.75 3.17038 13.8593 2.84989 14.0543 2.57656L14.0626 2.56486L14.4734 1.93956Z',
  d12: 'M8.99733 12.2071C8.98675 13.7826 8.93827 15.5859 8.71964 17.2271C8.59369 18.1727 8.41497 19.0334 8.16828 19.7483C7.91816 20.4731 7.62246 20.976 7.3074 21.2786C6.90902 21.6611 6.89617 22.2941 7.27869 22.6925C7.6612 23.0909 8.29424 23.1037 8.69261 22.7212C9.32776 22.1113 9.75657 21.2768 10.0589 20.4007C10.3646 19.5148 10.5662 18.5114 10.7021 17.4912C10.9433 15.6807 10.9892 13.7199 10.9981 12.0964C10.2989 12.1151 9.62854 12.1529 8.99733 12.2071ZM13.0019 12.0964C13.0108 13.7199 13.0567 15.6807 13.2979 17.4912C13.4338 18.5114 13.6354 19.5148 13.9411 20.4007C14.2434 21.2768 14.6722 22.1113 15.3074 22.7212C15.7058 23.1037 16.3388 23.0909 16.7213 22.6925C17.1038 22.2941 17.091 21.6611 16.6926 21.2786C16.3775 20.976 16.0818 20.4731 15.8317 19.7483C15.585 19.0334 15.4063 18.1727 15.2804 17.2271C15.0617 15.5859 15.0132 13.7826 15.0027 12.2071C14.3715 12.1529 13.7011 12.1151 13.0019 12.0964Z',
  d13: 'M9.01228 8C9.5621 8 10.0078 7.55228 10.0078 7C10.0078 6.44772 9.5621 6 9.01228 6H9.00334C8.45353 6 8.00781 6.44771 8.00781 7C8.00781 7.55228 8.45353 8 9.00334 8H9.01228Z',
  d14: 'M17.1892 3.29118C16.5189 2.78219 15.7912 2.36842 15.0177 2.06731C14.2857 2.27672 13.75 2.9508 13.75 3.75C13.75 4.7165 14.5335 5.5 15.5 5.5C16.4665 5.5 17.25 4.7165 17.25 3.75C17.25 3.59124 17.2289 3.43741 17.1892 3.29118Z',
  d15: 'M18.63 4.62797C18.247 5.99638 16.9907 7 15.5 7C13.7051 7 12.25 5.54493 12.25 3.75C12.25 2.91173 12.5674 2.14758 13.0885 1.57116C12.732 1.52417 12.3689 1.5 12 1.5C6.48152 1.5 2.25 6.90839 2.25 13.25H2.26257C2.25434 13.3094 2.25 13.3707 2.25 13.4339C2.25 13.9057 2.50045 14.2734 2.77248 14.5288C3.04445 14.7841 3.4023 14.9916 3.79093 15.1643C4.57291 15.5118 5.64391 15.7896 6.87976 15.9903L7.12024 14.5097C5.94412 14.3187 5.01512 14.0669 4.40009 13.7936C4.09022 13.6559 3.90031 13.5302 3.79915 13.4352L3.79727 13.4334C3.8447 13.3883 3.93 13.3207 4.08048 13.2344C4.44783 13.0236 5.02926 12.8086 5.8129 12.6185C6.75445 12.39 7.92765 12.2115 9.24905 12.1062C9.24302 13.7625 9.2047 15.4377 8.96738 17.2193C8.84018 18.1741 8.6586 19.0527 8.40453 19.789C8.14789 20.5327 7.83555 21.0771 7.48047 21.418L8.51938 22.5C9.11452 21.9285 9.52669 21.1354 9.82248 20.2783C10.1208 19.4137 10.3196 18.4282 10.4542 17.4173C10.7095 15.5014 10.7444 13.7025 10.7494 12.0213C11.1572 12.0073 11.5747 12 12 12C12.4252 12 12.8427 12.0073 13.2505 12.0213C13.2554 13.7024 13.2904 15.5014 13.5456 17.4173C13.6803 18.4282 13.879 19.4137 14.1774 20.2783C14.4732 21.1354 14.8853 21.9285 15.4805 22.5L16.5194 21.418C16.1643 21.0771 15.852 20.5327 15.5953 19.789C15.3412 19.0527 15.1597 18.1741 15.0325 17.2193C14.7951 15.4377 14.7568 13.7625 14.7508 12.1062C16.0723 12.2115 17.2455 12.39 18.1871 12.6185C18.9707 12.8086 19.5522 13.0236 19.9195 13.2344C20.07 13.3207 20.1553 13.3883 20.2027 13.4334L20.2008 13.4352C20.0997 13.5302 19.9098 13.6559 19.5999 13.7936C18.9849 14.0669 18.0559 14.3187 16.8798 14.5097L17.1202 15.9903C18.3561 15.7896 19.4271 15.5118 20.2091 15.1643C20.5977 14.9916 20.9555 14.7841 21.2275 14.5288C21.4996 14.2734 21.75 13.9057 21.75 13.4339C21.75 13.3707 21.7457 13.3094 21.7374 13.25H21.75C21.75 9.89331 20.5645 6.79808 18.63 4.62797ZM10.0078 7.25C10.0078 7.80228 9.5601 8.25 9.00781 8.25H8.99883C8.44655 8.25 7.99883 7.80228 7.99883 7.25C7.99883 6.69771 8.44655 6.25 8.99883 6.25H9.00781C9.5601 6.25 10.0078 6.69772 10.0078 7.25Z',
} as const;

export const IconMushroom01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-stroke-rounded IconMushroom01StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroom01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-duotone-rounded IconMushroom01DuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroom01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-twotone-rounded IconMushroom01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconMushroom01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-solid-rounded IconMushroom01SolidRounded"
    >
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroom01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-bulk-rounded IconMushroom01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
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

export const IconMushroom01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-stroke-sharp IconMushroom01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroom01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-01-solid-sharp IconMushroom01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfMushroom01: TheIconSelfPack = {
  name: 'Mushroom01',
  StrokeRounded: IconMushroom01StrokeRounded,
  DuotoneRounded: IconMushroom01DuotoneRounded,
  TwotoneRounded: IconMushroom01TwotoneRounded,
  SolidRounded: IconMushroom01SolidRounded,
  BulkRounded: IconMushroom01BulkRounded,
  StrokeSharp: IconMushroom01StrokeSharp,
  SolidSharp: IconMushroom01SolidSharp,
};