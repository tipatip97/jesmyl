import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9953 12.5H12.0042M15.9908 12.5H15.9998M7.99976 12.5H8.00873',
  d2: 'M13.5 3.03368C12.2812 2.97856 11.0318 2.99114 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C21.9809 13.164 21.9937 12.8325 21.9982 12.5',
  d3: 'M16 7.5C16.4915 8.0057 17.7998 10 18.5 10M21 7.5C20.5085 8.0057 19.2002 10 18.5 10M18.5 10V2',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M19.5059 2.125C19.5059 1.57272 19.0581 1.125 18.5059 1.125C17.9536 1.125 17.5059 1.57272 17.5059 2.125L17.5059 6.62504L16.9116 6.62502C16.736 6.62489 16.5203 6.62474 16.3439 6.64681L16.3405 6.64723C16.2141 6.663 15.638 6.73483 15.3637 7.30043C15.0887 7.86725 15.3907 8.36739 15.456 8.4756L15.4584 8.47963C15.5506 8.63265 15.6848 8.80353 15.7951 8.94408L15.8188 8.97433C16.1135 9.35015 16.4954 9.83437 16.8759 10.2254C17.0657 10.4205 17.283 10.6217 17.5139 10.7806C17.7191 10.9218 18.0693 11.125 18.5 11.125C18.9307 11.125 19.2809 10.9218 19.4861 10.7806C19.717 10.6217 19.9343 10.4205 20.1241 10.2254C20.5046 9.83437 20.8865 9.35015 21.1812 8.97433L21.2049 8.94409C21.3152 8.80353 21.4494 8.63265 21.5416 8.47963L21.544 8.47559C21.6093 8.36739 21.9113 7.86725 21.6363 7.30043C21.362 6.73483 20.7859 6.66299 20.6595 6.64723L20.6561 6.64681C20.4797 6.62474 20.264 6.62489 20.0884 6.62502L19.5059 6.62504L19.5059 2.125Z',
  d6: 'M16.0057 4.67352L16.0057 3.20555C16.0057 2.98276 16.0057 2.87137 15.9394 2.78903C15.8732 2.70669 15.7692 2.68384 15.5612 2.63815C15.1253 2.54242 14.6776 2.47812 14.2204 2.44773C12.7601 2.35066 11.2369 2.35086 9.77965 2.44773C5.213 2.75129 1.58972 6.43758 1.2918 11.0474C1.23607 11.9098 1.23607 12.8018 1.2918 13.6642C1.40272 15.3806 2.15148 16.929 2.98381 18.1854C3.23314 18.6669 3.10323 19.3891 2.6369 20.2728L2.61542 20.3135C2.45874 20.6102 2.30536 20.9007 2.21688 21.1484C2.12313 21.4108 2.02623 21.8275 2.26791 22.2395C2.48996 22.6181 2.84475 22.7568 3.13152 22.8123C3.36961 22.8584 3.66155 22.8653 3.93544 22.8719L3.98117 22.873C5.40092 22.9075 6.40136 22.4976 7.1938 21.9133L7.28907 21.8431C7.40859 21.7552 7.46835 21.7112 7.54604 21.7016C7.62373 21.692 7.69203 21.7198 7.82861 21.7755C7.89626 21.803 7.97233 21.8343 8.05839 21.8698C8.59978 22.0927 9.21472 22.2263 9.77965 22.2639C11.2369 22.3607 12.7601 22.3609 14.2204 22.2639C18.787 21.9603 22.4103 18.274 22.7082 13.6642C22.7639 12.8018 22.7639 11.9098 22.7082 11.0474C22.7052 11.0015 22.7019 10.9557 22.6983 10.91C22.6575 10.3944 22.637 10.1366 22.4452 10.0753C22.2534 10.014 22.0794 10.2214 21.7315 10.6364L21.199 11.2714C20.9771 11.4995 20.682 11.7784 20.3361 12.0164C20.0532 12.211 19.3916 12.625 18.4998 12.625C17.608 12.625 16.9464 12.211 16.6635 12.0164C16.3176 11.7784 16.0225 11.4995 15.8006 11.2714C15.3555 10.8139 14.9259 10.2668 14.6382 9.89978L14.599 9.84991C14.4991 9.72286 14.3149 9.48857 14.1735 9.25386L14.1714 9.25048L14.1658 9.24116C14.0659 9.07736 13.3799 7.95264 14.0139 6.64576C14.4002 5.84944 15.036 5.48045 15.5168 5.3085C15.7697 5.21806 15.8962 5.17284 15.9509 5.09513C16.0057 5.01742 16.0057 4.90278 16.0057 4.67352ZM8.00195 11.625C7.44967 11.625 7.00195 12.0727 7.00195 12.625C7.00195 13.1773 7.44967 13.625 8.00195 13.625H8.01093C8.56321 13.625 9.01093 13.1773 9.01093 12.625C9.01093 12.0727 8.56321 11.625 8.01093 11.625H8.00195ZM11.9975 11.625C11.4452 11.625 10.9975 12.0727 10.9975 12.625C10.9975 13.1773 11.4452 13.625 11.9975 13.625H12.0064C12.5587 13.625 13.0064 13.1773 13.0064 12.625C13.0064 12.0727 12.5587 11.625 12.0064 11.625H11.9975Z',
  d7: 'M16.0057 3.20555L16.0057 4.67352C16.0057 4.90278 16.0057 5.01741 15.9509 5.09513C15.8962 5.17284 15.7697 5.21806 15.5168 5.3085C15.036 5.48045 14.4002 5.84944 14.0139 6.64576C13.3799 7.95264 14.0659 9.07736 14.1658 9.24116L14.1714 9.25048L14.1735 9.25385C14.3149 9.48857 14.4991 9.72286 14.599 9.84991L14.6382 9.89978C14.9259 10.2668 15.3555 10.8139 15.8006 11.2714C16.0225 11.4995 16.3176 11.7784 16.6635 12.0164C16.9464 12.211 17.608 12.625 18.4998 12.625C19.3916 12.625 20.0532 12.211 20.3361 12.0164C20.682 11.7784 20.9771 11.4995 21.199 11.2714L21.7315 10.6364C22.0794 10.2214 22.2534 10.014 22.4452 10.0753C22.637 10.1366 22.6575 10.3944 22.6983 10.91C22.7019 10.9557 22.7052 11.0015 22.7082 11.0474C22.7639 11.9098 22.7639 12.8018 22.7082 13.6642C22.4103 18.274 18.787 21.9603 14.2204 22.2639C12.7601 22.3609 11.2369 22.3607 9.77965 22.2639C9.21472 22.2263 8.59978 22.0927 8.05839 21.8698C7.97233 21.8343 7.89626 21.803 7.82861 21.7755C7.69203 21.7198 7.62373 21.692 7.54604 21.7016C7.46835 21.7112 7.40859 21.7552 7.28907 21.8431L7.1938 21.9133C6.40136 22.4976 5.40092 22.9075 3.98117 22.873L3.93544 22.8719C3.66155 22.8653 3.36961 22.8584 3.13152 22.8123C2.84475 22.7568 2.48996 22.6181 2.26791 22.2395C2.02623 21.8275 2.12313 21.4108 2.21688 21.1484C2.30536 20.9007 2.45874 20.6102 2.61542 20.3135L2.6369 20.2728C3.10323 19.3891 3.23314 18.6669 2.98381 18.1854C2.15148 16.929 1.40272 15.3806 1.2918 13.6642C1.23607 12.8018 1.23607 11.9098 1.2918 11.0474C1.58972 6.43758 5.213 2.75129 9.77965 2.44773C11.2369 2.35086 12.7601 2.35066 14.2204 2.44773C14.6776 2.47812 15.1253 2.54242 15.5612 2.63815C15.7692 2.68384 15.8732 2.70668 15.9394 2.78903C16.0057 2.87137 16.0057 2.98276 16.0057 3.20555Z',
  d8: 'M7.00195 12.625C7.00195 12.0727 7.44967 11.625 8.00195 11.625H8.01093C8.56321 11.625 9.01093 12.0727 9.01093 12.625C9.01093 13.1773 8.56321 13.625 8.01093 13.625H8.00195C7.44967 13.625 7.00195 13.1773 7.00195 12.625ZM10.9975 12.625C10.9975 12.0727 11.4452 11.625 11.9975 11.625H12.0064C12.5587 11.625 13.0064 12.0727 13.0064 12.625C13.0064 13.1773 12.5587 13.625 12.0064 13.625H11.9975C11.4452 13.625 10.9975 13.1773 10.9975 12.625Z',
  d9: 'M11.9246 12.4297H11.9335M15.8925 12.4297H15.9014M7.95679 12.4297H7.96569',
  d10: 'M15.9016 6.96665L18.8808 9.94665L21.86 6.96665M18.8808 2V9.35438',
  d11: 'M9.87699 2.99199C2.2225 3.79378 -0.124398 12.4613 3.6015 17.8926L2.01833 21.7908C1.98575 21.871 2.06356 21.9519 2.14498 21.9224L6.50395 20.3467C8.57253 21.8544 14.5217 21.9667 17.2958 20.4429C19.0918 19.3522 21.8499 17.7322 21.8499 12.1665M9.87699 2.99199C10.0322 2.98305 10.1892 2.97852 10.3478 2.97852M9.87699 2.99199L11.2505 2.98708L14.0726 2.99196',
  d12: 'M19.0432 12.4319L22.4218 9.05343C22.5807 9.63441 22.6847 10.2384 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2895V12.2105V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1795 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H11.2105H12.7895H12.7895H12.7896C13.4486 2.24999 13.8205 2.24999 14.1405 2.2722C15.0696 2.33669 15.9604 2.5374 16.7932 2.85455V3.81799L13.5684 6.95707L19.0432 12.4319ZM9.00897 11.4999H7V13.4999H9.00897V11.4999ZM13.0045 11.4999H10.9955V13.4999H13.0045V11.4999Z',
  d13: 'M19.043 10.6641L22.7502 6.95696L21.3359 5.54274L20.043 6.83564V1.24985H18.043V6.83564L16.7502 5.54274L15.3359 6.95696L19.043 10.6641Z',
};

export const IconMessageDownload02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-stroke-rounded IconMessageDownload02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMessageDownload02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-duotone-rounded IconMessageDownload02DuotoneRounded"
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

export const IconMessageDownload02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-twotone-rounded IconMessageDownload02TwotoneRounded"
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

export const IconMessageDownload02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-solid-rounded IconMessageDownload02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMessageDownload02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-bulk-rounded IconMessageDownload02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessageDownload02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-stroke-sharp IconMessageDownload02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDownload02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-download-02-solid-sharp IconMessageDownload02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessageDownload02: TheIconSelfPack = {
  name: 'MessageDownload02',
  StrokeRounded: IconMessageDownload02StrokeRounded,
  DuotoneRounded: IconMessageDownload02DuotoneRounded,
  TwotoneRounded: IconMessageDownload02TwotoneRounded,
  SolidRounded: IconMessageDownload02SolidRounded,
  BulkRounded: IconMessageDownload02BulkRounded,
  StrokeSharp: IconMessageDownload02StrokeSharp,
  SolidSharp: IconMessageDownload02SolidSharp,
};