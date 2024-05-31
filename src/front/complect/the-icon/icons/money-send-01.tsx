import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 6C19.3001 6.1287 20.1752 6.41956 20.8284 7.07691C22 8.25596 22 10.1536 22 13.9489C22 17.7442 22 19.6419 20.8284 20.8209C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8209C2 19.6419 2 17.7442 2 13.9489C2 10.1536 2 8.25596 3.17157 7.07691C3.82475 6.41956 4.69989 6.1287 6 6',
  d2: 'M18.5078 14H18.4988',
  d3: 'M5.50781 14H5.49883',
  d4: 'M14.5 14C14.5 15.3807 13.3807 16.5 12 16.5C10.6193 16.5 9.5 15.3807 9.5 14C9.5 12.6193 10.6193 11.5 12 11.5C13.3807 11.5 14.5 12.6193 14.5 14Z',
  d5: 'M9.5 4.5C9.99153 3.9943 11.2998 2 12 2M14.5 4.5C14.0085 3.9943 12.7002 2 12 2M12 2V8',
  d6: 'M3.0528 7.5129C2 8.69377 2 10.4625 2 14C2 17.5375 2 19.3062 3.0528 20.4871C3.22119 20.676 3.40678 20.8506 3.60746 21.0091C4.86213 22 6.74142 22 10.5 22H13.5C17.2586 22 19.1379 22 20.3925 21.0091C20.5932 20.8506 20.7788 20.676 20.9472 20.4871C22 19.3062 22 17.5375 22 14C22 10.4625 22 8.69377 20.9472 7.5129C20.7788 7.32403 20.5932 7.14935 20.3925 6.99087C19.1379 6 17.2586 6 13.5 6H10.5C6.74142 6 4.86213 6 3.60746 6.99087C3.40678 7.14935 3.22119 7.32403 3.0528 7.5129ZM12 16.5C13.3807 16.5 14.5 15.3807 14.5 14C14.5 12.6193 13.3807 11.5 12 11.5C10.6193 11.5 9.5 12.6193 9.5 14C9.5 15.3807 10.6193 16.5 12 16.5Z',
  d7: 'M20.8574 7.8112C20.074 7.22693 19.1316 6.96841 17.9694 6.84443C17.5219 6.79668 17.0272 6.76771 16.4798 6.75012H15.1C14.8172 6.75012 14.6757 6.75012 14.5879 6.83799C14.5 6.92586 14.5 7.06728 14.5 7.35012V7.72462C14.5 9.10761 13.3807 10.2287 12 10.2287C10.6193 10.2287 9.5 9.10761 9.5 7.72462V7.35012C9.5 7.06728 9.5 6.92586 9.41213 6.83799C9.32427 6.75012 9.18284 6.75012 8.9 6.75012H7.52022C6.97284 6.76771 6.4781 6.79668 6.03058 6.84443C4.86842 6.96841 3.926 7.22693 3.14263 7.8112C2.90811 7.98612 2.69068 8.1793 2.49298 8.38872C1.82681 9.0944 1.52932 9.94973 1.38763 10.9991C1.24998 12.0185 1.24999 13.3086 1.25 14.9367V15.0364C1.24999 16.6645 1.24998 17.9546 1.38763 18.974C1.52932 20.0234 1.82681 20.8787 2.49298 21.5844C2.69068 21.7938 2.90811 21.987 3.14263 22.1619C3.926 22.7462 4.86842 23.0047 6.03058 23.1287C7.16915 23.2501 8.61341 23.2501 10.4524 23.2501H10.4525H13.5475H13.5476C15.3866 23.2501 16.8308 23.2501 17.9694 23.1287C19.1316 23.0047 20.074 22.7462 20.8574 22.1619C21.0919 21.987 21.3093 21.7938 21.507 21.5844C22.1732 20.8787 22.4707 20.0234 22.6124 18.974C22.75 17.9546 22.75 16.6645 22.75 15.0364V14.9367C22.75 13.3086 22.75 12.0185 22.6124 10.9991C22.4707 9.94973 22.1732 9.0944 21.507 8.38872C21.3093 8.1793 21.0919 7.98612 20.8574 7.8112ZM12.0002 18.4942C13.6571 18.4942 15.0002 17.1489 15.0002 15.4893C15.0002 13.8297 13.6571 12.4844 12.0002 12.4844C10.3434 12.4844 9.00025 13.8297 9.00025 15.4893C9.00025 17.1489 10.3434 18.4942 12.0002 18.4942ZM19.5078 15.486C19.5078 14.9328 19.0601 14.4844 18.5078 14.4844H18.4988C17.9465 14.4844 17.4988 14.9328 17.4988 15.486C17.4988 16.0392 17.9465 16.4877 18.4988 16.4877H18.5078C19.0601 16.4877 19.5078 16.0392 19.5078 15.486ZM5.5 14.4844C6.05228 14.4844 6.5 14.9328 6.5 15.486C6.5 16.0392 6.05228 16.4877 5.5 16.4877H5.49102C4.93873 16.4877 4.49102 16.0392 4.49102 15.486C4.49102 14.9328 4.93873 14.4844 5.49102 14.4844H5.5Z',
  d8: 'M13.0059 7.75C13.0059 8.30228 12.5581 8.75 12.0059 8.75C11.4536 8.75 11.0059 8.30228 11.0059 7.75L11.0059 5.24996L10.4116 5.24998C10.236 5.25011 10.0203 5.25026 9.84387 5.22819L9.84053 5.22777C9.71408 5.212 9.13804 5.14017 8.86368 4.57457C8.58872 4.00775 8.89065 3.50761 8.95597 3.3994L8.95841 3.39537C9.05062 3.24235 9.18477 3.07147 9.29511 2.93092L9.31885 2.90067C9.61348 2.52485 9.99545 2.04063 10.3759 1.64962C10.5657 1.45451 10.783 1.25328 11.0139 1.09443C11.2191 0.953226 11.5693 0.749962 12 0.749962C12.4307 0.749962 12.7809 0.953226 12.9861 1.09443C13.217 1.25328 13.4343 1.45451 13.6241 1.64962C14.0046 2.04063 14.3865 2.52485 14.6812 2.90067L14.7049 2.93091C14.8152 3.07147 14.9494 3.24235 15.0416 3.39537L15.044 3.39941C15.1093 3.50761 15.4113 4.00775 15.1363 4.57457C14.862 5.14017 14.2859 5.21201 14.1595 5.22777L14.1561 5.22819C13.9797 5.25026 13.764 5.25011 13.5884 5.24998L13.0059 5.24996L13.0059 7.75Z',
  d9: 'M17.9694 6.8443C19.1316 6.96828 20.074 7.22681 20.8574 7.81108C21.0919 7.98599 21.3093 8.17918 21.507 8.3886C22.1732 9.09427 22.4707 9.94961 22.6124 10.999C22.75 12.0184 22.75 13.3084 22.75 14.9366V15.0362C22.75 16.6644 22.75 17.9544 22.6124 18.9739C22.4707 20.0232 22.1732 20.8786 21.507 21.5843C21.3093 21.7937 21.0919 21.9869 20.8574 22.1618C20.074 22.746 19.1316 23.0046 17.9694 23.1285C16.8308 23.25 15.3866 23.25 13.5475 23.25H10.4525C8.61345 23.25 7.16917 23.25 6.03058 23.1285C4.86842 23.0046 3.926 22.746 3.14263 22.1618C2.90811 21.9869 2.69068 21.7937 2.49298 21.5843C1.82681 20.8786 1.52932 20.0232 1.38763 18.9739C1.24998 17.9544 1.24999 16.6644 1.25 15.0362V14.9366C1.24999 13.3084 1.24998 12.0184 1.38763 10.999C1.52932 9.94961 1.82681 9.09427 2.49298 8.3886C2.69068 8.17918 2.90811 7.98599 3.14263 7.81108C3.926 7.22681 4.86842 6.96828 6.03058 6.8443C6.4781 6.79656 6.97284 6.76759 7.52022 6.75H8.9C9.18284 6.75 9.32427 6.75 9.41213 6.83787C9.5 6.92574 9.5 7.06716 9.5 7.35V7.7245C9.5 9.10748 10.6193 10.2286 12 10.2286C13.3807 10.2286 14.5 9.10748 14.5 7.7245V7.35C14.5 7.06716 14.5 6.92574 14.5879 6.83787C14.6757 6.75 14.8172 6.75 15.1 6.75H16.4798C17.0272 6.76759 17.5219 6.79656 17.9694 6.8443Z',
  d10: 'M15.0002 15.4854C15.0002 17.145 13.6571 18.4903 12.0002 18.4903C10.3434 18.4903 9.00025 17.145 9.00025 15.4854C9.00025 13.8258 10.3434 12.4805 12.0002 12.4805C13.6571 12.4805 15.0002 13.8258 15.0002 15.4854Z',
  d11: 'M19.5078 15.486C19.5078 14.9328 19.0601 14.4844 18.5078 14.4844H18.4988C17.9465 14.4844 17.4988 14.9328 17.4988 15.486C17.4988 16.0392 17.9465 16.4877 18.4988 16.4877H18.5078C19.0601 16.4877 19.5078 16.0392 19.5078 15.486Z',
  d12: 'M6.5 15.486C6.5 14.9328 6.05228 14.4844 5.5 14.4844H5.49102C4.93873 14.4844 4.49102 14.9328 4.49102 15.486C4.49102 16.0392 4.93873 16.4877 5.49102 16.4877H5.5C6.05228 16.4877 6.5 16.0392 6.5 15.486Z',
  d13: 'M18 6H22V22H2V6H6',
  d14: 'M9.5 4.5L12 2L14.5 4.5M12 8V2.4746',
  d15: 'M7.77545 5.25H2C1.58579 5.25 1.25 5.58579 1.25 6V22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V6C22.75 5.58579 22.4142 5.25 22 5.25H16.2251L14.5003 6.97485V9.85353H9.5003V6.97485L7.77545 5.25ZM8.79883 14C8.79883 12.2051 10.2539 10.75 12.0488 10.75C13.8438 10.75 15.2988 12.2051 15.2988 14C15.2988 15.7949 13.8438 17.25 12.0488 17.25C10.2539 17.25 8.79883 15.7949 8.79883 14ZM4 13H6V15H4V13ZM18 13H20V15H18V13Z',
  d16: 'M12.0001 1.25L15.2072 4.45711L13.793 5.87132L13.0001 5.07843V8.66421H11.0001V5.07843L10.2072 5.87132L8.79297 4.45711L12.0001 1.25Z',
} as const;

export const IconMoneySend01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-stroke-rounded IconMoneySend01StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMoneySend01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-duotone-rounded IconMoneySend01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMoneySend01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-twotone-rounded IconMoneySend01TwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMoneySend01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-solid-rounded IconMoneySend01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconMoneySend01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-bulk-rounded IconMoneySend01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySend01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-stroke-sharp IconMoneySend01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySend01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-01-solid-sharp IconMoneySend01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMoneySend01: TheIconSelfPack = {
  name: 'MoneySend01',
  StrokeRounded: IconMoneySend01StrokeRounded,
  DuotoneRounded: IconMoneySend01DuotoneRounded,
  TwotoneRounded: IconMoneySend01TwotoneRounded,
  SolidRounded: IconMoneySend01SolidRounded,
  BulkRounded: IconMoneySend01BulkRounded,
  StrokeSharp: IconMoneySend01StrokeSharp,
  SolidSharp: IconMoneySend01SolidSharp,
};