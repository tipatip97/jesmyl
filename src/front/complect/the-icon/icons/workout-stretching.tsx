import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 5.5C16 6.32843 15.3284 7 14.5 7C13.6716 7 13 6.32843 13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5Z',
  d2: 'M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3',
  d3: 'M10.7259 8.21359C8.22588 10.7136 7 17.6324 7 21.0003M10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3M10.7259 8.21359L13.3725 10M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L13.3725 10M15.0002 21.0003C14.0268 19.8647 13.0257 18.3 12.0502 16.8578C11.3666 15.8474 11.0249 15.3422 10.9845 14.8132M13.3725 10C12.5697 11.0391 12.0164 12.0207 11.6026 12.8942C11.1636 13.8209 10.9441 14.2843 10.9845 14.8132M10.9845 14.8132L8 14',
  d4: 'M13.3725 9.9993C12.5697 11.0384 12.0164 12.02 11.6026 12.8935C11.1636 13.8202 10.9441 14.2836 10.9845 14.8125L8 13.9993L8.00881 13.9569C8.62685 11.6129 9.53079 9.40799 10.7259 8.21289L10.7467 8.22691L13.3725 9.9993Z',
  d5: 'M10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3M10.7259 8.21359L10.7467 8.22762L13.3725 10M10.7259 8.21359C9.53079 9.40869 8.62685 11.6136 8.00881 13.9576M7 21.0003C7 19.2424 7.33398 16.517 8.00881 13.9576M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L13.3984 10.0175L13.3725 10M15.0002 21.0003C14.0268 19.8647 13.0257 18.3 12.0502 16.8578C11.3666 15.8474 11.0249 15.3422 10.9845 14.8132M13.3725 10C12.5697 11.0391 12.0164 12.0207 11.6026 12.8942C11.1636 13.8209 10.9441 14.2843 10.9845 14.8132M10.9845 14.8132L8 14L8.00881 13.9576',
  d6: 'M10.3602 2.20679C10.7981 2.54324 10.8804 3.17103 10.544 3.609C9.62395 4.80666 9.87547 6.43292 11.2853 7.38454L16.0421 10.5952C16.5089 10.9103 16.9365 11.1988 17.2443 11.4693C17.5623 11.7488 17.9454 12.1703 17.9942 12.7907C18.0061 12.9408 17.9997 13.0915 17.9754 13.2399C17.8755 13.8492 17.4641 14.2393 17.1266 14.4955C16.7983 14.7447 16.3491 15.0045 15.856 15.2897L15.856 15.2897L14.861 15.8654C14.3829 16.142 13.7712 15.9786 13.4946 15.5006C13.218 15.0225 13.3814 14.4108 13.8594 14.1342L14.8031 13.5882C15.3314 13.2826 15.6608 13.0901 15.8777 12.9319C15.6761 12.7632 15.3673 12.5527 14.8734 12.2194L13.6152 11.3701C13.1482 12.0617 12.7925 12.718 12.5063 13.3221C12.0239 14.3405 11.9659 14.5314 11.9816 14.7369C11.9864 14.8004 12.0097 14.9145 12.1516 15.1716C12.3006 15.4414 12.5264 15.7769 12.8784 16.2973C13.0608 16.5669 13.2415 16.8368 13.4207 17.1044L13.4208 17.1045C14.2271 18.3084 15.0028 19.4666 15.7594 20.3494C16.1188 20.7687 16.0703 21.4 15.6509 21.7594C15.2316 22.1188 14.6003 22.0703 14.2409 21.6509C13.3989 20.6685 12.5386 19.383 11.7314 18.1766C11.41 17.7016 10.5987 16.4968 10.4007 16.138C10.3091 15.9722 10.2256 15.802 10.1575 15.6242L8.72647 15.2342C8.23887 17.3999 8 19.5647 8 21.0001C8 21.5524 7.55228 22.0001 7 22.0001C6.44772 22.0001 6 21.5524 6 21.0001C6 19.1461 6.34781 16.3348 7.04186 13.7025C7.55619 11.7517 8.29618 9.75697 9.32159 8.33418C7.75733 6.7099 7.51002 4.27543 8.95795 2.39061C9.29441 1.95264 9.9222 1.87034 10.3602 2.20679Z',
  d7: 'M12.25 5.49976C12.25 4.25712 13.2574 3.24976 14.5 3.24976C15.7426 3.24976 16.75 4.25712 16.75 5.49976C16.75 6.7424 15.7426 7.74976 14.5 7.74976C13.2574 7.74976 12.25 6.7424 12.25 5.49976Z',
  d8: 'M16 5.50024C16 6.32867 15.3284 7.00024 14.5 7.00024C13.6716 7.00024 13 6.32867 13 5.50024C13 4.67182 13.6716 4.00024 14.5 4.00024C15.3284 4.00024 16 4.67182 16 5.50024Z',
  d9: 'M10.7259 8.21384C8.22588 10.7138 7 17.6326 7 21.0006M10.7259 8.21384C8.87718 6.96601 8.45184 4.69138 9.75097 3.00024M10.7259 8.21384L13.3725 10.0002M14.3602 15.0002L17 12.5002L13.3725 10.0002M15.0002 21.0006C14.0268 19.865 13.0257 18.3003 12.0502 16.8581C11.3666 15.8477 11.0249 15.3425 10.9845 14.8135M13.3725 10.0002C12.5697 11.0393 12.0164 12.021 11.6026 12.8945C11.1636 13.8212 10.9441 14.2845 10.9845 14.8135M10.9845 14.8135L8 14.0002',
  d10: 'M12.25 5.70703C12.25 4.46439 13.2574 3.45703 14.5 3.45703C15.7426 3.45703 16.75 4.46439 16.75 5.70703C16.75 6.94967 15.7426 7.95703 14.5 7.95703C13.2574 7.95703 12.25 6.94967 12.25 5.70703Z',
  d11: 'M9.65111 8.51658C8.03255 6.9771 7.74579 4.586 9.15621 2.75L10.3457 3.6638C9.33092 4.98482 9.6259 6.77317 11.1455 7.79885L13.7981 9.58932L17.4256 12.0894C17.6119 12.2177 17.7303 12.4234 17.7478 12.6489C17.7652 12.8745 17.68 13.0959 17.5157 13.2515L14.8759 15.7515L13.8445 14.6623L15.812 12.799L13.5456 11.237C13.0019 12.0144 12.5986 12.7505 12.2804 13.4222C11.8089 14.4176 11.7105 14.6767 11.7323 14.9631C11.741 15.0768 11.7824 15.227 11.9328 15.4995C12.0885 15.7815 12.3219 16.1279 12.6714 16.6445C12.8517 16.9111 13.0311 17.1789 13.2094 17.4453L13.2096 17.4455C14.0161 18.6499 14.8024 19.3787 15.5696 20.2738L14.4307 21.25C13.5994 20.2801 12.7498 19.4559 11.9425 18.2496L11.9424 18.2495C11.7691 17.9905 11.5977 17.7345 11.4289 17.485L11.41 17.457L11.41 17.457C11.0844 16.9756 10.812 16.573 10.6195 16.2243C10.5108 16.0273 10.4171 15.8297 10.349 15.6243L8.54108 15.1317C8.01017 17.3986 7.75 19.6959 7.75 21.2072H6.25C6.25 19.4531 6.56629 16.8197 7.19805 14.3056C7.73683 12.1616 8.53534 9.97674 9.65111 8.51658Z',
} as const;

export const IconWorkoutStretchingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-stroke-rounded IconWorkoutStretchingStrokeRounded"
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

export const IconWorkoutStretchingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-duotone-rounded IconWorkoutStretchingDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconWorkoutStretchingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-twotone-rounded IconWorkoutStretchingTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWorkoutStretchingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-solid-rounded IconWorkoutStretchingSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutStretchingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-bulk-rounded IconWorkoutStretchingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutStretchingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-stroke-sharp IconWorkoutStretchingStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWorkoutStretchingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="workout-stretching-solid-sharp IconWorkoutStretchingSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWorkoutStretching: TheIconSelfPack = {
  name: 'WorkoutStretching',
  StrokeRounded: IconWorkoutStretchingStrokeRounded,
  DuotoneRounded: IconWorkoutStretchingDuotoneRounded,
  TwotoneRounded: IconWorkoutStretchingTwotoneRounded,
  SolidRounded: IconWorkoutStretchingSolidRounded,
  BulkRounded: IconWorkoutStretchingBulkRounded,
  StrokeSharp: IconWorkoutStretchingStrokeSharp,
  SolidSharp: IconWorkoutStretchingSolidSharp,
};