import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 22L18.8529 19.8529M18.8529 19.8529C18.9675 19.7384 19.0739 19.6158 19.1714 19.486C19.602 18.913 19.8571 18.2006 19.8571 17.4286C19.8571 15.535 18.3221 14 16.4286 14C14.535 14 13 15.535 13 17.4286C13 19.3221 14.535 20.8571 16.4286 20.8571C17.3753 20.8571 18.2325 20.4734 18.8529 19.8529Z',
  d2: 'M11 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V12',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M8.49805 8.49792C4.90998 8.49792 3.34179 10.1536 3.0014 10.9896C3 11.3586 3 11.7548 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H15C15.9293 22 16.394 22 16.7804 21.9231C18.3671 21.6075 19.6075 20.3671 19.9231 18.7804C20 18.394 20 17.9293 20 17V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.2836 2 12.7945 2 12.3445 2.00216C10.0738 2.12886 9.53252 5.06667 9.5492 6.55168C9.59012 8.19468 8.79946 8.49792 8.49805 8.49792ZM19.1714 19.486C19.602 18.913 19.8571 18.2006 19.8571 17.4286C19.8571 15.535 18.3221 14 16.4286 14C14.535 14 13 15.535 13 17.4286C13 19.3221 14.535 20.8571 16.4286 20.8571C17.3753 20.8571 18.2325 20.4734 18.8529 19.8529C18.9675 19.7384 19.0739 19.6158 19.1714 19.486Z',
  d5: 'M16.3036 14.875C14.9623 14.875 13.875 15.9623 13.875 17.3036C13.875 18.6448 14.9623 19.7321 16.3036 19.7321C16.9745 19.7321 17.5803 19.4614 18.0208 19.0208C18.1022 18.9395 18.1778 18.8524 18.2469 18.7604C18.5519 18.3545 18.7321 17.8516 18.7321 17.3036C18.7321 15.9623 17.6448 14.875 16.3036 14.875ZM11.875 17.3036C11.875 14.8577 13.8577 12.875 16.3036 12.875C18.7494 12.875 20.7321 14.8577 20.7321 17.3036C20.7321 18.1631 20.4864 18.9673 20.0616 19.6474L21.5821 21.1679C21.9726 21.5584 21.9726 22.1916 21.5821 22.5821C21.1916 22.9726 20.5584 22.9726 20.1679 22.5821L18.6474 21.0616C17.9677 21.4862 17.1639 21.7321 16.3036 21.7321C13.8577 21.7321 11.875 19.7494 11.875 17.3036Z',
  d6: 'M6.81154 22.5222C7.79379 22.625 9.35661 22.625 10.8977 22.625C11.4375 22.625 11.875 22.1874 11.875 21.6477C11.875 21.108 11.4375 20.6704 10.8977 20.6704C9.28909 20.6704 7.88285 20.6691 7.0134 20.5782C6.15948 20.4888 5.67555 20.3221 5.31772 20.069C5.07627 19.8983 4.86389 19.6972 4.6861 19.4728C4.43053 19.1503 4.26109 18.7175 4.16886 17.9308C4.07393 17.121 4.07235 16.0637 4.07235 14.5402L4.07227 11.64C4.07225 11.373 4.07242 10.7345 4.35304 10.2623C4.52597 9.97131 4.74739 9.7282 4.97484 9.60438C5.34135 9.40486 5.76154 9.2915 6.20821 9.2915L7.24858 9.32799C7.62867 9.33588 8.07221 9.32387 8.50036 9.20915C9.33433 8.98569 9.98574 8.33428 10.2092 7.50031C10.3239 7.07216 10.3359 6.62862 10.328 6.24853L10.2915 5.20816C10.2915 4.74047 10.4159 4.33334 10.6333 3.95493C10.76 3.73434 10.9807 3.53245 11.2855 3.35514C11.7476 3.08623 12.301 3.08374 12.6392 3.08222C12.9773 3.08069 13.3341 3.07952 13.6322 3.07952C15.4663 3.07952 16.1334 3.09347 16.6368 3.27082C17.5094 3.57828 18.1751 4.21992 18.4852 5.00529C18.5628 5.20193 18.6177 5.46035 18.6471 5.9083C18.6771 6.36497 18.6776 6.94792 18.6776 7.78818V10.9013C18.6776 11.439 19.1136 11.875 19.6513 11.875C20.1891 11.875 20.625 11.439 20.625 10.9013V7.755C20.625 6.95584 20.625 6.30828 20.5903 5.7797C20.5545 5.23507 20.4789 4.7494 20.2956 4.28524C19.7668 2.94593 18.6584 1.91166 17.2818 1.42666C16.423 1.12407 14.9509 1.12446 13.3959 1.125C10.5563 1.12464 8.86965 1.12443 7.48721 1.61151C5.26721 2.39369 3.49348 4.05643 2.65009 6.19249C2.36897 6.90445 2.24444 7.66916 2.18419 8.586C2.125 9.48671 2.125 10.5993 2.125 12.0176V12.0176V14.6011C2.12498 16.0492 2.12496 17.2219 2.23485 18.1592C2.34896 19.1326 2.59221 19.9705 3.16204 20.6895C3.45722 21.062 3.80577 21.3908 4.19614 21.6669C4.9409 22.1935 5.80212 22.4166 6.81154 22.5222Z',
  d7: 'M12.068 21.988L3.01 21.998C3.00448 21.998 3 21.9936 3 21.988V9.00059L10 2.00195H19.99C19.9955 2.00195 20 2.00643 20 2.01195L19.99 12.0247M10 2.51362V9.00059H3.57088',
  d8: 'M16.4571 15.15C15.1829 15.15 14.15 16.1829 14.15 17.4571C14.15 18.7313 15.1829 19.7643 16.4571 19.7643C17.0945 19.7643 17.67 19.5071 18.0885 19.0885C18.1658 19.0113 18.2376 18.9286 18.3033 18.8411C18.593 18.4556 18.7643 17.9777 18.7643 17.4571C18.7643 16.1829 17.7313 15.15 16.4571 15.15ZM12.25 17.4571C12.25 15.1336 14.1336 13.25 16.4571 13.25C18.7807 13.25 20.6643 15.1336 20.6643 17.4571C20.6643 18.2737 20.4308 19.0377 20.0273 19.6838L21.75 21.4065L20.4065 22.75L18.6837 21.0272C18.038 21.4306 17.2744 21.6643 16.4571 21.6643C14.1336 21.6643 12.25 19.7807 12.25 17.4571Z',
  d9: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H11.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V11H20.75V2.22727Z',
} as const;

export const IconFileSearchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-stroke-rounded IconFileSearchStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileSearchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-duotone-rounded IconFileSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFileSearchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-twotone-rounded IconFileSearchTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconFileSearchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-solid-rounded IconFileSearchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSearchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-bulk-rounded IconFileSearchBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSearchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-stroke-sharp IconFileSearchStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileSearchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-search-solid-sharp IconFileSearchSolidSharp"
    >
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

export const iconPackOfFileSearch: TheIconSelfPack = {
  name: 'FileSearch',
  StrokeRounded: IconFileSearchStrokeRounded,
  DuotoneRounded: IconFileSearchDuotoneRounded,
  TwotoneRounded: IconFileSearchTwotoneRounded,
  SolidRounded: IconFileSearchSolidRounded,
  BulkRounded: IconFileSearchBulkRounded,
  StrokeSharp: IconFileSearchStrokeSharp,
  SolidSharp: IconFileSearchSolidSharp,
};