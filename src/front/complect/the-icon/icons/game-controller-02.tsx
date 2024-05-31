import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 16C17.5 17.1046 16.6046 18 15.5 18C14.3954 18 13.5 17.1046 13.5 16C13.5 14.8954 14.3954 14 15.5 14C16.6046 14 17.5 14.8954 17.5 16Z',
  d2: 'M10.5 16C10.5 17.1046 9.60457 18 8.5 18C7.39543 18 6.5 17.1046 6.5 16C6.5 14.8954 7.39543 14 8.5 14C9.60457 14 10.5 14.8954 10.5 16Z',
  d3: 'M8.16417 17.8583C6.891 20.067 5.20631 21.347 3.84736 20.9174C1.98573 20.3289 1.44035 16.7547 2.62922 12.9344C3.8181 9.11398 6.29102 6.49405 8.15264 7.08259C9.30278 7.44619 9.35625 8.86174 10.3032 9.378C10.527 9.5 10.8405 9.5 11.4676 9.5H12.5324C13.1595 9.5 13.473 9.5 13.6968 9.378C14.6438 8.86174 14.6972 7.44619 15.8474 7.08259C17.709 6.49405 20.1819 9.11398 21.3708 12.9344C22.5597 16.7547 22.0143 20.3289 20.1526 20.9174C18.7937 21.347 17.109 20.067 15.8358 17.8583M11.1039 16H12.8961',
  d4: 'M12 3V9',
  d5: 'M20.1526 20.9174C22.0143 20.3289 22.5597 16.7547 21.3708 12.9344C20.1819 9.11398 17.709 6.49405 15.8474 7.08259C15.2186 7.28137 14.9176 7.79454 14.6192 8.3033C14.3717 8.72515 14.1261 9.14397 13.6968 9.378C13.473 9.5 13.1595 9.5 12.5324 9.5H11.4676C10.8405 9.5 10.527 9.5 10.3032 9.378C9.87394 9.14397 9.62828 8.72515 9.38083 8.3033C9.08242 7.79454 8.78141 7.28137 8.15264 7.08259C6.29102 6.49405 3.8181 9.11398 2.62922 12.9344C1.44035 16.7547 1.98573 20.3289 3.84736 20.9174C5.18512 21.3403 6.83856 20.1064 8.10434 17.9609C7.18928 17.7772 6.5 16.9691 6.5 16C6.5 14.8954 7.39543 14 8.5 14C9.60457 14 10.5 14.8954 10.5 16H13.5C13.5 14.8954 14.3954 14 15.5 14C16.6046 14 17.5 14.8954 17.5 16C17.5 16.9691 16.8107 17.7772 15.8957 17.9609C17.1614 20.1064 18.8149 21.3403 20.1526 20.9174Z',
  d6: 'M12 2.25C12.5523 2.25 13 2.69772 13 3.25V9.25C13 9.80228 12.5523 10.25 12 10.25C11.4477 10.25 11 9.80228 11 9.25V3.25C11 2.69772 11.4477 2.25 12 2.25Z',
  d7: 'M4.59325 7.84221C5.64883 6.72389 7.02066 5.94002 8.37873 6.36936C9.24731 6.64395 9.67162 7.32497 9.94897 7.79195C10.1947 8.2062 10.3623 8.4887 10.5509 8.64528C10.584 8.67274 10.6006 8.68647 10.6446 8.70404C10.6887 8.7216 10.7211 8.72373 10.7858 8.72798C10.9582 8.7393 11.2163 8.75189 11.4677 8.75189H12.5324C12.7837 8.75189 13.0418 8.7393 13.2142 8.72798C13.2789 8.72373 13.3113 8.7216 13.3554 8.70404C13.3995 8.68647 13.416 8.67274 13.4491 8.64528C13.6377 8.4887 13.8053 8.2062 14.0511 7.79195C14.3284 7.32497 14.7527 6.64395 15.6213 6.36936C16.9794 5.94002 18.3512 6.72389 19.4068 7.84221C20.5005 9.00101 21.4661 10.7186 22.0869 12.7134C22.7077 14.7083 22.8881 16.6734 22.6471 18.2529C22.4145 19.7769 21.7342 21.2059 20.3787 21.6344C19.3857 21.9483 18.3765 21.6043 17.5226 20.9869C16.9565 20.5775 16.4148 20.0201 15.9191 19.3548C15.7396 19.1139 15.6499 18.9934 15.6843 18.8935C15.7187 18.7936 15.888 18.7473 16.2265 18.6548C17.3928 18.3362 18.25 17.2691 18.25 16.0018C18.25 14.483 17.0188 13.2518 15.5 13.2518C13.9812 13.2518 12.75 14.483 12.75 16.0018C12.75 16.0795 12.7532 16.1563 12.7595 16.2323C12.7811 16.4926 12.7919 16.6228 12.7325 16.6873C12.6731 16.7519 12.557 16.7519 12.3247 16.7519H11.6753C11.443 16.7519 11.3269 16.7519 11.2675 16.6873C11.2081 16.6228 11.2189 16.4926 11.2405 16.2323C11.2468 16.1563 11.25 16.0795 11.25 16.0018C11.25 14.483 10.0188 13.2518 8.5 13.2518C6.98122 13.2518 5.75 14.483 5.75 16.0018C5.75 17.2691 6.60724 18.3362 7.77348 18.6548C8.11201 18.7473 8.28128 18.7936 8.31571 18.8935C8.35014 18.9934 8.2604 19.1139 8.0809 19.3548C7.58525 20.0201 7.04354 20.5775 6.47738 20.9869C5.62349 21.6043 4.61429 21.9483 3.62129 21.6344C2.26581 21.2059 1.58549 19.7769 1.35294 18.2529C1.11193 16.6734 1.2923 14.7083 1.91311 12.7134C2.53388 10.7186 3.49947 9.00101 4.59325 7.84221Z',
  d8: 'M15.5 14.7518C14.8096 14.7518 14.25 15.3115 14.25 16.0018C14.25 16.6922 14.8096 17.2518 15.5 17.2518C16.1904 17.2518 16.75 16.6922 16.75 16.0018C16.75 15.3115 16.1904 14.7518 15.5 14.7518Z',
  d9: 'M7.25 16.0018C7.25 15.3115 7.80964 14.7518 8.5 14.7518C9.19036 14.7518 9.75 15.3115 9.75 16.0018C9.75 16.6922 9.19036 17.2518 8.5 17.2518C7.80964 17.2518 7.25 16.6922 7.25 16.0018Z',
  d10: 'M13 3.25C13 2.69772 12.5523 2.25 12 2.25C11.4477 2.25 11 2.69772 11 3.25V8.74001C11.1424 8.74671 11.3064 8.75189 11.4677 8.75189H12.5324C12.6936 8.75189 12.8576 8.74671 13 8.74001V3.25Z',
  d11: 'M15.5 14.75C14.8096 14.75 14.25 15.3096 14.25 16C14.25 16.6904 14.8096 17.25 15.5 17.25C16.1904 17.25 16.75 16.6904 16.75 16C16.75 15.3096 16.1904 14.75 15.5 14.75Z',
  d12: 'M7.25 16C7.25 15.3096 7.80964 14.75 8.5 14.75C9.19036 14.75 9.75 15.3096 9.75 16C9.75 16.6904 9.19036 17.25 8.5 17.25C7.80964 17.25 7.25 16.6904 7.25 16Z',
  d13: 'M10.5 16.0038L13.5 16.0038M15.4728 18C17.0066 20.4564 19.051 21.2717 20.1526 20.9233C22.0143 20.3345 22.5597 16.7589 21.3708 12.9369C20.1819 9.11488 17.709 6.49384 15.8474 7.08262C14.6972 7.44638 13.6968 9.379 13.6968 9.379H10.3032C10.3032 9.379 9.30278 7.44638 8.15264 7.08262C6.29102 6.49384 3.8181 9.11488 2.62922 12.9369C1.44035 16.7589 1.98573 20.3345 3.84736 20.9233C4.94897 21.2717 6.9934 20.4564 8.52722 18',
  d14: 'M12.75 2.74854V8.12943H13.262C13.3808 7.93407 13.5432 7.68285 13.7394 7.41954C13.9539 7.13163 14.2188 6.81571 14.5216 6.54041C14.8191 6.26993 15.1905 6.00419 15.6212 5.86796C16.9795 5.43838 18.3514 6.22271 19.4069 7.34144C20.5006 8.5007 21.4662 10.2189 22.0869 12.2145C22.7077 14.2103 22.8881 16.176 22.6471 17.7561C22.4146 19.2805 21.7343 20.7101 20.3788 21.1388C19.3766 21.4558 18.0865 21.086 16.9326 20.2308C16.2732 19.742 15.6241 19.0734 15.0413 18.2124C15.1904 18.2374 15.3437 18.2505 15.5 18.2505C17.0188 18.2505 18.25 17.0193 18.25 15.5005C18.25 13.9817 17.0188 12.7505 15.5 12.7505C13.9812 12.7505 12.75 13.9817 12.75 15.5005C12.75 15.7619 12.7865 16.0147 12.8546 16.2542H11.1454C11.2135 16.0147 11.25 15.7619 11.25 15.5005C11.25 13.9817 10.0188 12.7505 8.5 12.7505C6.98122 12.7505 5.75 13.9817 5.75 15.5005C5.75 17.0193 6.98122 18.2505 8.5 18.2505C8.65631 18.2505 8.80957 18.2374 8.95876 18.2124C8.37596 19.0734 7.72684 19.742 7.0674 20.2308C5.91353 21.086 4.62342 21.4558 3.6212 21.1388C2.26567 20.7101 1.58546 19.2805 1.35294 17.7561C1.11194 16.176 1.29229 14.2103 1.91308 12.2145C2.53383 10.2189 3.49939 8.5007 4.59314 7.34144C5.64865 6.22271 7.02056 5.43838 8.37882 5.86796C8.80955 6.00419 9.18097 6.26993 9.47845 6.54041C9.78123 6.81571 10.0461 7.13163 10.2607 7.41954C10.4568 7.68285 10.6193 7.93407 10.738 8.12943H11.25V2.74854H12.75Z',
  d15: 'M15.5 14.2505C14.8096 14.2505 14.25 14.8101 14.25 15.5005C14.25 16.1908 14.8096 16.7505 15.5 16.7505C16.1904 16.7505 16.75 16.1908 16.75 15.5005C16.75 14.8101 16.1904 14.2505 15.5 14.2505Z',
  d16: 'M7.25 15.5005C7.25 14.8101 7.80964 14.2505 8.5 14.2505C9.19036 14.2505 9.75 14.8101 9.75 15.5005C9.75 16.1908 9.19036 16.7505 8.5 16.7505C7.80964 16.7505 7.25 16.1908 7.25 15.5005Z',
} as const;

export const IconGameController02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-stroke-rounded IconGameController02StrokeRounded"
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

export const IconGameController02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-duotone-rounded IconGameController02DuotoneRounded"
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

export const IconGameController02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-twotone-rounded IconGameController02TwotoneRounded"
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

export const IconGameController02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-solid-rounded IconGameController02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconGameController02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-bulk-rounded IconGameController02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameController02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-stroke-sharp IconGameController02StrokeSharp"
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
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGameController02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-02-solid-sharp IconGameController02SolidSharp"
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
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGameController02: TheIconSelfPack = {
  name: 'GameController02',
  StrokeRounded: IconGameController02StrokeRounded,
  DuotoneRounded: IconGameController02DuotoneRounded,
  TwotoneRounded: IconGameController02TwotoneRounded,
  SolidRounded: IconGameController02SolidRounded,
  BulkRounded: IconGameController02BulkRounded,
  StrokeSharp: IconGameController02StrokeSharp,
  SolidSharp: IconGameController02SolidSharp,
};