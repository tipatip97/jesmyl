import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 9V13M12 13H9C7.11438 13 6.17157 13 5.58579 13.5858C5 14.1716 5 15.1144 5 17M12 13H15C16.8856 13 17.8284 13 18.4142 13.5858C19 14.1716 19 15.1144 19 17',
  d2: 'M2.00866 21C2 20.7125 2 20.3821 2 20C2 18.5858 2 17.8787 2.43934 17.4393C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.4393C8 17.8787 8 18.5858 8 20C8 20.3821 8 20.7125 7.99134 21',
  d3: 'M16.0087 21C16 20.7125 16 20.3821 16 20C16 18.5858 16 17.8787 16.4393 17.4393C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.4393C22 17.8787 22 18.5858 22 20C22 20.3821 22 20.7125 21.9913 21',
  d4: 'M10.2857 3H13.7143C15.7888 3 16 4.10993 16 6C16 7.89007 15.7888 9 13.7143 9H10.2857C8.2112 9 8 7.89007 8 6C8 4.10993 8.2112 3 10.2857 3Z',
  d5: 'M12 7.875C12.5523 7.875 13 8.32272 13 8.875V11.875L15.0658 11.875C15.9523 11.8749 16.7161 11.8749 17.3278 11.9571C17.9833 12.0453 18.6117 12.244 19.1213 12.7537C19.631 13.2633 19.8297 13.8917 19.9179 14.5472C20.0001 15.1589 20.0001 15.9227 20 16.8092L20 16.875C20 17.4273 19.5523 17.875 19 17.875C18.4477 17.875 18 17.4273 18 16.875C18 15.9039 17.9979 15.2762 17.9357 14.8137C17.8774 14.38 17.7832 14.244 17.7071 14.1679C17.631 14.0918 17.495 13.9976 17.0613 13.9393C16.5988 13.8771 15.9711 13.875 15 13.875H9C8.02893 13.875 7.40122 13.8771 6.93871 13.9393C6.50497 13.9976 6.36902 14.0918 6.2929 14.1679C6.21677 14.244 6.12263 14.38 6.06431 14.8137C6.00213 15.2762 6 15.9039 6 16.875C6 17.4273 5.55229 17.875 5 17.875C4.44772 17.875 4 17.4273 4 16.875L4 16.8092C3.99995 15.9227 3.99991 15.1589 4.08215 14.5472C4.17028 13.8917 4.36902 13.2633 4.87868 12.7537C5.38835 12.244 6.0167 12.0453 6.67221 11.9571C7.28387 11.8749 8.04769 11.8749 8.93417 11.875C8.95604 11.875 8.97799 11.875 9 11.875H11V8.875C11 8.32272 11.4477 7.875 12 7.875Z',
  d6: 'M4.9384 15.875C4.95887 15.875 4.97941 15.875 5.00001 15.875C5.02061 15.875 5.04114 15.875 5.06161 15.875C5.71574 15.8749 6.30346 15.8749 6.77916 15.9388C7.29852 16.0087 7.83134 16.1708 8.26777 16.6072C8.70421 17.0437 8.86635 17.5765 8.93617 18.0959C9.00013 18.5716 9.00007 19.1593 9.00001 19.8134C9.00001 19.8339 9.00001 19.8544 9.00001 19.875V19.8864C9.00001 20.2594 9.00001 20.6025 8.99089 20.9051C8.97426 21.4572 8.51326 21.8912 7.96123 21.8746C7.4092 21.8579 6.97517 21.3969 6.9918 20.8449C6.99991 20.5756 7.00001 20.2617 7.00001 19.875C7.00001 19.1396 6.99788 18.6887 6.95401 18.3623C6.91544 18.0755 6.86059 18.0276 6.85409 18.0219C6.85384 18.0217 6.85367 18.0216 6.85356 18.0215C6.85346 18.0213 6.8533 18.0212 6.85309 18.0209C6.84741 18.0144 6.79951 17.9596 6.51267 17.921C6.18632 17.8771 5.73538 17.875 5.00001 17.875C4.26463 17.875 3.8137 17.8771 3.48735 17.921C3.2005 17.9596 3.15261 18.0144 3.14692 18.0209C3.14671 18.0212 3.14656 18.0213 3.14645 18.0215C3.14635 18.0216 3.14617 18.0217 3.14593 18.0219C3.13942 18.0276 3.08457 18.0755 3.04601 18.3623C3.00213 18.6887 3.00001 19.1396 3.00001 19.875C3.00001 20.2617 3.0001 20.5756 3.00822 20.8449C3.02485 21.3969 2.59082 21.8579 2.03878 21.8746C1.48675 21.8912 1.02576 21.4572 1.00912 20.9051C1.00001 20.6025 1.00001 20.2595 1.00001 19.8864V19.875C1.00001 19.8544 1.00001 19.8339 1 19.8134C0.999941 19.1593 0.999886 18.5716 1.06384 18.0959C1.13367 17.5765 1.2958 17.0437 1.73224 16.6072C2.16868 16.1708 2.70149 16.0087 3.22085 15.9388C3.69656 15.8749 4.28428 15.8749 4.9384 15.875Z',
  d7: 'M18.9384 15.875C18.9589 15.875 18.9794 15.875 19 15.875C19.0206 15.875 19.0411 15.875 19.0616 15.875C19.7157 15.8749 20.3035 15.8749 20.7792 15.9388C21.2985 16.0087 21.8313 16.1708 22.2678 16.6072C22.7042 17.0437 22.8663 17.5765 22.9362 18.0959C23.0001 18.5716 23.0001 19.1593 23 19.8134C23 19.8339 23 19.8544 23 19.875V19.8864C23 20.2594 23 20.6025 22.9909 20.9051C22.9743 21.4572 22.5133 21.8912 21.9612 21.8746C21.4092 21.8579 20.9752 21.3969 20.9918 20.8449C20.9999 20.5756 21 20.2617 21 19.875C21 19.1396 20.9979 18.6887 20.954 18.3623C20.9154 18.0755 20.8606 18.0276 20.8541 18.0219C20.8538 18.0217 20.8537 18.0216 20.8536 18.0215C20.8535 18.0213 20.8533 18.0212 20.8531 18.0209C20.8474 18.0144 20.7995 17.9596 20.5127 17.921C20.1863 17.8771 19.7354 17.875 19 17.875C18.2646 17.875 17.8137 17.8771 17.4873 17.921C17.2005 17.9596 17.1526 18.0144 17.1469 18.0209C17.1467 18.0212 17.1466 18.0213 17.1465 18.0215C17.1463 18.0216 17.1462 18.0217 17.1459 18.0219C17.1394 18.0276 17.0846 18.0755 17.046 18.3623C17.0021 18.6887 17 19.1396 17 19.875C17 20.2617 17.0001 20.5756 17.0082 20.8449C17.0248 21.3969 16.5908 21.8579 16.0388 21.8746C15.4868 21.8912 15.0258 21.4572 15.0091 20.9051C15 20.6025 15 20.2595 15 19.8864V19.875C15 19.8544 15 19.8339 15 19.8134C14.9999 19.1593 14.9999 18.5716 15.0638 18.0959C15.1337 17.5765 15.2958 17.0437 15.7322 16.6072C16.1687 16.1708 16.7015 16.0087 17.2209 15.9388C17.6966 15.8749 18.2843 15.8749 18.9384 15.875Z',
  d8: 'M7.72393 3.27681C8.22979 2.44416 9.12113 2.125 10.2857 2.125H13.7143C14.8789 2.125 15.7702 2.44416 16.2761 3.27681C16.7139 3.99749 16.75 4.96266 16.75 5.875C16.75 6.78734 16.7139 7.75251 16.2761 8.47319C15.7702 9.30584 14.8789 9.625 13.7143 9.625H10.2857C9.12113 9.625 8.22979 9.30584 7.72393 8.47319C7.2861 7.75251 7.25 6.78734 7.25 5.875C7.25 4.96266 7.2861 3.99749 7.72393 3.27681Z',
  d9: 'M10.9999 9.625V11.875L8.93405 11.875C8.04757 11.8749 7.28374 11.8749 6.67209 11.9571C6.01657 12.0453 5.38822 12.244 4.87856 12.7537C4.3689 13.2633 4.17015 13.8917 4.08202 14.5472C4.03 14.9341 4.0109 15.3819 4.00391 15.8832C4.29451 15.8749 4.60792 15.875 4.93828 15.875H5.06149C5.39505 15.875 5.71133 15.8749 6.00431 15.8834C6.01071 15.4386 6.0263 15.0955 6.06419 14.8137C6.1225 14.38 6.21665 14.244 6.29277 14.1679C6.3689 14.0918 6.50484 13.9976 6.93858 13.9393C7.40109 13.8771 8.0288 13.875 8.99988 13.875H14.9999C15.971 13.875 16.5987 13.8771 17.0612 13.9393C17.4949 13.9976 17.6309 14.0918 17.707 14.1679C17.7831 14.244 17.8773 14.38 17.9356 14.8137C17.9735 15.0955 17.9891 15.4386 17.9955 15.8834C18.2884 15.8749 18.6047 15.875 18.9383 15.875H19.0615C19.3918 15.875 19.7053 15.8749 19.9959 15.8832C19.9889 15.3819 19.9698 14.9341 19.9177 14.5472C19.8296 13.8917 19.6309 13.2633 19.1212 12.7537C18.6115 12.244 17.9832 12.0453 17.3277 11.9571C16.716 11.8749 15.9522 11.8749 15.0657 11.875L12.9999 11.875V9.625H10.9999Z',
  d10: 'M2.00778 21L2 17H7.99912L7.99046 21',
  d11: 'M12 9V13M12 13H5.0014L5 17M12 13H19V17',
  d12: 'M16.0078 21L16 17H21.9991L21.9905 21',
  d13: 'M16 9V3H8V9H16Z',
  d14: 'M1.29221 16.2936C1.4798 16.1056 1.73445 16 2 16H7.99912C8.26471 16 8.51939 16.1057 8.70699 16.2937C8.89459 16.4817 8.99969 16.7366 8.99912 17.0022L8.99046 21.0022L6.99046 20.9978L6.99695 18H3.00195L3.00778 20.9981L1.00779 21.0019L1 17.0019C0.999485 16.7364 1.10461 16.4815 1.29221 16.2936Z',
  d15: 'M11 12V9H13V12H19C19.5523 12 20 12.4477 20 13V17H18V14H6.00105L6 17.0003L4 16.9997L4.0014 12.9997C4.00159 12.4475 4.44925 12 5.0014 12H11Z',
  d16: 'M15.2922 16.2936C15.4798 16.1056 15.7344 16 16 16H21.9991C22.2647 16 22.5194 16.1057 22.707 16.2937C22.8946 16.4817 22.9997 16.7366 22.9991 17.0022L22.9905 21.0022L20.9905 20.9978L20.997 18H17.0019L17.0078 20.9981L15.0078 21.0019L15 17.0019C14.9995 16.7364 15.1046 16.4815 15.2922 16.2936Z',
  d17: 'M7.25 3C7.25 2.58579 7.58579 2.25 8 2.25H16C16.4142 2.25 16.75 2.58579 16.75 3V9C16.75 9.41421 16.4142 9.75 16 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9V3Z',
};

export const IconStructure01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-stroke-rounded IconStructure01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStructure01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-duotone-rounded IconStructure01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconStructure01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-twotone-rounded IconStructure01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconStructure01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-solid-rounded IconStructure01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-bulk-rounded IconStructure01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStructure01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-stroke-sharp IconStructure01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStructure01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-01-solid-sharp IconStructure01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructure01: TheIconSelfPack = {
  name: 'Structure01',
  StrokeRounded: IconStructure01StrokeRounded,
  DuotoneRounded: IconStructure01DuotoneRounded,
  TwotoneRounded: IconStructure01TwotoneRounded,
  SolidRounded: IconStructure01SolidRounded,
  BulkRounded: IconStructure01BulkRounded,
  StrokeSharp: IconStructure01StrokeSharp,
  SolidSharp: IconStructure01SolidSharp,
};