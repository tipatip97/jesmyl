import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 3.5L18.5896 5.73307C17.7772 6.26496 16.8 6.4985 15.8297 6.39261L14.5265 6.25039C13.3423 6.12117 12.1587 6.49814 11.2771 7.28532L8.75986 9.5329C7.77913 10.4086 7.74271 11.9117 8.67993 12.8322C9.48235 13.6203 10.7473 13.7231 11.6707 13.0753L13.3355 11.9074C13.5688 11.7437 13.8607 11.6821 14.1419 11.7374L14.4754 11.8029C15.6329 12.0303 16.8344 11.7626 17.7788 11.0669L18.3693 10.6319',
  d2: 'M14.1419 11.7374C14.7613 12.9916 15.6 15.9 18 17.5C16.8333 18.8333 13.6 20.5 10 20.5C5.5 20.5 2 15.5 2 15.5M12 6.76781C11.2126 6.28417 9.0206 5.58265 6.03154 5.50673C5.68359 5.49789 5.34105 5.40917 5.03885 5.23649L2 3.5',
  d3: 'M18 17.5C18 17.5 20.5 17 22 15.5',
  d4: 'M18.5896 5.73307L22 3.5L21.9919 15.5029C20.4143 16.7982 19.3016 17.3297 18.0079 17.4613C16.3102 16.9164 14.7232 13.4183 14.1419 11.7374C13.8607 11.6821 13.5688 11.7437 13.3355 11.9074L11.6707 13.0753C10.7473 13.7231 9.48235 13.6203 8.67993 12.8322C7.74271 11.9117 7.77913 10.4086 8.75986 9.5329L11.2771 7.28532C12.1587 6.49814 13.3423 6.12117 14.5265 6.25039L15.8297 6.39261C16.8 6.4985 17.7772 6.26496 18.5896 5.73307Z',
  d5: 'M18 17.5C16.0843 16.2229 15.1633 14.1121 14.5547 12.6744C14.3356 12.1569 13.7319 11.9525 13.2344 12.2136L12 12.8614C8.33459 15.0987 6.72576 10.6493 9.06359 9.0907L12 6.76781C11.2126 6.28417 9.0206 5.58265 6.03154 5.50673C5.68359 5.49789 5.34105 5.40917 5.03885 5.23649L2 3.5V15.5C2 15.5 5.5 20.5 10 20.5C13.6 20.5 16.8333 18.8333 18 17.5Z',
  d6: 'M14.1419 11.7374C14.7613 12.9916 15.6 15.9 18 17.5M18 17.5C16.8333 18.8333 13.6 20.5 10 20.5C5.5 20.5 2 15.5 2 15.5M18 17.5C18 17.5 20.5 17 22 15.5M12 6.76781C11.2126 6.28417 9.0206 5.58265 6.03154 5.50673C5.68359 5.49789 5.34105 5.40917 5.03885 5.23649L2 3.5',
  d7: 'M12.4416 6.16936C12.4334 6.17424 12.4251 6.17897 12.4168 6.18356C12.1763 6.32282 11.9493 6.48808 11.7404 6.67779L8.81496 9.33446C8.05043 10.0287 8.02311 11.2121 8.7523 11.9405C9.38366 12.5712 10.3862 12.6559 11.1167 12.1346L13.0515 10.7541C13.5181 10.4211 14.099 10.2975 14.6572 10.409L15.0448 10.4864C16.1519 10.7076 17.2994 10.4466 18.1989 9.77266L18.8852 9.2585C19.2728 8.96812 19.8184 9.05229 20.1039 9.44649C20.3894 9.84069 20.3067 10.3956 19.9191 10.686L19.2328 11.2002C18.4489 11.7875 17.5371 12.1555 16.5883 12.2845C16.2621 12.3289 16.0989 12.3511 16.0423 12.4552C15.9857 12.5592 16.0489 12.7006 16.1753 12.9833C16.3395 13.3507 16.5207 13.7321 16.7215 14.1091C17.2801 15.1579 17.9959 16.1923 18.9739 16.9925C19.0585 17.0618 19.1009 17.0964 19.1567 17.1077C19.2126 17.1191 19.2659 17.1032 19.3723 17.0716C19.6423 16.9913 19.9927 16.878 20.3307 16.7458C21.0681 16.4574 21.8995 16.0422 22.5875 15.4794C22.6654 15.4157 22.7044 15.3838 22.7272 15.3354C22.75 15.2869 22.75 15.2332 22.75 15.1258V4.05707C22.75 3.67153 22.75 3.47876 22.6281 3.41174C22.5062 3.34472 22.3476 3.45032 22.0305 3.66152L20.1356 4.92342C19.0216 5.66531 17.6835 5.98993 16.3561 5.84261L14.8417 5.67451C14.0006 5.58116 13.1613 5.75959 12.4416 6.16936Z',
  d8: 'M9.5044 5.39544C8.36808 5.09991 6.84864 4.84712 5.04155 4.80044C4.5048 4.78658 3.96379 4.64708 3.47757 4.36449L1.9455 3.47407C1.63619 3.29431 1.48154 3.20442 1.36577 3.27275C1.25 3.34108 1.25 3.52225 1.25 3.88458V15.4243C1.25 15.4307 1.25207 15.4369 1.25589 15.442C1.69831 15.9713 2.84345 17.3098 3.63782 18.0124C5.25105 19.4392 7.37464 20.7499 9.67568 20.7499C11.6369 20.7499 13.5088 20.2871 15.0504 19.6357C15.8829 19.284 16.5982 18.8863 17.1694 18.4929C17.3766 18.3501 17.4802 18.2788 17.4903 18.1673C17.5003 18.0559 17.4042 17.9595 17.2118 17.7667C16.3376 16.8905 15.6887 15.8925 15.1887 14.9536C14.8287 14.2776 14.54 13.6209 14.3001 13.052C14.2773 12.9977 14.2388 12.9058 14.1956 12.8026C14.0915 12.5536 14.0395 12.4291 13.9329 12.3981C13.8263 12.3671 13.7175 12.4447 13.4999 12.5999L12.1179 13.586C10.7021 14.5962 8.76451 14.4378 7.53078 13.2054C6.08156 11.7577 6.13889 9.38775 7.65392 8.01191L9.67878 6.17308C9.94916 5.92755 10.0843 5.80478 10.0513 5.66692C10.0182 5.52907 9.84695 5.48452 9.5044 5.39544Z',
  d9: 'M9.5044 5.39531C8.36808 5.09979 6.84864 4.847 5.04155 4.80032C4.5048 4.78645 3.96379 4.64696 3.47757 4.36437L1.9455 3.47395C1.63619 3.29418 1.48154 3.2043 1.36577 3.27263C1.25 3.34096 1.25 3.52213 1.25 3.88446V15.4241C1.25 15.4305 1.25207 15.4368 1.25589 15.4418C1.69831 15.9712 2.84345 17.3097 3.63782 18.0123C5.25105 19.439 7.37464 20.7498 9.67568 20.7498C11.6369 20.7498 13.5088 20.287 15.0504 19.6356C15.8829 19.2839 16.5982 18.8861 17.1694 18.4927C17.3766 18.35 17.4802 18.2786 17.4903 18.1672C17.5003 18.0558 17.4042 17.9594 17.2118 17.7666C16.3376 16.8904 15.6887 15.8924 15.1887 14.9535C14.8287 14.2775 14.54 13.6208 14.3001 13.0518C14.2773 12.9976 14.2388 12.9057 14.1956 12.8024C14.0915 12.5534 14.0395 12.4289 13.9329 12.3979C13.8263 12.3669 13.7175 12.4446 13.4999 12.5998L12.1179 13.5859C10.7021 14.5961 8.76451 14.4377 7.53078 13.2053C6.08156 11.7576 6.13889 9.38763 7.65392 8.01179L9.67878 6.17296C9.94916 5.92742 10.0843 5.80466 10.0513 5.6668C10.0182 5.52894 9.84695 5.4844 9.5044 5.39531Z',
  d10: 'M12.4412 6.16816C12.4331 6.17303 12.4248 6.17777 12.4165 6.18236C12.1759 6.32162 11.949 6.48687 11.7401 6.67659L8.81464 9.33325C8.05011 10.0275 8.02279 11.2109 8.75198 11.9393C9.38333 12.57 10.3858 12.6547 11.1164 12.1334L13.0512 10.7529C13.5178 10.4199 14.0987 10.2963 14.6569 10.4078L15.0445 10.4852C16.1516 10.7064 17.299 10.4454 18.1986 9.77145L18.8849 9.2573C19.2724 8.96692 19.8181 9.05109 20.1036 9.44529C20.3891 9.83948 20.3063 10.3944 19.9188 10.6848L19.2325 11.199C18.4486 11.7863 17.5367 12.1543 16.588 12.2833C16.2617 12.3277 16.0986 12.3499 16.042 12.4539C15.9853 12.558 16.0485 12.6994 16.175 12.9821C16.3392 13.3495 16.5204 13.7309 16.7212 14.1079C17.2797 15.1567 17.9955 16.1911 18.9735 16.9913C19.0582 17.0606 19.1005 17.0952 19.1564 17.1065C19.2123 17.1179 19.2656 17.102 19.372 17.0704C19.642 16.9901 19.9924 16.8768 20.3304 16.7446C21.0677 16.4562 21.8991 16.041 22.5872 15.4782C22.6651 15.4145 22.7041 15.3826 22.7269 15.3342C22.7497 15.2857 22.7497 15.232 22.7497 15.1246V4.05587C22.7497 3.67033 22.7497 3.47756 22.6278 3.41054C22.5059 3.34352 22.3473 3.44912 22.0302 3.66031L20.1353 4.92221C19.0213 5.66411 17.6831 5.98873 16.3558 5.8414L14.8413 5.67331C14.0003 5.57995 13.161 5.75838 12.4412 6.16816Z',
  d11: 'M22 3.5L18.5896 5.73307C17.7772 6.26496 16.8 6.4985 15.8297 6.39261L14.5265 6.25039C13.3423 6.12117 12.1587 6.49814 11.2771 7.28532L8.75986 9.5329C7.77913 10.4086 7.74271 11.9117 8.67993 12.8322C9.48235 13.6203 10.7473 13.7231 11.6707 13.0753L14 11.5C15.5 12 16.8344 11.7626 17.7788 11.0669L18.3693 10.6319',
  d12: 'M14.1419 11.7374C14.7613 12.9916 15.6 15.9 18 17.5C16.8333 18.8333 13.6 20.5 10 20.5C5.5 20.5 2 15.5 2 15.5M12 6.76781C12 6.76781 9.5 5 5.5 5.50673L2 3.5',
  d13: 'M18.8225 16.8752C17.9662 16.231 17.2873 15.3702 16.7341 14.4586C16.6539 14.3235 16.5769 14.1876 16.5029 14.0514C16.1955 13.4865 15.9435 12.9275 15.7218 12.4126L15.657 12.2615C16.8865 12.3243 18.0059 11.9901 18.8974 11.3363L19.5517 10.8564L18.5659 9.52392L17.9116 10.0038C17.1082 10.593 15.9176 10.84 14.48 10.3629L14.0912 10.2338L11.1704 12.2003L11.1588 12.2084C10.4622 12.695 9.50633 12.6159 8.90433 12.0273C8.20906 11.3474 8.23512 10.2429 8.96408 9.59482L11.7535 7.11511C12.5532 6.40419 13.6302 6.06129 14.7105 6.17866L16.1545 6.33556C17.4201 6.47307 18.696 6.17007 19.7582 5.47759L22.251 3.85249V15.2015C21.5676 15.7929 20.7036 16.2217 19.9442 16.5125C19.5252 16.673 19.1543 16.7853 18.8898 16.8572L18.8225 16.8752Z',
  d14: 'M14.9636 14.7104C15.0718 14.9081 15.1867 15.1088 15.3089 15.3103C15.8246 16.178 16.4873 17.0695 17.3645 17.8289C16.7678 18.2937 15.9312 18.7873 14.9095 19.2099C13.4396 19.8179 11.6547 20.2499 9.78476 20.2499C7.59075 20.2499 5.56593 19.0265 4.02773 17.6947C3.27031 17.039 2.65888 16.3811 2.23704 15.887C2.02661 15.6405 1.86466 15.4363 1.75659 15.2955L1.75098 15.2882V3.74988L4.3849 5.25346C4.54166 5.34295 4.72345 5.37913 4.90272 5.35651C6.97434 5.09522 8.64794 5.42094 9.7967 5.80586C10.0394 5.88718 10.2585 5.97112 10.4529 6.05268L7.85704 8.36037C6.41248 9.64456 6.35782 11.8567 7.73963 13.2079C8.91417 14.3565 10.7578 14.5056 12.1072 13.5675L13.8626 12.3855C13.9244 12.5288 13.991 12.6829 14.0636 12.8486C14.3072 13.4045 14.6016 14.0486 14.9636 14.7104Z',
};

export const IconAgreement02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-stroke-rounded IconAgreement02StrokeRounded"
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

export const IconAgreement02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-duotone-rounded IconAgreement02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconAgreement02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-twotone-rounded IconAgreement02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-solid-rounded IconAgreement02SolidRounded"
    >
      <path 
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

export const IconAgreement02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-bulk-rounded IconAgreement02BulkRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-stroke-sharp IconAgreement02StrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-02-solid-sharp IconAgreement02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAgreement02: TheIconSelfPack = {
  name: 'Agreement02',
  StrokeRounded: IconAgreement02StrokeRounded,
  DuotoneRounded: IconAgreement02DuotoneRounded,
  TwotoneRounded: IconAgreement02TwotoneRounded,
  SolidRounded: IconAgreement02SolidRounded,
  BulkRounded: IconAgreement02BulkRounded,
  StrokeSharp: IconAgreement02StrokeSharp,
  SolidSharp: IconAgreement02SolidSharp,
};