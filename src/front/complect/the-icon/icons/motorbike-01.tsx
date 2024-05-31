import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.416 18C14.1484 17.3875 14 16.7111 14 16C14 13.2386 16.2386 11 19 11C19.3425 11 19.6769 11.0344 20 11.1',
  d2: 'M6.43023 9.62979H8.15662C8.61216 9.62979 9.05405 9.47428 9.40918 9.18898L11.2373 7.7204C11.4148 7.57776 11.6358 7.5 11.8636 7.5H15L12.2843 12.4789C12.109 12.8001 11.7723 13 11.4064 13H9.5M6.43023 9.62979H4M6.43023 9.62979L9.5 13M9.5 13L7 16',
  d3: 'M17 11L13.9923 5.73649C13.5873 5.02784 13.3849 4.67352 13.0835 4.43408C12.9313 4.31313 12.7622 4.21503 12.5817 4.14287C12.2243 4 11.8162 4 11 4',
  d4: 'M11.2367 7.7204C11.4143 7.57776 11.6352 7.5 11.863 7.5H14.9995L12.2837 12.4789C12.1085 12.8001 11.7718 13 11.4058 13H9.49945L6.42969 9.62979H8.15607C8.61161 9.62979 9.0535 9.47428 9.40864 9.18898L11.2367 7.7204Z',
  d5: 'M19.5 19C20.8807 19 22 17.8807 22 16.5C22 15.1193 20.8807 14 19.5 14C18.1193 14 17 15.1193 17 16.5C17 17.8807 18.1193 19 19.5 19Z',
  d6: 'M4.5 19C5.88071 19 7 17.8807 7 16.5C7 15.1193 5.88071 14 4.5 14C3.11929 14 2 15.1193 2 16.5C2 17.8807 3.11929 19 4.5 19Z',
  d7: 'M4 9.62979H6.43023H8.15662C8.61216 9.62979 9.05405 9.47428 9.40918 9.18898L11.2373 7.7204C11.4148 7.57776 11.6358 7.5 11.8636 7.5H15L12.2843 12.4789C12.109 12.8001 11.7723 13 11.4064 13H9.5L7 16M17 11L13.9923 5.73649C13.5873 5.02784 13.3849 4.67352 13.0835 4.43408C12.9313 4.31313 12.7622 4.21503 12.5817 4.14287C12.2243 4 11.8162 4 11 4',
  d8: 'M6.30371 9.76953L9.5354 13.0007',
  d9: 'M19.5 15.5C18.6716 15.5 18 16.1716 18 17C18 17.8284 18.6716 18.5 19.5 18.5C20.3284 18.5 21 17.8284 21 17C21 16.1716 20.3284 15.5 19.5 15.5ZM16 17C16 15.067 17.567 13.5 19.5 13.5C21.433 13.5 23 15.067 23 17C23 18.933 21.433 20.5 19.5 20.5C17.567 20.5 16 18.933 16 17Z',
  d10: 'M11 5.50028C11.8989 5.50028 12.0743 5.51724 12.2105 5.57171C12.3008 5.60779 12.3853 5.65684 12.4614 5.71732C12.5763 5.80861 12.678 5.9524 13.124 6.7329L13.2768 7.00028H11.8636C11.408 7.00028 10.9661 7.15579 10.611 7.44109L8.7829 8.90967C8.60533 9.05231 8.38439 9.13007 8.15662 9.13007H4C3.44772 9.13007 3 9.57779 3 10.1301C3 10.6824 3.44772 11.1301 4 11.1301H5.98844L8.17395 13.5295L7.16876 14.7357C6.52676 13.9799 5.56939 13.5003 4.5 13.5003C2.567 13.5003 1 15.0673 1 17.0003C1 18.9333 2.567 20.5003 4.5 20.5003C6.433 20.5003 8 18.9333 8 17.0003C8 16.9551 7.99914 16.9101 7.99745 16.8654L9.96837 14.5003H11.4064C12.1383 14.5003 12.8117 14.1005 13.1622 13.458L15.0203 10.0514L15.8034 11.4218C14.119 12.4843 13 14.3616 13 16.5003C13 17.3518 13.178 18.1643 13.4997 18.9006C13.7208 19.4067 14.3103 19.6377 14.8164 19.4166C15.3225 19.1955 15.5535 18.606 15.3324 18.0999C15.1189 17.6113 15 17.071 15 16.5003C15 14.2911 16.7909 12.5003 19 12.5003C19.2753 12.5003 19.5431 12.5279 19.8011 12.5803C20.3423 12.6902 20.8701 12.3405 20.98 11.7992C21.0899 11.258 20.7402 10.7301 20.1989 10.6203C19.8107 10.5415 19.4097 10.5003 19 10.5003C18.5413 10.5003 18.0946 10.5517 17.6654 10.6492L14.8605 5.74062L14.7908 5.61837C14.4568 5.03174 14.162 4.514 13.7056 4.15139C13.4772 3.96998 13.2237 3.82282 12.9529 3.71458C12.4116 3.49823 11.8158 3.49912 11.1407 3.50014L11 3.50028C10.4477 3.50028 10 3.94799 10 4.50028C10 5.05256 10.4477 5.50028 11 5.50028ZM3 17.0005C3 16.1721 3.67157 15.5005 4.5 15.5005C5.32843 15.5005 6 16.1721 6 17.0005C6 17.8289 5.32843 18.5005 4.5 18.5005C3.67157 18.5005 3 17.8289 3 17.0005Z',
  d11: 'M4.5 15.5C3.67157 15.5 3 16.1716 3 17C3 17.8284 3.67157 18.5 4.5 18.5C5.32843 18.5 6 17.8284 6 17C6 16.1716 5.32843 15.5 4.5 15.5ZM1 17C1 15.067 2.567 13.5 4.5 13.5C6.433 13.5 8 15.067 8 17C8 18.933 6.433 20.5 4.5 20.5C2.567 20.5 1 18.933 1 17Z',
  d12: 'M6.49902 9.5H9.00005L11.5001 7.5H15.0001L11.999 13H9.50005M6.49902 9.5H3.99902M6.49902 9.5L9.50005 13M9.50005 13L6.49902 15.5',
  d13: 'M17 11L13 4L11 4.00002',
  d14: 'M19 12.5C16.7909 12.5 15 14.2909 15 16.5C15 17.0707 15.1189 17.611 15.3324 18.0996L13.4997 18.9004C13.178 18.164 13 17.3515 13 16.5C13 13.1863 15.6863 10.5 19 10.5C19.4097 10.5 19.8107 10.5412 20.1989 10.62L19.8011 12.58C19.5431 12.5277 19.2753 12.5 19 12.5Z',
  d15: 'M10.8754 7.21913C11.0527 7.07728 11.273 7 11.5001 7H15.0001C15.353 7 15.6798 7.18607 15.86 7.4896C16.0401 7.79312 16.0469 8.16914 15.8779 8.47898L12.8769 13.979C12.7016 14.3002 12.3649 14.5 11.999 14.5H9.86201L7.13908 16.7683L5.85897 15.2317L8.08066 13.3809L6.03919 11H3.99902V9H8.64927L10.8754 7.21913Z',
  d16: 'M12.4197 5.50001L11 5.50002L11 3.50002L13 3.5C13.3589 3.5 13.6902 3.69228 13.8683 4.00386L17.8683 11.0039L16.1318 11.9962L12.4197 5.50001Z',
} as const;

export const IconMotorbike01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-stroke-rounded IconMotorbike01StrokeRounded"
    >
      <circle 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconMotorbike01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-duotone-rounded IconMotorbike01DuotoneRounded"
    >
      <circle 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconMotorbike01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-twotone-rounded IconMotorbike01TwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-solid-rounded IconMotorbike01SolidRounded"
    >
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

export const IconMotorbike01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-bulk-rounded IconMotorbike01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMotorbike01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-stroke-sharp IconMotorbike01StrokeSharp"
    >
      <circle 
        cx="19.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="16.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconMotorbike01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="motorbike-01-solid-sharp IconMotorbike01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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
        d={d.d11} 
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

export const iconPackOfMotorbike01: TheIconSelfPack = {
  name: 'Motorbike01',
  StrokeRounded: IconMotorbike01StrokeRounded,
  DuotoneRounded: IconMotorbike01DuotoneRounded,
  TwotoneRounded: IconMotorbike01TwotoneRounded,
  SolidRounded: IconMotorbike01SolidRounded,
  BulkRounded: IconMotorbike01BulkRounded,
  StrokeSharp: IconMotorbike01StrokeSharp,
  SolidSharp: IconMotorbike01SolidSharp,
};