import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.0078 11L13.9988 11',
  d2: 'M8.00781 16L7.99883 16',
  d3: 'M6.24887 9.30307C5.79205 10.3381 5.98187 11.4892 6.67285 11.8741C7.36383 12.259 8.29431 11.7319 8.75113 10.6969C9.20795 9.66191 9.01813 8.51084 8.32715 8.12594C7.63617 7.74103 6.70569 8.26805 6.24887 9.30307Z',
  d4: 'M13.1766 15.8719C12.787 16.624 13.0636 17.5149 13.7945 17.8618C14.5254 18.2087 15.4338 17.8802 15.8234 17.1281C16.213 16.376 15.9364 15.4851 15.2055 15.1382C14.4746 14.7913 13.5662 15.1198 13.1766 15.8719Z',
  d5: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.2417 2 12.3874 2.26355 12.2959 2.48729C12.1052 2.95395 12 3.4647 12 4C12 6.20914 13.7909 8 16 8C16.5478 8 17.0699 7.88988 17.5453 7.69056C17.7487 7.60533 18 7.77954 18 8C18 9.65685 19.3431 11 21 11C21.1138 11 21.2261 10.9937 21.3365 10.9813C21.6512 10.9462 21.9691 11.1463 21.9858 11.4625C21.9952 11.6405 22 11.8197 22 12C22 17.5228 17.5228 22 12 22Z',
  d6: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.2417 2 12.3874 2.26355 12.2959 2.48729C12.1052 2.95395 12 3.4647 12 4C12 6.20914 13.7909 8 16 8C16.5478 8 17.0699 7.88988 17.5453 7.69056C17.7487 7.60533 18 7.77954 18 8C18 9.65685 19.3431 11 21 11C21.1138 11 21.2261 10.9937 21.3365 10.9813C21.6512 10.9462 21.9691 11.1463 21.9858 11.4625C21.9952 11.6405 22 11.8197 22 12C22 17.5228 17.5228 22 12 22ZM6.24887 9.30307C5.79205 10.3381 5.98187 11.4892 6.67285 11.8741C7.36383 12.259 8.29431 11.7319 8.75113 10.6969C9.20795 9.66191 9.01813 8.51084 8.32715 8.12594C7.63617 7.74103 6.70569 8.26805 6.24887 9.30307ZM13.7945 17.8618C13.0636 17.5149 12.787 16.624 13.1766 15.8719C13.5662 15.1198 14.4746 14.7913 15.2055 15.1382C15.9364 15.4851 16.213 16.376 15.8234 17.1281C15.4338 17.8802 14.5254 18.2087 13.7945 17.8618Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.8796 1.25 13.242 2.15503 12.9902 2.7711C12.8356 3.14922 12.75 3.56368 12.75 4C12.75 5.79493 14.2051 7.25 16 7.25C16.4465 7.25 16.8701 7.16039 17.2554 6.99889C17.6386 6.83822 18.0199 6.93866 18.2728 7.1119C18.525 7.28467 18.75 7.59735 18.75 8C18.75 9.24264 19.7574 10.25 21 10.25C21.0859 10.25 21.1704 10.2452 21.2533 10.236C21.8616 10.1681 22.6886 10.5512 22.7348 11.4229C22.7449 11.614 22.75 11.8064 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15.0078 11C15.0078 11.5523 14.5601 12 14.0078 12H13.9988C13.4465 12 12.9988 11.5523 12.9988 11C12.9988 10.4477 13.4465 10 13.9988 10H14.0078C14.5601 10 15.0078 10.4477 15.0078 11ZM8.00781 17C8.5601 17 9.00781 16.5523 9.00781 16C9.00781 15.4477 8.5601 15 8.00781 15H7.99883C7.44655 15 6.99883 15.4477 6.99883 16C6.99883 16.5523 7.44655 17 7.99883 17H8.00781ZM6.83059 7.52969C7.37551 7.22105 8.06466 7.12144 8.69214 7.47098C9.29937 7.80923 9.60898 8.43578 9.70959 9.04586C9.81178 9.66551 9.7201 10.3593 9.43729 11C9.15521 11.6391 8.70877 12.1653 8.16945 12.4708C7.62453 12.7794 6.93538 12.8791 6.30789 12.5295C5.70067 12.1913 5.39105 11.5647 5.29045 10.9546C5.18826 10.335 5.27994 9.64124 5.56275 9.00048C5.84483 8.36137 6.29127 7.83516 6.83059 7.52969ZM7.56985 8.83487C7.35698 8.95544 7.10977 9.21025 6.93503 9.60616C6.76102 10.0004 6.71919 10.3997 6.77046 10.7106C6.8233 11.031 6.95409 11.1725 7.03784 11.2191C7.10134 11.2545 7.22292 11.283 7.43019 11.1656C7.64305 11.0451 7.89027 10.7902 8.06501 10.3943C8.23902 10.0001 8.28085 9.60079 8.22958 9.28992C8.17674 8.96948 8.04595 8.82804 7.96219 8.78139C7.8987 8.74602 7.77712 8.71748 7.56985 8.83487ZM15.526 14.4619C14.4026 13.9287 13.0707 14.4449 12.5096 15.5281C11.9406 16.6264 12.327 17.9972 13.4719 18.5405C14.5953 19.0737 15.9272 18.5575 16.4883 17.4743C17.0573 16.376 16.6709 15.0052 15.526 14.4619ZM13.8415 16.2181C14.0596 15.7971 14.5444 15.6564 14.8828 15.817C15.1998 15.9674 15.3667 16.3784 15.1564 16.7843C14.9383 17.2053 14.4535 17.346 14.1151 17.1854C13.7981 17.035 13.6312 16.624 13.8415 16.2181Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.8796 1.25 13.242 2.15503 12.9902 2.7711C12.8356 3.14922 12.75 3.56368 12.75 4C12.75 5.79493 14.2051 7.25 16 7.25C16.4465 7.25 16.8701 7.16039 17.2554 6.99889C17.6386 6.83822 18.0199 6.93866 18.2728 7.1119C18.525 7.28467 18.75 7.59735 18.75 8C18.75 9.24264 19.7574 10.25 21 10.25C21.0859 10.25 21.1704 10.2452 21.2533 10.236C21.8616 10.1681 22.6886 10.5512 22.7348 11.4229C22.7449 11.614 22.75 11.8064 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d9: 'M15.0078 11C15.0078 11.5523 14.5601 12 14.0078 12L13.9988 12C13.4465 12 12.9988 11.5523 12.9988 11C12.9988 10.4477 13.4465 10 13.9988 10L14.0078 10C14.5601 10 15.0078 10.4477 15.0078 11Z',
  d10: 'M9.00781 16C9.00781 16.5523 8.5601 17 8.00781 17L7.99883 17C7.44655 17 6.99883 16.5523 6.99883 16C6.99883 15.4477 7.44655 15 7.99883 15L8.00781 15C8.5601 15 9.00781 15.4477 9.00781 16Z',
  d11: 'M6.83059 7.52969C7.37551 7.22105 8.06466 7.12144 8.69214 7.47098C9.29937 7.80923 9.60898 8.43578 9.70959 9.04586C9.81178 9.66551 9.7201 10.3593 9.43729 11C9.15521 11.6391 8.70877 12.1653 8.16945 12.4708C7.62453 12.7794 6.93538 12.8791 6.30789 12.5295C5.70067 12.1913 5.39105 11.5647 5.29045 10.9546C5.18826 10.335 5.27994 9.64124 5.56275 9.00048C5.84483 8.36137 6.29127 7.83516 6.83059 7.52969ZM7.56985 8.83487C7.35698 8.95544 7.10977 9.21025 6.93503 9.60616C6.76102 10.0004 6.71919 10.3997 6.77046 10.7106C6.8233 11.031 6.95409 11.1725 7.03784 11.2191C7.10134 11.2545 7.22292 11.283 7.43019 11.1656C7.64305 11.0451 7.89027 10.7902 8.06501 10.3943C8.23902 10.0001 8.28085 9.60079 8.22958 9.28992C8.17674 8.96948 8.04595 8.82804 7.96219 8.78139C7.8987 8.74602 7.77712 8.71748 7.56985 8.83487Z',
  d12: 'M12.5096 15.5281C13.0707 14.4449 14.4026 13.9287 15.526 14.4619C16.6709 15.0052 17.0573 16.376 16.4883 17.4743C15.9272 18.5575 14.5953 19.0737 13.4719 18.5405C12.327 17.9972 11.9406 16.6264 12.5096 15.5281ZM14.8828 15.817C14.5444 15.6564 14.0596 15.7971 13.8415 16.2181C13.6312 16.624 13.7981 17.035 14.1151 17.1854C14.4535 17.346 14.9383 17.2053 15.1564 16.7843C15.3667 16.3784 15.1998 15.9674 14.8828 15.817Z',
  d13: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2H12.5351C12.1948 2.58835 12 3.27143 12 4C12 6.20914 13.7909 8 16 8C16.6513 8 17.8097 7.56817 17.8097 7.56817C17.8097 10 19.3431 11 21 11C21.3264 11 21.6406 10.9479 21.9348 10.8515C21.9779 11.2284 22 11.6116 22 12C22 17.5228 17.5228 22 12 22Z',
  d14: 'M7.56985 8.83439C7.35698 8.95495 7.10977 9.20976 6.93503 9.60567C6.76102 9.99993 6.71919 10.3992 6.77046 10.7101C6.8233 11.0305 6.95409 11.172 7.03784 11.2186C7.10134 11.254 7.22292 11.2825 7.43019 11.1651C7.64305 11.0446 7.89027 10.7898 8.06501 10.3939C8.23902 9.9996 8.28085 9.6003 8.22958 9.28944C8.17674 8.96899 8.04595 8.82756 7.96219 8.7809C7.8987 8.74553 7.77712 8.71699 7.56985 8.83439Z',
  d15: 'M13.8434 16.2171C14.0615 15.7962 14.5464 15.6554 14.8848 15.816C15.2017 15.9664 15.3686 16.3774 15.1584 16.7833C14.9403 17.2043 14.4554 17.345 14.117 17.1844C13.8001 17.034 13.6332 16.623 13.8434 16.2171Z',
  d16: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.1898 1.25 12.3786 1.25493 12.5662 1.26467L13.7848 1.32797L13.1779 2.38664C12.9058 2.86137 12.75 3.41135 12.75 4C12.75 5.79493 14.2051 7.25 16 7.25C16.6112 7.25 17.1808 7.08201 17.6679 6.79011L18.5132 6.28345L18.8103 7.33996C18.8369 7.41872 18.8791 7.53533 18.9387 7.67704C19.0586 7.96266 19.2441 8.33871 19.5062 8.7098C20.0331 9.45593 20.8041 10.1015 21.9348 10.1015H22.6232C22.6232 10.1015 22.7073 11.1064 22.7156 11.229C22.7319 11.4671 22.75 11.7774 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM15.0078 11C15.0078 11.5523 14.5601 12 14.0078 12H13.9988C13.4465 12 12.9988 11.5523 12.9988 11C12.9988 10.4477 13.4465 10 13.9988 10H14.0078C14.5601 10 15.0078 10.4477 15.0078 11ZM8.00781 17C8.5601 17 9.00781 16.5523 9.00781 16C9.00781 15.4477 8.5601 15 8.00781 15H7.99883C7.44655 15 6.99883 15.4477 6.99883 16C6.99883 16.5523 7.44655 17 7.99883 17H8.00781ZM6.83059 7.5292C7.37551 7.22056 8.06466 7.12096 8.69214 7.47049C9.29937 7.80874 9.60898 8.43529 9.70959 9.04537C9.81178 9.66502 9.7201 10.3588 9.43729 10.9995C9.15521 11.6386 8.70877 12.1648 8.16945 12.4703C7.62453 12.779 6.93538 12.8786 6.30789 12.529C5.70067 12.1908 5.39105 11.5642 5.29045 10.9542C5.18826 10.3345 5.27994 9.64076 5.56275 8.99999C5.84483 8.36088 6.29127 7.83468 6.83059 7.5292ZM15.5279 14.4609C14.4045 13.9277 13.0727 14.4439 12.5115 15.5271C11.9426 16.6254 12.329 17.9962 13.4739 18.5396C14.5973 19.0727 15.9291 18.5565 16.4903 17.4733C17.0592 16.375 16.6728 15.0042 15.5279 14.4609Z',
} as const;

export const IconBiscuitStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-stroke-rounded IconBiscuitStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBiscuitDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-duotone-rounded IconBiscuitDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBiscuitTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-twotone-rounded IconBiscuitTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBiscuitSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-solid-rounded IconBiscuitSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBiscuitBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-bulk-rounded IconBiscuitBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBiscuitStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-stroke-sharp IconBiscuitStrokeSharp"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBiscuitSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biscuit-solid-sharp IconBiscuitSolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBiscuit: TheIconSelfPack = {
  name: 'Biscuit',
  StrokeRounded: IconBiscuitStrokeRounded,
  DuotoneRounded: IconBiscuitDuotoneRounded,
  TwotoneRounded: IconBiscuitTwotoneRounded,
  SolidRounded: IconBiscuitSolidRounded,
  BulkRounded: IconBiscuitBulkRounded,
  StrokeSharp: IconBiscuitStrokeSharp,
  SolidSharp: IconBiscuitSolidSharp,
};