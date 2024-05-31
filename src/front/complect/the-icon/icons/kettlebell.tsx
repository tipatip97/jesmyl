import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.0003 9C18.2118 6.13886 18.8204 5.15138 18.3298 4.0713C18.1796 3.74048 17.964 3.43972 17.6947 3.18507C16.0234 1.60498 7.97656 1.60498 6.30528 3.18507C6.03594 3.43972 5.82038 3.74048 5.67013 4.0713C5.17956 5.15138 5.78859 6.13886 7.00009 9',
  d2: 'M12 8C7.58172 8 4 11.5817 4 16C4 17.8455 4.62489 19.545 5.67463 20.8985C6.39442 21.8266 7.06365 22 8.22111 22H15.7789C16.9363 22 17.6056 21.8266 18.3254 20.8985C19.3751 19.545 20 17.8455 20 16C20 11.5817 16.4183 8 12 8Z',
  d3: 'M15 16H16.5M7.5 16H9',
  d4: 'M18.3298 4.0713C18.8204 5.15138 18.2118 6.13886 17.0003 9L16.7039 9.52831C15.3837 8.56709 13.7581 8 12 8C10.218 8 8.57208 8.58264 7.24235 9.56782L7.00009 9C5.78859 6.13886 5.17956 5.15138 5.67013 4.0713C5.82038 3.74048 6.03594 3.43972 6.30528 3.18507C7.97656 1.60498 16.0234 1.60498 17.6947 3.18507C17.964 3.43972 18.1796 3.74048 18.3298 4.0713Z',
  d5: 'M4 16C4 11.5817 7.58172 8 12 8C16.4183 8 20 11.5817 20 16C20 17.8455 19.3751 19.545 18.3254 20.8985C17.6056 21.8266 16.9363 22 15.7789 22H8.22111C7.06365 22 6.39442 21.8266 5.67463 20.8985C4.62489 19.545 4 17.8455 4 16ZM12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19Z',
  d6: 'M7.56655 3.84935C7.24287 3.97446 7.06845 4.08976 6.99234 4.16172C6.81511 4.32928 6.6763 4.52428 6.58066 4.73484C6.48104 4.95418 6.44399 5.18644 6.64715 5.80631C6.79825 6.26734 7.03526 6.81184 7.36624 7.57224C7.52831 7.94458 7.71291 8.36868 7.92099 8.86008C8.13634 9.36865 7.89863 9.9555 7.39006 10.1708C6.88149 10.3862 6.29464 10.1485 6.07929 9.63992C5.90477 9.22775 5.73788 8.84415 5.58279 8.48765L5.58276 8.48759C5.22378 7.66244 4.92794 6.98243 4.74662 6.42919C4.46503 5.57001 4.36875 4.76849 4.75969 3.90776C4.96457 3.45669 5.25687 3.05016 5.61833 2.70842C5.96003 2.38536 6.40267 2.15502 6.84548 1.98386C7.2995 1.80836 7.81783 1.6709 8.36406 1.56466C9.45668 1.35216 10.7375 1.25 12 1.25C13.2626 1.25 14.5434 1.35216 15.636 1.56466C16.1822 1.6709 16.7005 1.80836 17.1546 1.98386C17.5974 2.15502 18.04 2.38536 18.3817 2.70842C18.7432 3.05016 19.0355 3.45669 19.2403 3.90776C19.6312 4.76836 19.5352 5.56979 19.2537 6.42906C19.0723 6.9828 18.7762 7.66344 18.4169 8.48948C18.262 8.84546 18.0954 9.22845 17.9212 9.63992C17.7059 10.1485 17.119 10.3862 16.6104 10.1708C16.1019 9.9555 15.8642 9.36865 16.0795 8.86008C16.2872 8.36961 16.4715 7.94619 16.6333 7.57435L16.6333 7.57433C16.9647 6.81289 17.2019 6.26781 17.3531 5.80644C17.5561 5.18666 17.5191 4.95431 17.4194 4.73483C17.3237 4.52428 17.1849 4.32928 17.0077 4.16173C16.9316 4.08976 16.7572 3.97446 16.4335 3.84935C16.121 3.72857 15.7235 3.61915 15.2542 3.52787C14.3157 3.34536 13.167 3.25 12 3.25C10.8331 3.25 9.68432 3.34536 8.74588 3.52787C8.27659 3.61915 7.87901 3.72857 7.56655 3.84935Z',
  d7: 'M3.25 16C3.25 11.1675 7.16751 7.25 12 7.25C16.8325 7.25 20.75 11.1675 20.75 16C20.75 18.0177 20.0661 19.8778 18.918 21.3582C18.499 21.8985 18.0503 22.2734 17.4927 22.4945C16.9552 22.7076 16.3822 22.75 15.7789 22.75H8.22111C7.61777 22.75 7.04482 22.7076 6.50735 22.4945C5.94969 22.2734 5.50103 21.8985 5.08198 21.3582C3.93385 19.8778 3.25 18.0177 3.25 16ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.12602C8.57006 13.2748 10.1362 12 12 12C13.8638 12 15.4299 13.2748 15.874 15H16.5C17.0523 15 17.5 15.4477 17.5 16C17.5 16.5523 17.0523 17 16.5 17H15.874C15.4299 18.7252 13.8638 20 12 20C10.1362 20 8.57006 18.7252 8.12602 17H7.5C6.94772 17 6.5 16.5523 6.5 16ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z',
  d8: 'M3.25 16C3.25 11.1675 7.16751 7.25 12 7.25C16.8325 7.25 20.75 11.1675 20.75 16C20.75 18.0177 20.0661 19.8778 18.918 21.3582C18.499 21.8985 18.0503 22.2734 17.4927 22.4945C16.9552 22.7076 16.3822 22.75 15.7789 22.75H8.22111C7.61777 22.75 7.04482 22.7076 6.50735 22.4945C5.94969 22.2734 5.50103 21.8985 5.08198 21.3582C3.93385 19.8778 3.25 18.0177 3.25 16Z',
  d9: 'M16.2882 8.37098C16.8883 8.70905 17.4446 9.11589 17.9462 9.58081C18.1114 9.19169 18.2695 8.82833 18.4169 8.48944C18.7762 7.66339 19.0723 6.98276 19.2537 6.42902C19.5352 5.56975 19.6312 4.76832 19.2403 3.90772C19.0355 3.45665 18.7432 3.05011 18.3817 2.70838C18.04 2.38532 17.5974 2.15497 17.1546 1.98381C16.7005 1.80832 16.1822 1.67086 15.636 1.56462C14.5434 1.35211 13.2626 1.24996 12 1.24996C10.7375 1.24996 9.45668 1.35211 8.36406 1.56462C7.81783 1.67086 7.2995 1.80832 6.84548 1.98381C6.40267 2.15497 5.96003 2.38532 5.61833 2.70838C5.25687 3.05011 4.96457 3.45664 4.75969 3.90772C4.36875 4.76845 4.46503 5.56997 4.74662 6.42915C4.92794 6.98238 5.22378 7.6624 5.58276 8.48754L5.58279 8.4876L5.58287 8.4878C5.73047 8.82707 5.88874 9.19087 6.05411 9.58048C6.55579 9.1156 7.11206 8.70879 7.71223 8.37076C7.58715 8.0797 7.47191 7.81495 7.36624 7.5722C7.03526 6.8118 6.79825 6.26729 6.64715 5.80626C6.44399 5.1864 6.48104 4.95414 6.58066 4.73479C6.6763 4.52424 6.81511 4.32924 6.99234 4.16168C7.06845 4.08972 7.24287 3.97442 7.56655 3.84931C7.87901 3.72853 8.27659 3.61911 8.74588 3.52783C9.68432 3.34531 10.8331 3.24996 12 3.24996C13.167 3.24996 14.3157 3.34531 15.2542 3.52783C15.7235 3.61911 16.121 3.72853 16.4335 3.84931C16.7572 3.97442 16.9316 4.08972 17.0077 4.16168C17.1849 4.32924 17.3237 4.52424 17.4194 4.73479C17.5191 4.95427 17.5561 5.18662 17.3531 5.8064C17.2019 6.26777 16.9647 6.81284 16.6333 7.57428L16.6333 7.57431C16.5279 7.81655 16.4129 8.08068 16.2882 8.37098Z',
  d10: 'M10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16ZM8.12602 17H7.5C6.94772 17 6.5 16.5523 6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.12602C8.57006 13.2748 10.1362 12 12 12C13.8638 12 15.4299 13.2748 15.874 15H16.5C17.0523 15 17.5 15.4477 17.5 16C17.5 16.5523 17.0523 17 16.5 17H15.874C15.4299 18.7252 13.8638 20 12 20C10.1362 20 8.57006 18.7252 8.12602 17Z',
  d11: 'M17.0001 10C18.2116 6.73012 18.8202 5.60157 18.3296 4.3672C18.1794 3.98912 17.9638 3.64539 17.6945 3.35437C16.0232 1.54854 7.97638 1.54854 6.3051 3.35437C6.03575 3.64539 5.8202 3.98912 5.66994 4.3672C5.17938 5.60157 5.78841 6.73012 6.99991 10',
  d12: 'M15 16H17M7 16H9',
  d13: 'M12 8C7.58172 8 4 11.5817 4 16C4 18.3894 5.04751 20.5341 6.70835 22H17.2916C18.9525 20.5341 20 18.3894 20 16C20 11.5817 16.4183 8 12 8Z',
  d14: 'M8.87951 3.4876C7.92758 3.6992 7.39475 3.97699 7.20457 4.18248C7.02719 4.37414 6.8819 4.6042 6.77946 4.86196C6.65321 5.17965 6.6315 5.50943 6.83617 6.22312C6.98514 6.7426 7.21973 7.35859 7.54272 8.20668L7.54273 8.2067C7.69881 8.61654 7.87554 9.08058 8.07322 9.61413L6.26032 10.2858C6.08863 9.82242 5.92562 9.39421 5.77492 8.99835L5.77492 8.99834C5.43027 8.09298 5.15004 7.35684 4.97775 6.75607C4.71383 5.83577 4.63486 5.02348 4.98282 4.14794C5.17087 3.67476 5.44232 3.24027 5.78567 2.86929C6.40328 2.20196 7.44861 1.82515 8.46002 1.60033C9.52579 1.36344 10.7727 1.25 12 1.25C13.2272 1.25 14.4741 1.36344 15.5399 1.60033C16.5513 1.82515 17.5967 2.20196 18.2143 2.86929C18.5576 3.24027 18.8291 3.67476 19.0171 4.14794C19.365 5.02337 19.2863 5.83558 19.0224 6.75595C18.8501 7.35727 18.5696 8.09408 18.2246 9.00045L18.2246 9.00048C18.0742 9.39574 17.9114 9.82324 17.7401 10.2858L15.9272 9.61413C16.1244 9.08166 16.3008 8.61841 16.4567 8.20917L16.4567 8.209C16.7801 7.35975 17.0149 6.74312 17.164 6.22323C17.3685 5.50962 17.3468 5.17975 17.2205 4.86196C17.118 4.6042 16.9727 4.37414 16.7954 4.18248C16.6052 3.97699 16.0724 3.69919 15.1204 3.4876C14.2229 3.28809 13.1212 3.18333 12 3.18333C10.8787 3.18333 9.77709 3.28809 8.87951 3.4876Z',
  d15: 'M12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14Z',
  d16: 'M3.25 16C3.25 11.1675 7.16751 7.25 12 7.25C16.8325 7.25 20.75 11.1675 20.75 16C20.75 18.6135 19.6033 20.9601 17.7879 22.5623L17.5753 22.75H6.42471L6.21205 22.5623C4.39675 20.9601 3.25 18.6135 3.25 16ZM7 17H8.12602C8.57006 18.7252 10.1362 20 12 20C13.8638 20 15.4299 18.7252 15.874 17H17V15H15.874C15.4299 13.2748 13.8638 12 12 12C10.1362 12 8.57006 13.2748 8.12602 15H7V17Z',
} as const;

export const IconKettlebellStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-stroke-rounded IconKettlebellStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconKettlebellDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-duotone-rounded IconKettlebellDuotoneRounded"
    >
      <path 
        d={d.d2} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconKettlebellTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-twotone-rounded IconKettlebellTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconKettlebellSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-solid-rounded IconKettlebellSolidRounded"
    >
      <path 
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

export const IconKettlebellBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-bulk-rounded IconKettlebellBulkRounded"
    >
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

export const IconKettlebellStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-stroke-sharp IconKettlebellStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="16" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKettlebellSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kettlebell-solid-sharp IconKettlebellSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKettlebell: TheIconSelfPack = {
  name: 'Kettlebell',
  StrokeRounded: IconKettlebellStrokeRounded,
  DuotoneRounded: IconKettlebellDuotoneRounded,
  TwotoneRounded: IconKettlebellTwotoneRounded,
  SolidRounded: IconKettlebellSolidRounded,
  BulkRounded: IconKettlebellBulkRounded,
  StrokeSharp: IconKettlebellStrokeSharp,
  SolidSharp: IconKettlebellSolidSharp,
};