import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 8H6C4.11438 8 3.17157 8 2.58579 8.53253C2 9.06507 2 9.92217 2 11.6364V14.3636C2 16.0778 2 16.9349 2.58579 17.4675C3.17157 18 4.11438 18 6 18H18C19.8856 18 20.8284 18 21.4142 17.4675C22 16.9349 22 16.0778 22 14.3636V11.6364C22 9.92217 22 9.06507 21.4142 8.53253C20.8284 8 19.8856 8 18 8Z',
  d2: 'M5 18L4 22M19 18L20 22',
  d3: 'M14 18V8',
  d4: 'M7 11.5H9M7 14.5H9',
  d5: 'M5.43934 7.56066C5 7.12132 5 6.41421 5 5C5 3.58579 5 2.87868 5.43934 2.43934C5.87868 2 6.58579 2 8 2C9.41421 2 10.1213 2 10.5607 2.43934C11 2.87868 11 3.58579 11 5C11 6.41421 11 7.12132 10.5607 7.56066C10.1213 8 9.41421 8 8 8C6.58579 8 5.87868 8 5.43934 7.56066Z',
  d6: 'M2 11.6364V14.3636C2 16.0778 2 16.9349 2.58579 17.4675C3.17157 18 4.11438 18 6 18H14V8H6C4.11438 8 3.17157 8 2.58579 8.53253C2 9.06507 2 9.92217 2 11.6364Z',
  d7: 'M5.24277 17.0301C5.77857 17.164 6.10433 17.707 5.97038 18.2428L4.97038 22.2428C4.83643 22.7786 4.2935 23.1043 3.7577 22.9704C3.22191 22.8364 2.89615 22.2935 3.03009 21.7577L4.03009 17.7577C4.16404 17.2219 4.70698 16.8961 5.24277 17.0301ZM18.7577 17.0301C19.2935 16.8961 19.8364 17.2219 19.9704 17.7577L20.9704 21.7577C21.1043 22.2935 20.7786 22.8364 20.2428 22.9704C19.707 23.1043 19.164 22.7786 19.0301 22.2428L18.0301 18.2428C17.8961 17.707 18.2219 17.164 18.7577 17.0301Z',
  d8: 'M13.1621 7.33786C13.0743 7.25 12.9328 7.25 12.65 7.25L5.95189 7.25C5.05004 7.24997 4.30477 7.24996 3.71447 7.3221C3.09889 7.39734 2.53851 7.56192 2.08129 7.97758C1.61386 8.40251 1.41887 8.93946 1.3313 9.5316C1.24993 10.0818 1.24997 10.7713 1.25 11.5812L1.25 14.4189C1.24997 15.2288 1.24993 15.9182 1.3313 16.4684C1.41887 17.0605 1.61386 17.5975 2.08129 18.0224C2.53851 18.4381 3.09889 18.6027 3.71447 18.6779C4.30476 18.75 5.05005 18.75 5.95187 18.75H5.9519H12.65C12.9328 18.75 13.0743 18.75 13.1621 18.6621C13.25 18.5743 13.25 18.4328 13.25 18.15L13.25 7.85C13.25 7.56715 13.25 7.42573 13.1621 7.33786ZM14.8379 7.33786C14.75 7.42573 14.75 7.56715 14.75 7.85L14.75 18.15C14.75 18.4328 14.75 18.5743 14.8379 18.6621C14.9257 18.75 15.0672 18.75 15.35 18.75L18.0481 18.75H18.0482C18.95 18.75 19.6953 18.75 20.2855 18.6779C20.9011 18.6027 21.4615 18.4381 21.9187 18.0224C22.3862 17.5975 22.5811 17.0605 22.6687 16.4684C22.7501 15.9182 22.7501 15.2288 22.75 14.4189V14.4189V14.4188V14.4188V11.5811V11.5811V11.5811V11.5811C22.7501 10.7712 22.7501 10.0818 22.6687 9.5316C22.5811 8.93946 22.3862 8.40251 21.9187 7.97758C21.4615 7.56192 20.9011 7.39734 20.2855 7.3221C19.6953 7.24996 18.95 7.24997 18.0481 7.25H15.35C15.0672 7.25 14.9257 7.25 14.8379 7.33786ZM7 10.75C6.58579 10.75 6.25 11.0858 6.25 11.5C6.25 11.9142 6.58579 12.25 7 12.25H9C9.41422 12.25 9.75 11.9142 9.75 11.5C9.75 11.0858 9.41422 10.75 9 10.75L7 10.75ZM7 13.75C6.58579 13.75 6.25 14.0858 6.25 14.5C6.25 14.9142 6.58579 15.25 7 15.25H9C9.41422 15.25 9.75 14.9142 9.75 14.5C9.75 14.0858 9.41422 13.75 9 13.75H7Z',
  d9: 'M7.9384 1C7.95887 1.00001 7.97941 1.00001 8.00001 1.00001C8.02061 1.00001 8.04114 1.00001 8.06161 1C8.71574 0.999941 9.30346 0.999886 9.77916 1.06384C10.2985 1.13367 10.8313 1.2958 11.2678 1.73224C11.7042 2.16868 11.8663 2.70149 11.9362 3.22085C12.0001 3.69656 12.0001 4.28427 12 4.9384C12 4.95887 12 4.97941 12 5.00001C12 5.02061 12 5.04115 12 5.06162C12.0001 5.71574 12.0001 6.30346 11.9362 6.77916C11.8663 7.29852 11.7042 7.83134 11.2678 8.26777C10.8313 8.70421 10.2985 8.86635 9.77916 8.93617C9.30346 9.00013 8.71574 9.00007 8.06162 9.00001C8.04115 9.00001 8.02061 9.00001 8.00001 9.00001C7.97941 9.00001 7.95887 9.00001 7.9384 9.00001C7.28427 9.00007 6.69656 9.00013 6.22085 8.93617C5.70149 8.86635 5.16868 8.70421 4.73224 8.26778C4.2958 7.83134 4.13367 7.29852 4.06384 6.77916C3.99989 6.30346 3.99994 5.71574 4 5.06161C4.00001 5.04114 4.00001 5.02061 4.00001 5.00001C4.00001 4.97941 4.00001 4.95887 4 4.9384C3.99994 4.28428 3.99989 3.69656 4.06384 3.22085C4.13367 2.70149 4.2958 2.16868 4.73224 1.73224C5.16868 1.2958 5.70149 1.13367 6.22085 1.06384C6.69656 0.999886 7.28428 0.999941 7.9384 1ZM6.14692 3.14593C6.14671 3.14617 6.14656 3.14635 6.14645 3.14645C6.14635 3.14656 6.14617 3.14671 6.14593 3.14692C6.13942 3.15261 6.08457 3.2005 6.04601 3.48735C6.00213 3.8137 6.00001 4.26463 6.00001 5.00001C6.00001 5.73538 6.00213 6.18632 6.04601 6.51267C6.08457 6.79952 6.13943 6.84741 6.14593 6.85309C6.14617 6.8533 6.14635 6.85346 6.14645 6.85356C6.14656 6.85367 6.14671 6.85384 6.14692 6.85408C6.1526 6.86059 6.2005 6.91544 6.48735 6.95401C6.8137 6.99788 7.26463 7.00001 8.00001 7.00001C8.73538 7.00001 9.18632 6.99788 9.51267 6.95401C9.79951 6.91544 9.84741 6.86059 9.85309 6.85409C9.8533 6.85384 9.85346 6.85367 9.85356 6.85356C9.85367 6.85346 9.85384 6.8533 9.85409 6.85309C9.86059 6.84741 9.91544 6.79951 9.95401 6.51267C9.99788 6.18632 10 5.73538 10 5.00001C10 4.26463 9.99788 3.8137 9.95401 3.48735C9.91544 3.2005 9.86059 3.1526 9.85408 3.14692C9.85384 3.14671 9.85367 3.14656 9.85356 3.14645C9.85346 3.14635 9.8533 3.14617 9.85309 3.14593C9.84741 3.13943 9.79952 3.08457 9.51267 3.04601C9.18632 3.00213 8.73538 3.00001 8.00001 3.00001C7.26463 3.00001 6.8137 3.00213 6.48735 3.04601C6.2005 3.08457 6.15261 3.13942 6.14692 3.14593Z',
  d10: 'M14.75 7.85C14.75 7.56716 14.75 7.42574 14.8379 7.33787C14.9257 7.25 15.0672 7.25 15.35 7.25H18.0481C18.9499 7.24998 19.6952 7.24996 20.2855 7.32211C20.9011 7.39735 21.4615 7.56193 21.9187 7.97758C22.3862 8.40251 22.5811 8.93946 22.6687 9.5316C22.7501 10.0818 22.75 10.7712 22.75 11.5811V14.4188C22.75 15.2288 22.7501 15.9182 22.6687 16.4684C22.5811 17.0605 22.3862 17.5975 21.9187 18.0224C21.4615 18.4381 20.9011 18.6027 20.2855 18.6779C19.6953 18.75 18.95 18.75 18.0481 18.75H15.35C15.0672 18.75 14.9257 18.75 14.8379 18.6621C14.75 18.5743 14.75 18.4328 14.75 18.15L14.75 7.85Z',
  d11: 'M12.65 7.25C12.9328 7.25 13.0743 7.25 13.1621 7.33787C13.25 7.42574 13.25 7.56716 13.25 7.85L13.25 18.15C13.25 18.4328 13.25 18.5743 13.1621 18.6621C13.0743 18.75 12.9328 18.75 12.65 18.75H5.9519C5.05006 18.75 4.30476 18.75 3.71447 18.6779C3.09889 18.6027 2.53851 18.4381 2.08129 18.0224C1.61386 17.5975 1.41887 17.0605 1.3313 16.4684C1.24993 15.9182 1.24996 15.2288 1.25 14.4189V11.5812C1.24996 10.7713 1.24993 10.0818 1.3313 9.5316C1.41887 8.93946 1.61386 8.40251 2.08129 7.97758C2.53851 7.56193 3.09889 7.39735 3.71447 7.32211C4.30477 7.24996 5.05004 7.24998 5.95189 7.25H12.65Z',
  d12: 'M6.25 11.5C6.25 11.0858 6.58579 10.75 7 10.75H9C9.41421 10.75 9.75 11.0858 9.75 11.5C9.75 11.9142 9.41421 12.25 9 12.25H7C6.58579 12.25 6.25 11.9142 6.25 11.5ZM6.25 14.5C6.25 14.0858 6.58579 13.75 7 13.75H9C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 14.9142 9.41421 15.25 9 15.25H7C6.58579 15.25 6.25 14.9142 6.25 14.5Z',
  d13: 'M4.16616 7.28164C4.67141 7.24997 5.26642 7.24998 5.95189 7.25H11.8427C11.8856 7.09384 11.9151 6.93589 11.9362 6.77916C12.0001 6.30346 12.0001 5.71574 12 5.06162V4.9384C12.0001 4.28427 12.0001 3.69656 11.9362 3.22085C11.8663 2.70149 11.7042 2.16868 11.2678 1.73224C10.8313 1.2958 10.2985 1.13367 9.77916 1.06384C9.30346 0.999886 8.71574 0.999941 8.06161 1H7.9384C7.28428 0.999941 6.69656 0.999886 6.22085 1.06384C5.70149 1.13367 5.16868 1.2958 4.73224 1.73224C4.2958 2.16868 4.13367 2.70149 4.06384 3.22085C3.99989 3.69656 3.99994 4.28428 4 4.9384V5.06161C3.99994 5.71574 3.99989 6.30346 4.06384 6.77916C4.08634 6.94648 4.11841 7.1152 4.16616 7.28164ZM6.14692 3.14593C6.15261 3.13942 6.2005 3.08457 6.48735 3.04601C6.8137 3.00213 7.26463 3.00001 8.00001 3.00001C8.73538 3.00001 9.18632 3.00213 9.51267 3.04601C9.79952 3.08457 9.84741 3.13943 9.85309 3.14593L9.85408 3.14692C9.86059 3.1526 9.91544 3.2005 9.95401 3.48735C9.99788 3.8137 10 4.26463 10 5.00001C10 5.73538 9.99788 6.18632 9.95401 6.51267C9.91544 6.79951 9.86059 6.84741 9.85409 6.85309L9.85309 6.85409C9.84741 6.86059 9.79951 6.91544 9.51267 6.95401C9.18632 6.99788 8.73538 7.00001 8.00001 7.00001C7.26463 7.00001 6.8137 6.99788 6.48735 6.95401C6.2005 6.91544 6.1526 6.86059 6.14692 6.85408L6.14593 6.85309C6.13943 6.84741 6.08457 6.79952 6.04601 6.51267C6.00213 6.18632 6.00001 5.73538 6.00001 5.00001C6.00001 4.26463 6.00213 3.8137 6.04601 3.48735C6.08457 3.2005 6.13942 3.15261 6.14593 3.14692L6.14692 3.14593Z',
  d14: 'M5.84351 18.7501L4.97038 22.2426C4.83643 22.7784 4.2935 23.1042 3.7577 22.9702C3.22191 22.8363 2.89615 22.2933 3.03009 21.7575L3.79759 18.6875C4.34982 18.7475 5.03141 18.75 5.84351 18.7501Z',
  d15: 'M18.157 18.7501C18.9691 18.75 19.6507 18.7475 20.2029 18.6875L20.9704 21.7575C21.1043 22.2933 20.7786 22.8363 20.2428 22.9702C19.707 23.1042 19.164 22.7784 19.0301 22.2426L18.157 18.7501Z',
  d16: 'M2 18V8H22V18H2Z',
  d17: 'M6 11.5H10M6 14.5H10',
  d18: 'M11 2V8H5V2H11Z',
  d19: 'M3.0293 21.7649L4.0293 17.7649L5.96958 18.25L4.96958 22.25L3.0293 21.7649ZM19.0293 22.25L18.0293 18.25L19.9696 17.7649L20.9696 21.7649L19.0293 22.25Z',
  d20: 'M14.25 7.74976L14.25 19.2498H2C1.58579 19.2498 1.25 18.914 1.25 18.4998L1.25 8.49976C1.25 8.08554 1.58579 7.74976 2 7.74976L14.25 7.74976ZM22 7.74976H15.75L15.75 19.2498L22 19.2498C22.4142 19.2498 22.75 18.914 22.75 18.4998V8.49976C22.75 8.30084 22.671 8.11008 22.5303 7.96943C22.3897 7.82877 22.1989 7.74976 22 7.74976ZM6 12.7498H10L10 11.2498H6V12.7498ZM6 15.7498H10V14.2498H6L6 15.7498Z',
  d21: 'M4 1.74976H11.5V9.24976H4V1.74976ZM5.875 3.62476V7.37476H9.625V3.62476H5.875Z',
} as const;

export const IconCabinet04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-stroke-rounded IconCabinet04StrokeRounded"
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

export const IconCabinet04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-duotone-rounded IconCabinet04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconCabinet04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-twotone-rounded IconCabinet04TwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-solid-rounded IconCabinet04SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-bulk-rounded IconCabinet04BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-stroke-sharp IconCabinet04StrokeSharp"
    >
      <path 
        d={d.d16} 
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
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCabinet04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cabinet-04-solid-sharp IconCabinet04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCabinet04: TheIconSelfPack = {
  name: 'Cabinet04',
  StrokeRounded: IconCabinet04StrokeRounded,
  DuotoneRounded: IconCabinet04DuotoneRounded,
  TwotoneRounded: IconCabinet04TwotoneRounded,
  SolidRounded: IconCabinet04SolidRounded,
  BulkRounded: IconCabinet04BulkRounded,
  StrokeSharp: IconCabinet04StrokeSharp,
  SolidSharp: IconCabinet04SolidSharp,
};