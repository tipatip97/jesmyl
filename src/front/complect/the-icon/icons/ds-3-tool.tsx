import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.00572 18.0063C5.16174 15.5109 5.62111 13.6848 6.01036 12.6241C6.20688 12.0886 6.62968 11.6898 7.17097 11.5562C10.1746 10.8146 13.8254 10.8146 16.829 11.5562C17.3703 11.6898 17.7931 12.0886 17.9896 12.6241C18.3789 13.6848 18.8383 15.5109 18.9943 18.0063C19.0868 19.4855 18.0439 20.3148 16.8601 20.9233C16.5119 21.1023 16.0884 20.9572 15.9143 20.5992L15.0923 18.9089C14.9257 18.5662 14.5755 18.3484 14.1913 18.3484H9.80865C9.42452 18.3484 9.07434 18.5662 8.90771 18.9089L8.08569 20.5992C7.91158 20.9572 7.48815 21.1023 7.13993 20.9233C5.95613 20.3148 4.91323 19.4855 5.00572 18.0063Z',
  d2: 'M22 15V11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11V15',
  d3: 'M10.5 6H13.5',
  d4: 'M9.00801 15L8.99902 15',
  d5: 'M15.008 15L14.999 15',
  d6: 'M9.97395 2.25H14.026C15.8081 2.24997 17.2444 2.24995 18.3741 2.39982C19.547 2.55541 20.5345 2.88827 21.3188 3.66217C22.1031 4.43606 22.4405 5.41047 22.5982 6.56775C22.75 7.68243 22.75 9.0997 22.75 10.858V14.7857C22.75 15.3183 22.3125 15.75 21.7727 15.75C21.233 15.75 20.7955 15.3183 20.7955 14.7857V10.9286C20.7955 9.08304 20.7934 7.79589 20.6611 6.82473C20.5325 5.8813 20.2974 5.38171 19.9367 5.02587C19.5761 4.67003 19.0698 4.43803 18.1137 4.31119C17.1294 4.18062 15.8249 4.17857 13.9545 4.17857H10.0455C8.17506 4.17857 6.87058 4.18062 5.88634 4.31119C4.93021 4.43803 4.42389 4.67003 4.06326 5.02587C3.70263 5.38171 3.4675 5.8813 3.33895 6.82473C3.20662 7.79589 3.20455 9.08304 3.20455 10.9286V14.7857C3.20455 15.3183 2.76701 15.75 2.22727 15.75C1.68754 15.75 1.25 15.3183 1.25 14.7857L1.25 10.858C1.24997 9.09969 1.24995 7.68242 1.40183 6.56775C1.55952 5.41047 1.89687 4.43606 2.68118 3.66217C3.4655 2.88827 4.45303 2.55541 5.6259 2.39982C6.75559 2.24995 8.19194 2.24997 9.97395 2.25Z',
  d7: 'M9.5 6.5C9.5 5.94772 9.94772 5.5 10.5 5.5H13.5C14.0523 5.5 14.5 5.94772 14.5 6.5C14.5 7.05228 14.0523 7.5 13.5 7.5H10.5C9.94772 7.5 9.5 7.05228 9.5 6.5Z',
  d8: 'M17.009 10.8281C13.8872 10.0573 10.1131 10.0573 6.99138 10.8281C6.19017 11.0259 5.58227 11.6142 5.30646 12.3657C4.88997 13.5007 4.41748 15.3987 4.25737 17.9595C4.13443 19.9257 5.57378 20.9614 6.79721 21.5903C7.5304 21.9673 8.40759 21.6526 8.76035 20.9272L9.58237 19.2369C9.62216 19.1551 9.70876 19.0984 9.80884 19.0984H14.1915C14.2916 19.0984 14.3782 19.1551 14.418 19.2369L15.24 20.9272C15.5928 21.6526 16.47 21.9673 17.2032 21.5903C18.4266 20.9614 19.8659 19.9257 19.743 17.9595C19.5829 15.3987 19.1104 13.5007 18.6939 12.3657C18.4181 11.6142 17.8102 11.0259 17.009 10.8281ZM10.2578 15C10.2578 15.6904 9.69817 16.25 9.00781 16.25H8.99883C8.30847 16.25 7.74883 15.6904 7.74883 15C7.74883 14.3096 8.30848 13.75 8.99883 13.75H9.00781C9.69817 13.75 10.2578 14.3096 10.2578 15ZM16.2578 15C16.2578 15.6904 15.6982 16.25 15.0078 16.25H14.9988C14.3085 16.25 13.7488 15.6904 13.7488 15C13.7488 14.3096 14.3085 13.75 14.9988 13.75H15.0078C15.6982 13.75 16.2578 14.3096 16.2578 15Z',
  d9: 'M6.99138 10.8281C10.1131 10.0573 13.8872 10.0573 17.009 10.8281C17.8102 11.0259 18.4181 11.6142 18.6939 12.3657C19.1104 13.5007 19.5829 15.3987 19.743 17.9595C19.8659 19.9257 18.4266 20.9614 17.2032 21.5903C16.47 21.9673 15.5928 21.6526 15.24 20.9272L14.418 19.2369C14.3782 19.1551 14.2916 19.0984 14.1915 19.0984H9.80884C9.70876 19.0984 9.62216 19.1551 9.58237 19.2369L8.76035 20.9272C8.40759 21.6526 7.5304 21.9673 6.79721 21.5903C5.57378 20.9614 4.13443 19.9257 4.25737 17.9595C4.41748 15.3987 4.88997 13.5007 5.30646 12.3657C5.58227 11.6142 6.19017 11.0259 6.99138 10.8281Z',
  d10: 'M9.00776 16.25C9.69812 16.25 10.2578 15.6904 10.2578 15C10.2578 14.3096 9.69812 13.75 9.00776 13.75H8.99878C8.30842 13.75 7.74878 14.3096 7.74878 15C7.74878 15.6904 8.30842 16.25 8.99878 16.25H9.00776ZM15.0078 16.25C15.6981 16.25 16.2578 15.6904 16.2578 15C16.2578 14.3096 15.6981 13.75 15.0078 13.75H14.9988C14.3084 13.75 13.7488 14.3096 13.7488 15C13.7488 15.6904 14.3084 16.25 14.9988 16.25H15.0078Z',
  d11: 'M5.00312 18.0063C5.1592 15.5109 5.61873 13.6848 6.00812 12.6241C6.20471 12.0886 6.62766 11.6898 7.16915 11.5562C10.1739 10.8146 13.826 10.8146 16.8307 11.5562C17.3722 11.6898 17.7952 12.0886 17.9917 12.6241C18.3811 13.6848 18.8407 15.5109 18.9967 18.0063C19.0893 19.4855 17.1856 20.3914 16.0014 21L14.5015 18.3484H9.49968L8.08485 21C6.90063 20.3914 4.9106 19.4855 5.00312 18.0063Z',
  d12: 'M22 15V3H2V15',
  d13: 'M1.25 3.71154C1.25 3.1805 1.68754 2.75 2.22727 2.75H21.7727C22.3125 2.75 22.75 3.1805 22.75 3.71154V15.25H20.7955V4.67308H3.20455V15.25H1.25V3.71154Z',
  d14: 'M13.5 8H10.5V6H13.5V8Z',
  d15: 'M17.0105 10.0778C13.8877 9.3074 10.1124 9.3074 6.98956 10.0778C6.18823 10.2755 5.58012 10.8634 5.30418 11.6148C4.88753 12.7493 4.41487 14.6465 4.25469 17.2063C4.18433 18.3308 4.91752 19.1392 5.60816 19.67C6.22122 20.1412 6.96475 20.518 7.51524 20.7969L7.51674 20.7977C7.59624 20.838 7.67171 20.8762 7.74217 20.9124L8.39902 21.2498L9.9497 18.3447H14.0642L15.7034 21.2416L16.3443 20.9124C16.3944 20.8866 16.4468 20.8599 16.5011 20.8322C17.0595 20.5472 17.8219 20.1581 18.4451 19.6623C19.1221 19.1235 19.8149 18.3163 19.7454 17.2063C19.5852 14.6465 19.1126 12.7493 18.6959 11.6148C18.42 10.8634 17.8119 10.2755 17.0105 10.0778ZM9.00703 15.2477C9.55931 15.2477 10.007 14.8002 10.007 14.2481C10.007 13.6961 9.55931 13.2485 9.00703 13.2485H8.99805C8.44576 13.2485 7.99805 13.6961 7.99805 14.2481C7.99805 14.8002 8.44576 15.2477 8.99805 15.2477H9.00703ZM15.007 15.2477C15.5593 15.2477 16.007 14.8002 16.007 14.2481C16.007 13.6961 15.5593 13.2485 15.007 13.2485H14.998C14.4458 13.2485 13.998 13.6961 13.998 14.2481C13.998 14.8002 14.4458 15.2477 14.998 15.2477H15.007Z',
} as const;

export const IconDs3ToolStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-stroke-rounded IconDs3ToolStrokeRounded"
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

export const IconDs3ToolDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-duotone-rounded IconDs3ToolDuotoneRounded"
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

export const IconDs3ToolTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-twotone-rounded IconDs3ToolTwotoneRounded"
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

export const IconDs3ToolSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-solid-rounded IconDs3ToolSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconDs3ToolBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-bulk-rounded IconDs3ToolBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDs3ToolStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-stroke-sharp IconDs3ToolStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
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

export const IconDs3ToolSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ds-3-tool-solid-sharp IconDs3ToolSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfDs3Tool: TheIconSelfPack = {
  name: 'Ds3Tool',
  StrokeRounded: IconDs3ToolStrokeRounded,
  DuotoneRounded: IconDs3ToolDuotoneRounded,
  TwotoneRounded: IconDs3ToolTwotoneRounded,
  SolidRounded: IconDs3ToolSolidRounded,
  BulkRounded: IconDs3ToolBulkRounded,
  StrokeSharp: IconDs3ToolStrokeSharp,
  SolidSharp: IconDs3ToolSolidSharp,
};