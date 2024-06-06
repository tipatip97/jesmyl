import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 4.5C18 5.88071 16.8807 7 15.5 7C14.1193 7 13 5.88071 13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5Z',
  d2: 'M18 19.5C18 20.8807 16.8807 22 15.5 22C14.1193 22 13 20.8807 13 19.5C13 18.1193 14.1193 17 15.5 17C16.8807 17 18 18.1193 18 19.5Z',
  d3: 'M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z',
  d4: 'M22 4.50012L18 4.50003M6 7.99994C6 6.59548 6 5.89325 6.33706 5.3888C6.48298 5.17042 6.67048 4.98292 6.88886 4.837C7.39331 4.49994 8.09554 4.49994 9.5 4.49994H13M22 19.5002L18 19.5001M6 16.0002C6 17.4047 6 18.1069 6.33706 18.6114C6.48298 18.8298 6.67048 19.0173 6.88886 19.1632C7.39331 19.5002 8.09554 19.5002 9.5 19.5002H13',
  d5: 'M12.125 4.5C12.125 2.70507 13.5801 1.25 15.375 1.25C17.1699 1.25 18.625 2.70507 18.625 4.5C18.625 6.29493 17.1699 7.75 15.375 7.75C13.5801 7.75 12.125 6.29493 12.125 4.5Z',
  d6: 'M12.125 19.5C12.125 17.7051 13.5801 16.25 15.375 16.25C17.1699 16.25 18.625 17.7051 18.625 19.5C18.625 21.2949 17.1699 22.75 15.375 22.75C13.5801 22.75 12.125 21.2949 12.125 19.5Z',
  d7: 'M1.125 12C1.125 9.37665 3.25165 7.25 5.875 7.25C8.49835 7.25 10.625 9.37665 10.625 12C10.625 14.6234 8.49835 16.75 5.875 16.75C3.25165 16.75 1.125 14.6234 1.125 12Z',
  d8: 'M9.32644 3.49988C9.34258 3.49988 9.35876 3.49988 9.375 3.49988H12.875C13.4273 3.49988 13.875 3.9476 13.875 4.49988C13.875 5.05217 13.4273 5.49988 12.875 5.49988H9.375C8.65196 5.49988 8.18495 5.50109 7.83313 5.53688C7.49803 5.57097 7.37996 5.62797 7.31943 5.66841C7.21024 5.74137 7.11649 5.83512 7.04353 5.94431C7.00309 6.00484 6.94609 6.12291 6.912 6.45801C6.87621 6.80983 6.875 7.27684 6.875 7.99988C6.875 8.55217 6.42729 8.99988 5.875 8.99988C5.32272 8.99988 4.875 8.55217 4.875 7.99988C4.875 7.98364 4.875 7.96745 4.875 7.95132C4.87497 7.29058 4.87495 6.72077 4.92227 6.2556C4.97245 5.76236 5.08398 5.27709 5.38059 4.83317C5.59947 4.5056 5.88072 4.22435 6.20829 4.00547C6.65221 3.70885 7.13748 3.59732 7.63072 3.54715C8.09589 3.49983 8.6657 3.49985 9.32644 3.49988ZM16.875 4.49995C16.875 3.94766 17.3227 3.49996 17.875 3.49997L21.875 3.50006C22.4273 3.50007 22.875 3.9478 22.875 4.50008C22.875 5.05237 22.4273 5.50007 21.875 5.50006L17.875 5.49997C17.3227 5.49996 16.875 5.05223 16.875 4.49995ZM5.875 15.0002C6.42729 15.0002 6.875 15.4479 6.875 16.0002C6.875 16.7232 6.87621 17.1902 6.912 17.542C6.94609 17.8772 7.00309 17.9952 7.04353 18.0557C7.11649 18.1649 7.21024 18.2587 7.31943 18.3316C7.37996 18.3721 7.49803 18.4291 7.83313 18.4632C8.18495 18.499 8.65196 18.5002 9.375 18.5002H12.875C13.4273 18.5002 13.875 18.9479 13.875 19.5002C13.875 20.0525 13.4273 20.5002 12.875 20.5002H9.32643C8.66569 20.5002 8.09589 20.5002 7.63072 20.4529C7.13748 20.4027 6.65221 20.2912 6.20829 19.9946C5.88072 19.7757 5.59947 19.4945 5.38059 19.1669C5.08398 18.723 4.97245 18.2377 4.92227 17.7445C4.87495 17.2793 4.87497 16.7095 4.875 16.0487L4.875 16.0002C4.875 15.4479 5.32272 15.0002 5.875 15.0002ZM16.875 19.5001C16.875 18.9478 17.3227 18.5001 17.875 18.5001L21.875 18.5002C22.4273 18.5002 22.875 18.9479 22.875 19.5002C22.875 20.0525 22.4273 20.5002 21.875 20.5002L17.875 20.5001C17.3227 20.5001 16.875 20.0523 16.875 19.5001Z',
  d9: 'M18.4687 5.50011C18.5705 5.18505 18.6255 4.84895 18.6255 4.5C18.6255 4.15114 18.5705 3.81511 18.4688 3.50011L21.8755 3.50018C22.4278 3.5002 22.8755 3.94792 22.8755 4.50021C22.8755 5.05249 22.4278 5.5002 21.8755 5.50018L18.4687 5.50011Z',
  d10: 'M12.2823 3.5C12.1805 3.81503 12.1255 4.1511 12.1255 4.5C12.1255 4.84891 12.1805 5.18497 12.2823 5.5H9.37551C8.65246 5.5 8.18545 5.50121 7.83364 5.537C7.49853 5.57109 7.38046 5.62809 7.31994 5.66853C7.21075 5.74149 7.11699 5.83524 7.04404 5.94443C7.00359 6.00496 6.94659 6.12303 6.9125 6.45813C6.88867 6.69241 6.88017 6.97777 6.87716 7.3558C6.55424 7.28649 6.21913 7.25 5.8755 7.25C5.53298 7.25 5.19892 7.28626 4.87695 7.35514C4.88015 6.94246 4.89034 6.57452 4.92277 6.25572C4.97295 5.76248 5.08448 5.27721 5.3811 4.83329C5.59997 4.50572 5.88122 4.22447 6.2088 4.0056C6.65272 3.70898 7.13798 3.59745 7.63122 3.54727C8.09638 3.49995 8.66617 3.49997 9.3269 3.5L12.2823 3.5Z',
  d11: 'M4.87695 16.6449C4.88015 17.0577 4.89033 17.4257 4.92277 17.7446C4.97295 18.2378 5.08448 18.7231 5.3811 19.167C5.59997 19.4946 5.88122 19.7758 6.2088 19.9947C6.65272 20.2913 7.13798 20.4029 7.63122 20.453C8.09639 20.5004 8.66619 20.5003 9.32693 20.5003H12.2823C12.1805 20.1852 12.1255 19.849 12.1255 19.5C12.1255 19.1512 12.1804 18.8152 12.2822 18.5003H9.37551C8.65246 18.5003 8.18545 18.4991 7.83364 18.4633C7.49853 18.4292 7.38046 18.3722 7.31994 18.3318C7.21075 18.2588 7.11699 18.1651 7.04404 18.0559C7.00359 17.9953 6.94659 17.8773 6.9125 17.5422C6.88866 17.3078 6.88017 17.0224 6.87716 16.6442C6.55424 16.7135 6.21913 16.75 5.8755 16.75C5.53298 16.75 5.19892 16.7137 4.87695 16.6449Z',
  d12: 'M18.4687 20.5002C18.5705 20.1851 18.6255 19.849 18.6255 19.5C18.6255 19.1512 18.5705 18.8152 18.4688 18.5002L21.8755 18.5003C22.4278 18.5003 22.8755 18.948 22.8755 19.5003C22.8755 20.0526 22.4278 20.5003 21.8755 20.5003L18.4687 20.5002Z',
  d13: 'M22.0001 4.50006L18.0001 4.49997M6.00008 7.99988L5.99984 4.50006L13.0001 4.49988M22.0001 19.5002L18.0001 19.5001M6.00008 16.0002L5.99976 19.5L13.0001 19.5002',
  d14: 'M12.25 4.5C12.25 2.70507 13.7051 1.25 15.5 1.25C17.2949 1.25 18.75 2.70507 18.75 4.5C18.75 6.29493 17.2949 7.75 15.5 7.75C13.7051 7.75 12.25 6.29493 12.25 4.5Z',
  d15: 'M12.25 19.5C12.25 17.7051 13.7051 16.25 15.5 16.25C17.2949 16.25 18.75 17.7051 18.75 19.5C18.75 21.2949 17.2949 22.75 15.5 22.75C13.7051 22.75 12.25 21.2949 12.25 19.5Z',
  d16: 'M1.25 12C1.25 9.37665 3.37665 7.25 6 7.25C8.62335 7.25 10.75 9.37665 10.75 12C10.75 14.6234 8.62335 16.75 6 16.75C3.37665 16.75 1.25 14.6234 1.25 12Z',
  d17: 'M6.99991 5.50003L13.0001 5.49988L13.0001 3.49988L5.99981 3.50006C5.73459 3.50007 5.48023 3.60544 5.2927 3.79299C5.10517 3.98054 4.99982 4.23491 4.99984 4.50013L5.00008 7.99995L7.00008 7.99981L6.99991 5.50003ZM18.0001 3.49997L22.0001 3.50006L22.0001 5.50006L18.0001 5.49997L18.0001 3.49997ZM4.99976 19.4999L5.00008 16.0001L7.00008 16.0003L6.99985 18.5L13.0001 18.5002L13.0001 20.5002L5.99973 20.5C5.7345 20.5 5.48014 20.3946 5.29261 20.2071C5.10507 20.0195 4.99973 19.7651 4.99976 19.4999ZM18.0001 18.5001L22.0001 18.5002L22.0001 20.5002L18.0001 20.5001L18.0001 18.5001Z',
};

export const IconFlowCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-stroke-rounded IconFlowCircleStrokeRounded"
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

export const IconFlowCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-duotone-rounded IconFlowCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconFlowCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-twotone-rounded IconFlowCircleTwotoneRounded"
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

export const IconFlowCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-solid-rounded IconFlowCircleSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconFlowCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-bulk-rounded IconFlowCircleBulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-stroke-sharp IconFlowCircleStrokeSharp"
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
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlowCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flow-circle-solid-sharp IconFlowCircleSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlowCircle: TheIconSelfPack = {
  name: 'FlowCircle',
  StrokeRounded: IconFlowCircleStrokeRounded,
  DuotoneRounded: IconFlowCircleDuotoneRounded,
  TwotoneRounded: IconFlowCircleTwotoneRounded,
  SolidRounded: IconFlowCircleSolidRounded,
  BulkRounded: IconFlowCircleBulkRounded,
  StrokeSharp: IconFlowCircleStrokeSharp,
  SolidSharp: IconFlowCircleSolidSharp,
};