import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 8.98926C12.8164 8.98926 11.1837 15.0101 8 15.0101',
  d2: 'M15.54 15.0101C14.7312 15.0101 14.2868 15.0101 13.9458 14.8891C13.7522 14.8203 13.5759 14.7242 13.4256 14.6053C13.1609 14.3962 13.0157 14.0965 12.7254 13.4971L11.2746 10.5022C10.9842 9.90285 10.839 9.60317 10.5744 9.39399C10.424 9.27517 10.2477 9.17904 10.0541 9.11029C9.71317 8.98926 9.26877 8.98926 8.45996 8.98926',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d4: 'M16 8.99023C12.8164 8.99023 11.1837 15.0111 8 15.0111M15.54 15.0111C14.7312 15.0111 14.2868 15.0111 13.9458 14.8901C13.7522 14.8213 13.5759 14.7252 13.4256 14.6063C13.1609 14.3972 13.0157 14.0975 12.7254 13.4981L11.2746 10.5032C10.9842 9.90382 10.839 9.60414 10.5744 9.39496C10.424 9.27614 10.2477 9.18001 10.0541 9.11126C9.71317 8.99023 9.26877 8.99023 8.45996 8.99023',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.47059 10.0002C9.36489 10.0002 9.5631 10.0141 9.70671 10.0644C9.80712 10.0997 9.88728 10.1451 9.94687 10.1916L9.9474 10.1921C9.95714 10.1996 9.98614 10.2222 10.0511 10.3292C10.1289 10.4572 10.2166 10.6339 10.3706 10.9481L10.8215 11.8679C10.3624 12.4303 9.93427 12.9233 9.49133 13.3063C8.93266 13.7894 8.4589 14.0002 8 14.0002C7.44772 14.0002 7 14.4479 7 15.0002C7 15.5525 7.44772 16.0002 8 16.0002C9.13294 16.0002 10.0571 15.4611 10.7995 14.8191C11.1432 14.5219 11.471 14.182 11.7829 13.8292L11.8336 13.9327L11.8879 14.0439C12.1237 14.5284 12.368 15.0304 12.822 15.385C13.0656 15.5753 13.341 15.7214 13.6312 15.8232C14.1403 16.0019 14.7138 16.0012 15.3894 16.0003L15.5294 16.0002C16.0817 16.0002 16.5294 15.5525 16.5294 15.0002C16.5294 14.4479 16.0817 14.0002 15.5294 14.0002C14.6351 14.0002 14.4369 13.9864 14.2933 13.936C14.1929 13.9008 14.1127 13.8553 14.0531 13.8088L14.0526 13.8084C14.0429 13.8008 14.0139 13.7782 13.9489 13.6713C13.8711 13.5433 13.7834 13.3665 13.6294 13.0524L13.1785 12.1325C13.6376 11.5701 14.0657 11.0772 14.5087 10.6941C15.0673 10.2111 15.5411 10.0002 16 10.0002C16.5523 10.0002 17 9.55251 17 9.00022C17 8.44794 16.5523 8.00022 16 8.00022C14.8671 8.00022 13.9429 8.53938 13.2005 9.1813C12.8568 9.47854 12.529 9.81849 12.2171 10.1712L12.1664 10.0678L12.1121 9.95649L12.1121 9.95649C11.8763 9.47206 11.632 8.97007 11.178 8.61546C10.9344 8.42518 10.659 8.27902 10.3688 8.17723C9.85969 7.99859 9.28619 7.99929 8.61056 8.00011L8.47059 8.00022C7.9183 8.00022 7.47059 8.44794 7.47059 9.00022C7.47059 9.55251 7.9183 10.0002 8.47059 10.0002Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M9.70671 10.0644C9.5631 10.0141 9.36489 10.0002 8.47059 10.0002C7.9183 10.0002 7.47059 9.55251 7.47059 9.00022C7.47059 8.44794 7.9183 8.00022 8.47059 8.00022C8.51773 8.00022 8.56439 8.00017 8.61056 8.00011C9.28619 7.99929 9.85969 7.99859 10.3688 8.17723C10.659 8.27902 10.9344 8.42518 11.178 8.61546C11.632 8.97007 11.8763 9.47207 12.1121 9.95649C12.1302 9.99372 12.1483 10.0308 12.1664 10.0678L12.2171 10.1712C12.529 9.81849 12.8568 9.47854 13.2005 9.1813C13.9429 8.53938 14.8671 8.00022 16 8.00022C16.5523 8.00022 17 8.44794 17 9.00022C17 9.55251 16.5523 10.0002 16 10.0002C15.5411 10.0002 15.0673 10.2111 14.5087 10.6941C14.0657 11.0772 13.6376 11.5701 13.1785 12.1325L13.6294 13.0524C13.7834 13.3665 13.8711 13.5433 13.9489 13.6713C14.0139 13.7782 14.0429 13.8008 14.0526 13.8084L14.0531 13.8088L14.0531 13.8088C14.1127 13.8553 14.1929 13.9008 14.2933 13.936C14.4369 13.9864 14.6351 14.0002 15.5294 14.0002C16.0817 14.0002 16.5294 14.4479 16.5294 15.0002C16.5294 15.5525 16.0817 16.0002 15.5294 16.0002C15.4823 16.0002 15.4356 16.0003 15.3894 16.0003C14.7138 16.0012 14.1403 16.0019 13.6312 15.8232L13.9622 14.8796L13.6312 15.8232C13.341 15.7214 13.0656 15.5753 12.822 15.385C12.368 15.0304 12.1237 14.5284 11.8879 14.0439C11.8698 14.0067 11.8517 13.9696 11.8336 13.9327L11.7829 13.8292C11.471 14.182 11.1432 14.5219 10.7995 14.8191C10.0571 15.4611 9.13294 16.0002 8 16.0002C7.44772 16.0002 7 15.5525 7 15.0002C7 14.4479 7.44772 14.0002 8 14.0002C8.4589 14.0002 8.93266 13.7894 9.49132 13.3063C9.93427 12.9233 10.3624 12.4303 10.8215 11.8679L10.3706 10.9481C10.2166 10.6339 10.1289 10.4572 10.0511 10.3292C9.98614 10.2222 9.95714 10.1996 9.9474 10.1921C9.94722 10.1919 9.94704 10.1918 9.94687 10.1916L10.5624 9.40355L9.94687 10.1916C9.88728 10.1451 9.80712 10.0997 9.70671 10.0644Z',
  d8: 'M15.5064 15H14.3432C12.9822 14.7281 12.888 13.6906 12.4449 12.9458C12.2993 12.6269 12.1484 12.3029 12.0017 11.9924M12.0017 11.9924C11.5531 11.0425 11.1445 10.2186 11.0496 10.0508C10.6336 9.31567 10.4757 9 8.4521 9M12.0017 11.9924C12.2811 11.6429 12.5593 11.2933 12.8403 10.9625C13.8116 9.87812 14.7797 9 16 9M12.0017 11.9924C10.7991 13.4968 9.57348 15 8 15',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.47059 10.0002C9.36489 10.0002 9.5631 10.0141 9.70671 10.0644C9.80712 10.0997 9.88728 10.1451 9.94687 10.1916C9.9566 10.1992 9.98614 10.2222 10.0511 10.3292C10.1289 10.4572 10.2166 10.6339 10.3706 10.9481L10.8215 11.8679C10.3624 12.4303 9.93427 12.9233 9.49133 13.3063C8.93266 13.7894 8.4589 14.0002 8 14.0002V16.0002C9.13294 16.0002 10.0571 15.4611 10.7995 14.8191C11.1432 14.5219 11.471 14.182 11.7829 13.8292L11.8336 13.9327L11.8879 14.0439C12.1237 14.5284 12.368 15.0304 12.822 15.385C13.0656 15.5753 13.341 15.7214 13.6312 15.8232C14.1403 16.0019 14.7138 16.0012 15.3894 16.0003L15.5294 16.0002V14.0002C14.6351 14.0002 14.4369 13.9864 14.2933 13.936C14.1929 13.9008 14.1127 13.8553 14.0531 13.8088C14.0434 13.8012 14.0139 13.7782 13.9489 13.6713C13.8711 13.5433 13.7834 13.3665 13.6294 13.0524L13.1785 12.1325C13.6376 11.5701 14.0657 11.0772 14.5087 10.6941C15.0673 10.2111 15.5411 10.0002 16 10.0002V8.00022C14.8671 8.00022 13.9429 8.53938 13.2005 9.1813C12.8568 9.47854 12.529 9.81849 12.2171 10.1712L12.1664 10.0678L12.1121 9.95649C11.8763 9.47207 11.632 8.97007 11.178 8.61546C10.9344 8.42518 10.659 8.27902 10.3688 8.17723C9.85969 7.99859 9.28619 7.99929 8.61056 8.00011L8.47059 8.00022V10.0002Z',
} as const;

export const IconXVariableCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-stroke-rounded IconXVariableCircleStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconXVariableCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-duotone-rounded IconXVariableCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconXVariableCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-twotone-rounded IconXVariableCircleTwotoneRounded"
    >
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

export const IconXVariableCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-solid-rounded IconXVariableCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconXVariableCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-bulk-rounded IconXVariableCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconXVariableCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-stroke-sharp IconXVariableCircleStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconXVariableCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="x-variable-circle-solid-sharp IconXVariableCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfXVariableCircle: TheIconSelfPack = {
  name: 'XVariableCircle',
  StrokeRounded: IconXVariableCircleStrokeRounded,
  DuotoneRounded: IconXVariableCircleDuotoneRounded,
  TwotoneRounded: IconXVariableCircleTwotoneRounded,
  SolidRounded: IconXVariableCircleSolidRounded,
  BulkRounded: IconXVariableCircleBulkRounded,
  StrokeSharp: IconXVariableCircleStrokeSharp,
  SolidSharp: IconXVariableCircleSolidSharp,
};