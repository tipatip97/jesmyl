import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 15L16.5 16.5',
  d2: 'M16.9391 19.0593C16.3536 18.4739 16.3536 17.5246 16.9391 16.9391C17.5246 16.3536 18.4739 16.3536 19.0593 16.9391L21.0609 18.9407C21.6464 19.5261 21.6464 20.4754 21.0609 21.0609C20.4754 21.6464 19.5261 21.6464 18.9407 21.0609L16.9391 19.0593Z',
  d3: 'M5.39321 3.57735L8.18155 4.51716C8.56707 4.65061 9.15209 4.56335 9.48335 4.32736L11.4394 2.93236C12.6909 2.04083 13.7267 2.57255 13.7278 4.11802L13.7385 6.73427C13.7403 7.17734 14.0485 7.72717 14.4239 7.96607L16.4225 9.2191C18.0034 10.212 17.8236 11.3875 16.0219 11.8442L13.5143 12.4774C13.0612 12.5916 12.5938 13.0591 12.4744 13.5175L11.8413 16.0256C11.3899 17.8224 10.2041 18.0021 9.21671 16.4262L7.96391 14.4272C7.72505 14.0518 7.17533 13.7436 6.73234 13.7418L4.11658 13.731C2.57665 13.7246 2.03977 12.6939 2.93114 11.4422L4.32588 9.48579C4.55657 9.15972 4.64382 8.57459 4.51039 8.189L3.57076 5.40014C3.06353 3.88424 3.88284 3.06477 5.39321 3.57735Z',
  d4: 'M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L17.0303 15.9697C17.3232 16.2626 17.3232 16.7374 17.0303 17.0303C16.7374 17.3232 16.2626 17.3232 15.9697 17.0303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z',
  d5: 'M16.4088 16.4088C17.2872 15.5304 18.7113 15.5304 19.5897 16.4088L21.5912 18.4103C22.4696 19.2887 22.4696 20.7128 21.5912 21.5912C20.7128 22.4696 19.2887 22.4696 18.4103 21.5912L16.4088 19.5897C15.5304 18.7113 15.5304 17.2872 16.4088 16.4088Z',
  d6: 'M13.397 1.9444C14.1694 2.34345 14.4772 3.21031 14.4781 4.11573L14.4781 4.11691L14.4888 6.7306C14.4844 6.85787 14.5455 7.1563 14.8254 7.33182L16.8217 8.58339C17.6656 9.11338 18.3773 9.89669 18.2324 10.8453C18.087 11.7978 17.1692 12.3266 16.2059 12.5708L13.6979 13.2041C13.3849 13.2831 13.2362 13.5703 13.201 13.7041L12.569 16.208C12.3265 17.1728 11.7957 18.0864 10.8433 18.2315C9.89534 18.3759 9.11081 17.6686 8.58149 16.8238L7.33051 14.8278C7.15981 14.5554 6.85877 14.4899 6.72958 14.4912L4.11382 14.4804C3.21132 14.4767 2.34621 14.1684 1.94673 13.3984C1.54589 12.6259 1.79685 11.742 2.32077 11.0063L3.71441 9.05138C3.88225 8.81595 3.84139 8.53762 3.79998 8.42788L2.86035 5.63902L2.85985 5.63754C2.56876 4.76761 2.56863 3.82402 3.19534 3.1972C3.82289 2.56953 4.76676 2.57223 5.63457 2.86655L8.42721 3.80784C8.54002 3.84445 8.82221 3.87732 9.04852 3.71593L11.0046 2.32093C11.7395 1.79736 12.6238 1.54491 13.397 1.9444Z',
  d7: 'M14.4473 14.4414L16.9363 16.9293',
  d8: 'M19.4251 21.4069L21.4164 19.4166L17.9317 15.9336L15.9404 17.9239L19.4251 21.4069Z',
  d9: 'M3.92905 3.96671L6.09204 9.34157L2.42149 12.9702C2.41623 12.9754 2.41964 12.9844 2.42704 12.9848L8.02344 13.2823L10.543 18.4973C10.5464 18.5043 10.5566 18.5035 10.5589 18.4961L12.4442 12.4663L18.5173 10.6017C18.5246 10.5994 18.5255 10.5894 18.5186 10.5859L13.2409 7.94838L13.0028 2.4154C13.0025 2.408 12.9935 2.4045 12.9882 2.40972L9.23834 6.13723L3.94022 3.95564C3.93324 3.95276 3.92623 3.9597 3.92905 3.96671Z',
  d10: 'M15.9394 16.9991L13.9697 15.0294L15.0304 13.9688L17.0001 15.9384L17.4697 15.4688C17.7626 15.1759 18.2375 15.1759 18.5304 15.4688L22.0304 18.9688C22.3233 19.2616 22.3233 19.7365 22.0304 20.0294L20.0304 22.0294C19.7375 22.3223 19.2626 22.3223 18.9697 22.0294L15.4697 18.5294C15.1768 18.2365 15.1768 17.7616 15.4697 17.4688L15.9394 16.9991Z',
  d11: 'M13.2623 1.80048C13.5392 1.90753 13.7269 2.16782 13.741 2.46435L13.9824 7.53382L18.8354 9.96035C19.11 10.0976 19.2732 10.3883 19.2474 10.6942C19.2216 11 19.012 11.2593 18.7184 11.3487L13.0683 13.0683L11.3487 18.7184C11.2593 19.012 11 19.2216 10.6942 19.2474C10.3883 19.2732 10.0976 19.11 9.96035 18.8354L7.53382 13.9824L2.46435 13.741C2.16782 13.7269 1.90753 13.5392 1.80048 13.2623C1.69343 12.9854 1.75978 12.6714 1.96969 12.4615L5.29212 9.13906L3.37743 4.35234C3.26601 4.07377 3.33132 3.75561 3.54346 3.54346C3.75561 3.33132 4.07377 3.26601 4.35234 3.37743L9.13906 5.29212L12.4615 1.96969C12.6714 1.75978 12.9854 1.69343 13.2623 1.80048Z',
} as const;

export const IconMagicWand03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-stroke-rounded IconMagicWand03StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-duotone-rounded IconMagicWand03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-twotone-rounded IconMagicWand03TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMagicWand03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-solid-rounded IconMagicWand03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMagicWand03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-bulk-rounded IconMagicWand03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMagicWand03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-stroke-sharp IconMagicWand03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMagicWand03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="magic-wand-03-solid-sharp IconMagicWand03SolidSharp"
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

export const iconPackOfMagicWand03: TheIconSelfPack = {
  name: 'MagicWand03',
  StrokeRounded: IconMagicWand03StrokeRounded,
  DuotoneRounded: IconMagicWand03DuotoneRounded,
  TwotoneRounded: IconMagicWand03TwotoneRounded,
  SolidRounded: IconMagicWand03SolidRounded,
  BulkRounded: IconMagicWand03BulkRounded,
  StrokeSharp: IconMagicWand03StrokeSharp,
  SolidSharp: IconMagicWand03SolidSharp,
};