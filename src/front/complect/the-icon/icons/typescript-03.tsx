import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 14H13M15 14H13M13 14V19',
  d2: 'M20.5 14H18.5C17.9477 14 17.5 14.4477 17.5 15V15.5C17.5 16.0523 17.9477 16.5 18.5 16.5H19.5C20.0523 16.5 20.5 16.9477 20.5 17.5V18C20.5 18.5523 20.0523 19 19.5 19H17.5',
  d3: 'M15.5 22H11.2273C7.96607 22 6.33546 22 5.20307 21.2022C4.87862 20.9736 4.59058 20.7025 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7273V12.1818C3.5 9.21865 3.5 7.73706 3.96894 6.55375C4.72281 4.65142 6.31714 3.15088 8.33836 2.44135C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.2522C18.8902 2.65765 19.8012 3.5151 20.232 4.60214C20.5 5.27832 20.5 6.12494 20.5 7.81818V11',
  d4: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d5: 'M3.5014 10.9896C3.84179 10.1536 5.40998 8.49792 8.99805 8.49792C9.29946 8.49792 10.0901 8.19468 10.0492 6.55168C10.0325 5.06667 10.5738 2.12886 12.8445 2.00216C13.2945 2 13.7836 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.2522C18.8902 2.65765 19.8012 3.5151 20.232 4.60214C20.5 5.27832 20.5 6.12494 20.5 7.81818V17C20.5 17.9293 20.5 18.394 20.4231 18.7804C20.1075 20.3671 18.8671 21.6075 17.2804 21.9231C16.894 22 16.4293 22 15.5 22H11.2273C7.96607 22 6.33546 22 5.20307 21.2022C4.87862 20.9736 4.59058 20.7025 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7273V12.1818C3.5 11.7548 3.5 11.3586 3.5014 10.9896Z',
  d6: 'M10.25 14C10.25 13.5858 10.5858 13.25 11 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H13.75V19C13.75 19.4142 13.4142 19.75 13 19.75C12.5858 19.75 12.25 19.4142 12.25 19V14.75H11C10.5858 14.75 10.25 14.4142 10.25 14Z',
  d7: 'M16.75 15C16.75 14.0335 17.5335 13.25 18.5 13.25H20.5C20.9142 13.25 21.25 13.5858 21.25 14C21.25 14.4142 20.9142 14.75 20.5 14.75H18.5C18.3619 14.75 18.25 14.8619 18.25 15V15.5C18.25 15.6381 18.3619 15.75 18.5 15.75H19.5C20.4665 15.75 21.25 16.5335 21.25 17.5V18C21.25 18.9665 20.4665 19.75 19.5 19.75H17.5C17.0858 19.75 16.75 19.4142 16.75 19C16.75 18.5858 17.0858 18.25 17.5 18.25H19.5C19.6381 18.25 19.75 18.1381 19.75 18V17.5C19.75 17.3619 19.6381 17.25 19.5 17.25H18.5C17.5335 17.25 16.75 16.4665 16.75 15.5V15Z',
  d8: 'M7.63841 20.7033C8.50786 20.7942 9.63899 20.7955 11.2476 20.7955H15.4079C15.9456 20.7955 16.3816 21.233 16.3816 21.7727C16.3816 22.3125 15.9456 22.75 15.4079 22.75H11.1927C9.65159 22.75 8.41879 22.75 7.43654 22.6473C6.42712 22.5417 5.5659 22.3186 4.82113 21.7919C4.43077 21.5159 4.08222 21.1871 3.78704 20.8146C3.21721 20.0956 2.97396 19.2577 2.85985 18.2843C2.74996 17.3469 2.74998 16.1743 2.75 14.7262V12.1428V12.1427C2.75 10.7244 2.75 9.61179 2.80919 8.71107C2.86944 7.79422 2.99398 7.02952 3.27509 6.31755C4.11848 4.1815 5.89221 2.51875 8.11221 1.73658C9.49465 1.2495 11.1813 1.24971 14.0209 1.25007L14.2572 1.25009L14.4605 1.25004L14.4606 1.25004C16.0156 1.2495 17.048 1.24914 17.9068 1.55172C19.2834 2.03673 20.3918 3.071 20.9206 4.41031C21.1039 4.87447 21.1795 5.36014 21.2153 5.90477C21.25 6.43335 21.25 7.08083 21.25 7.87999V7.88006V10.0455C21.25 10.5852 20.8141 11.0228 20.2763 11.0228C19.7386 11.0228 19.3026 10.5852 19.3026 10.0455V7.91329C19.3026 7.07303 19.3021 6.49008 19.2721 6.03341C19.2427 5.58546 19.1879 5.32704 19.1102 5.1304C18.8001 4.34503 18.1344 3.70339 17.2618 3.39593C16.7584 3.21858 16.0913 3.20463 14.2572 3.20463C13.9591 3.20463 13.6023 3.2058 13.2641 3.20732C12.926 3.20885 12.3726 3.21134 11.9104 3.48025C11.6057 3.65756 11.3849 3.85945 11.2582 4.08004C11.0409 4.45845 10.9166 4.89711 10.9166 5.3648C10.9166 5.51193 10.9262 5.70446 10.9344 5.88206L10.9344 5.88212C10.9417 6.03696 10.9496 6.20566 10.9531 6.3737C10.961 6.75379 10.949 7.19733 10.8343 7.62548C10.6108 8.45945 9.9594 9.11086 9.12543 9.33432C8.69728 9.44904 8.25374 9.46105 7.87365 9.45315C7.70551 9.44966 7.53693 9.44174 7.38201 9.43446C7.20441 9.42622 6.98042 9.41667 6.83329 9.41667C6.38662 9.41667 5.96642 9.53003 5.59991 9.72955C5.37246 9.85337 5.15105 10.0965 4.97811 10.3875C4.6975 10.8596 4.69732 11.4982 4.69734 11.7652L4.69737 14.6653C4.69737 16.1888 4.69894 17.2461 4.79387 18.0559C4.88611 18.8427 5.05555 19.2754 5.31111 19.5979C5.48891 19.8223 5.70128 20.0234 5.94274 20.1941C6.30057 20.4472 6.78449 20.6139 7.63841 20.7033Z',
  d9: 'M20.5 10V2H10.5L3.5 9V22.0025H20.4297M10.5 2.5303V9H4.05222',
  d10: 'M10.25 13.25H15.75V14.75H13.75V19.75H12.25V14.75H10.25V13.25Z',
  d11: 'M16.75 15C16.75 14.0335 17.5335 13.25 18.5 13.25H21.25V14.75H18.5C18.3619 14.75 18.25 14.8619 18.25 15V15.5C18.25 15.6381 18.3619 15.75 18.5 15.75H19.5C20.4665 15.75 21.25 16.5335 21.25 17.5V18C21.25 18.9665 20.4665 19.75 19.5 19.75H16.75V18.25H19.5C19.6381 18.25 19.75 18.1381 19.75 18V17.5C19.75 17.3619 19.6381 17.25 19.5 17.25H18.5C17.5335 17.25 16.75 16.4665 16.75 15.5V15Z',
  d12: 'M21.25 2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H10.1362L2.75 8.66338V21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H21.25V20.7955H4.69727V10.0455H11.5131L11.5131 3.20459H19.3025V10H21.25V2.22727Z',
} as const;

export const IconTypescript03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-stroke-rounded IconTypescript03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTypescript03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-duotone-rounded IconTypescript03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTypescript03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-twotone-rounded IconTypescript03TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTypescript03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-solid-rounded IconTypescript03SolidRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTypescript03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-bulk-rounded IconTypescript03BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTypescript03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-stroke-sharp IconTypescript03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTypescript03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-03-solid-sharp IconTypescript03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTypescript03: TheIconSelfPack = {
  name: 'Typescript03',
  StrokeRounded: IconTypescript03StrokeRounded,
  DuotoneRounded: IconTypescript03DuotoneRounded,
  TwotoneRounded: IconTypescript03TwotoneRounded,
  SolidRounded: IconTypescript03SolidRounded,
  BulkRounded: IconTypescript03BulkRounded,
  StrokeSharp: IconTypescript03StrokeSharp,
  SolidSharp: IconTypescript03SolidSharp,
};