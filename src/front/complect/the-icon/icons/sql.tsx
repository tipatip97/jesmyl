import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8.41465 10C8.20873 9.4174 7.65311 9 7 9C6.17157 9 5.5 9.67157 5.5 10.5C5.5 11.3284 6.17157 12 7 12C7.82843 12 8.5 12.6716 8.5 13.5C8.5 14.3284 7.82843 15 7 15C6.34689 15 5.79127 14.5826 5.58535 14',
  d3: 'M12.5 15C11.6716 15 11 14.3284 11 13.5V10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5V13.5C14 14.3284 13.3284 15 12.5 15ZM12.5 15L14 16.5',
  d4: 'M16.5 9V13C16.5 13.9428 16.5 14.4142 16.7929 14.7071C17.0858 15 17.5572 15 18.5 15',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM7 8.25C5.75736 8.25 4.75 9.25736 4.75 10.5C4.75 11.7426 5.75736 12.75 7 12.75C7.41421 12.75 7.75 13.0858 7.75 13.5C7.75 13.9142 7.41421 14.25 7 14.25C6.67462 14.25 6.3958 14.0424 6.29248 13.7501C6.15445 13.3595 5.72596 13.1548 5.33542 13.2929C4.94488 13.4309 4.74019 13.8594 4.87822 14.2499C5.18674 15.1228 6.01916 15.75 7 15.75C8.24264 15.75 9.25 14.7426 9.25 13.5C9.25 12.2574 8.24264 11.25 7 11.25C6.58579 11.25 6.25 10.9142 6.25 10.5C6.25 10.0858 6.58579 9.75 7 9.75C7.32538 9.75 7.6042 9.95763 7.70752 10.2499C7.84555 10.6405 8.27404 10.8452 8.66458 10.7071C9.05512 10.5691 9.25981 10.1406 9.12178 9.75007C8.81326 8.87718 7.98084 8.25 7 8.25ZM10.25 10.5C10.25 9.25736 11.2574 8.25 12.5 8.25C13.7426 8.25 14.75 9.25736 14.75 10.5V13.5C14.75 14.2333 14.3992 14.8847 13.8562 15.2955L14.5303 15.9697C14.8232 16.2626 14.8232 16.7374 14.5303 17.0303C14.2374 17.3232 13.7626 17.3232 13.4697 17.0303L12.1645 15.7252C11.081 15.5632 10.25 14.6286 10.25 13.5V10.5ZM12.5 9.75C12.0858 9.75 11.75 10.0858 11.75 10.5V13.5C11.75 13.9142 12.0858 14.25 12.5 14.25C12.9142 14.25 13.25 13.9142 13.25 13.5V10.5C13.25 10.0858 12.9142 9.75 12.5 9.75ZM17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25C16.0858 8.25 15.75 8.58579 15.75 9V13L15.75 13.0447C15.75 13.4776 15.7499 13.8744 15.7933 14.1972C15.8411 14.5527 15.9535 14.9284 16.2626 15.2374C16.5716 15.5465 16.9473 15.6589 17.3028 15.7067C17.6256 15.7501 18.0224 15.7501 18.4553 15.75L18.5 15.75C18.9142 15.75 19.25 15.4142 19.25 15C19.25 14.5858 18.9142 14.25 18.5 14.25C18.0074 14.25 17.7134 14.2484 17.5027 14.2201C17.4061 14.2071 17.3578 14.1918 17.336 14.1828C17.3335 14.1818 17.3314 14.1809 17.3298 14.1801C17.328 14.1793 17.3267 14.1787 17.3257 14.1781L17.3232 14.1768L17.3219 14.1743C17.3209 14.1724 17.3192 14.1691 17.3172 14.164C17.3082 14.1423 17.2929 14.0939 17.2799 13.9973C17.2516 13.7866 17.25 13.4926 17.25 13V9Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M4.75 10.5C4.75 9.25736 5.75736 8.25 7 8.25C7.98084 8.25 8.81326 8.87718 9.12178 9.75007C9.25981 10.1406 9.05512 10.5691 8.66458 10.7071C8.27404 10.8452 7.84555 10.6405 7.70752 10.2499C7.6042 9.95763 7.32538 9.75 7 9.75C6.58579 9.75 6.25 10.0858 6.25 10.5C6.25 10.9142 6.58579 11.25 7 11.25C8.24264 11.25 9.25 12.2574 9.25 13.5C9.25 14.7426 8.24264 15.75 7 15.75C6.01916 15.75 5.18674 15.1228 4.87822 14.2499C4.74019 13.8594 4.94488 13.4309 5.33542 13.2929C5.72596 13.1548 6.15445 13.3595 6.29248 13.7501C6.3958 14.0424 6.67462 14.25 7 14.25C7.41421 14.25 7.75 13.9142 7.75 13.5C7.75 13.0858 7.41421 12.75 7 12.75C5.75736 12.75 4.75 11.7426 4.75 10.5Z',
  d8: 'M10.25 10.5C10.25 9.25736 11.2574 8.25 12.5 8.25C13.7426 8.25 14.75 9.25736 14.75 10.5V13.5C14.75 14.2333 14.3992 14.8847 13.8562 15.2955L14.5303 15.9697C14.8232 16.2626 14.8232 16.7374 14.5303 17.0303C14.2374 17.3232 13.7626 17.3232 13.4697 17.0303L12.1645 15.7252C11.081 15.5632 10.25 14.6286 10.25 13.5V10.5ZM12.5 9.75C12.0858 9.75 11.75 10.0858 11.75 10.5V13.5C11.75 13.9142 12.0858 14.25 12.5 14.25C12.9142 14.25 13.25 13.9142 13.25 13.5V10.5C13.25 10.0858 12.9142 9.75 12.5 9.75Z',
  d9: 'M16.5 8.25C16.9142 8.25 17.25 8.58579 17.25 9V13C17.25 13.4926 17.2516 13.7866 17.2799 13.9973C17.2929 14.0939 17.3082 14.1423 17.3172 14.164C17.3192 14.1691 17.3209 14.1724 17.3219 14.1743L17.3232 14.1768L17.3257 14.1781C17.3276 14.1791 17.3309 14.1808 17.336 14.1828C17.3578 14.1918 17.4061 14.2071 17.5027 14.2201C17.7134 14.2484 18.0074 14.25 18.5 14.25C18.9142 14.25 19.25 14.5858 19.25 15C19.25 15.4142 18.9142 15.75 18.5 15.75C18.4851 15.75 18.4701 15.75 18.4553 15.75C18.0224 15.7501 17.6256 15.7501 17.3028 15.7067C16.9473 15.6589 16.5716 15.5465 16.2626 15.2374C15.9535 14.9284 15.8411 14.5527 15.7933 14.1972C15.7499 13.8744 15.75 13.4776 15.75 13.0447C15.75 13.0299 15.75 13.015 15.75 13V9C15.75 8.58579 16.0858 8.25 16.5 8.25Z',
  d10: 'M3 3V21H21V3H3Z',
  d11: 'M8.40803 9.992C8.21266 9.44399 7.36963 8.55134 6.11118 9.27584C5.52725 9.61202 5.05825 10.9898 6.16099 11.7311C6.17122 11.753 6.2458 11.8119 6.45264 11.9008C6.61182 11.9692 6.78913 11.9757 6.96232 11.9819L6.96479 11.982C7.34749 11.9959 7.91065 12.153 8.27233 12.7075C8.39706 12.9088 8.63906 13.4672 8.33782 14.1396C8.04763 14.7872 7.34413 14.9889 7.02369 14.9909C6.68162 15.0243 5.91185 14.8558 5.59573 14.0065M12.5011 14.9951C11.6713 14.9951 10.9987 14.3224 10.9987 13.4927V10.5063C10.9987 9.67657 11.6713 9.0039 12.5011 9.0039C13.3309 9.0039 14.0036 9.67657 14.0036 10.5063V13.4927C14.0036 14.3224 13.3309 14.9951 12.5011 14.9951ZM12.5011 14.9951L14.0036 16.4908M16.4967 8.50293V15.0039H18.4996',
  d12: 'M11.75 10.5C11.75 10.0858 12.0858 9.75 12.5 9.75C12.9142 9.75 13.25 10.0858 13.25 10.5V13.5C13.25 13.9142 12.9142 14.25 12.5 14.25C12.0858 14.25 11.75 13.9142 11.75 13.5V10.5Z',
  d13: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.1989 21.75 21.3897 21.671 21.5303 21.5303C21.671 21.3897 21.75 21.1989 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM7 8.25C5.75736 8.25 4.75 9.25736 4.75 10.5C4.75 11.7426 5.75736 12.75 7 12.75C7.41421 12.75 7.75 13.0858 7.75 13.5C7.75 13.9142 7.41421 14.25 7 14.25C6.67462 14.25 6.3958 14.0424 6.29248 13.7501L4.87822 14.2499C5.18674 15.1228 6.01916 15.75 7 15.75C8.24264 15.75 9.25 14.7426 9.25 13.5C9.25 12.2574 8.24264 11.25 7 11.25C6.58579 11.25 6.25 10.9142 6.25 10.5C6.25 10.0858 6.58579 9.75 7 9.75C7.32538 9.75 7.6042 9.95762 7.70752 10.2499L9.12178 9.75007C8.81326 8.87718 7.98084 8.25 7 8.25ZM12.5 8.25C11.2574 8.25 10.25 9.25736 10.25 10.5V13.5C10.25 14.6286 11.081 15.5632 12.1645 15.7252L13.4697 17.0303L14.5303 15.9697L13.8562 15.2955C14.3992 14.8847 14.75 14.2333 14.75 13.5V10.5C14.75 9.25736 13.7426 8.25 12.5 8.25ZM17.2492 8.25H15.7492V15.75H18.5V14.25H17.2492V8.25Z',
} as const;

export const IconSqlStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-stroke-rounded IconSqlStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSqlDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-duotone-rounded IconSqlDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSqlTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-twotone-rounded IconSqlTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSqlSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-solid-rounded IconSqlSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSqlBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-bulk-rounded IconSqlBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSqlStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-stroke-sharp IconSqlStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSqlSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sql-solid-sharp IconSqlSolidSharp"
    >
      <path 
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

export const iconPackOfSql: TheIconSelfPack = {
  name: 'Sql',
  StrokeRounded: IconSqlStrokeRounded,
  DuotoneRounded: IconSqlDuotoneRounded,
  TwotoneRounded: IconSqlTwotoneRounded,
  SolidRounded: IconSqlSolidRounded,
  BulkRounded: IconSqlBulkRounded,
  StrokeSharp: IconSqlStrokeSharp,
  SolidSharp: IconSqlSolidSharp,
};