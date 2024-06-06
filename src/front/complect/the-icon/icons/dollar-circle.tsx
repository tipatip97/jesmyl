import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998',
  d3: 'M14.7317 10.063C14.6326 9.30039 13.7569 8.06817 12.1823 8.06814C10.3526 8.06811 9.58285 9.08141 9.42663 9.58807C9.18294 10.2657 9.23167 11.659 11.3762 11.811C14.0569 12.001 15.1308 12.3173 14.9941 13.9579C14.8575 15.5985 13.3632 15.9529 12.1823 15.9149C11.0013 15.8769 9.06912 15.3345 8.99414 13.8753M11.9948 7V8.07177M11.9948 15.905V17',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V7.42416C10.6347 7.52886 10.0701 7.7612 9.61196 8.09711C8.97319 8.56549 8.5 9.2746 8.5 10.1278C8.5 10.8783 8.76936 11.572 9.45777 12.0328C10.0819 12.4507 10.9522 12.6062 12 12.6062C12.9582 12.6062 13.5279 12.7501 13.8421 12.9537C14.088 13.1131 14.25 13.354 14.25 13.8726C14.25 14.3084 14.0711 14.5775 13.7369 14.777C13.3572 15.0037 12.7608 15.1391 12 15.1391C11.3002 15.1391 10.7004 14.9471 10.2971 14.676C9.88907 14.4018 9.75 14.1036 9.75 13.8726C9.75 13.4584 9.41421 13.1226 9 13.1226C8.58579 13.1226 8.25 13.4584 8.25 13.8726C8.25 14.7554 8.78251 15.4654 9.46029 15.921C9.9609 16.2574 10.5786 16.4867 11.25 16.585V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16.6006C13.3866 16.5325 13.9974 16.3684 14.5057 16.065C15.2573 15.6163 15.75 14.8772 15.75 13.8726C15.75 12.951 15.412 12.1837 14.6579 11.6949C13.9721 11.2504 13.0418 11.1062 12 11.1062C11.0478 11.1062 10.5431 10.9543 10.2922 10.7864C10.1056 10.6615 10 10.4909 10 10.1278C10 9.86732 10.1424 9.56819 10.4989 9.30676C10.855 9.04566 11.3833 8.86133 12 8.86133C12.6167 8.86133 13.145 9.04566 13.501 9.30676C13.8576 9.56819 14 9.86732 14 10.1278C14 10.542 14.3358 10.8778 14.75 10.8778C15.1642 10.8778 15.5 10.542 15.5 10.1278C15.5 9.2746 15.0268 8.56549 14.388 8.09711C13.9299 7.7612 13.3653 7.52886 12.75 7.42416V7Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V7.42416C13.3653 7.52886 13.9299 7.7612 14.388 8.09711C15.0268 8.56549 15.5 9.27459 15.5 10.1278C15.5 10.542 15.1642 10.8778 14.75 10.8778C14.3358 10.8778 14 10.542 14 10.1278C14 9.86732 13.8576 9.56819 13.501 9.30676C13.145 9.04566 12.6167 8.86133 12 8.86133C11.3833 8.86133 10.855 9.04566 10.4989 9.30676C10.1424 9.56819 10 9.86732 10 10.1278C10 10.4909 10.1056 10.6615 10.2922 10.7864C10.5431 10.9543 11.0478 11.1062 12 11.1062C13.0418 11.1062 13.9721 11.2504 14.6579 11.6949C15.412 12.1837 15.75 12.951 15.75 13.8726C15.75 14.8772 15.2573 15.6163 14.5057 16.065C13.9974 16.3684 13.3866 16.5325 12.75 16.6006V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V16.585C10.5786 16.4867 9.9609 16.2574 9.46029 15.921C8.78251 15.4654 8.25 14.7554 8.25 13.8726C8.25 13.4584 8.58579 13.1226 9 13.1226C9.41421 13.1226 9.75 13.4584 9.75 13.8726C9.75 14.1036 9.88907 14.4018 10.2971 14.676C10.7004 14.9471 11.3002 15.1391 12 15.1391C12.7608 15.1391 13.3572 15.0037 13.7369 14.777C14.0711 14.5775 14.25 14.3084 14.25 13.8726C14.25 13.354 14.088 13.1131 13.8421 12.9537C13.5279 12.7501 12.9582 12.6062 12 12.6062C10.9522 12.6062 10.0819 12.4507 9.45777 12.0328C8.76936 11.572 8.5 10.8783 8.5 10.1278C8.5 9.2746 8.97319 8.56549 9.61196 8.09711C10.0701 7.7612 10.6347 7.52886 11.25 7.42416L11.25 7C11.25 6.58579 11.5858 6.25 12 6.25Z',
  d7: 'M12 6.5V8M12 8C10.4812 8 9.25 8.92865 9.25 10.0741C9.25 11.2196 10 11.8519 12 11.8519C14 11.8519 15 12.4445 15 13.926C15 15.4075 13.6569 16 12 16M12 8C13.5188 8 14.75 8.92865 14.75 10.0741M12 16V17.5M12 16C10.3431 16 9 15.0715 9 13.926',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.25 6.5V7.31432C10.6307 7.4222 10.0631 7.66236 9.60383 8.00873C8.96392 8.49137 8.5 9.2142 8.5 10.0741C8.5 10.832 8.76292 11.5374 9.44965 12.0103C10.0757 12.4414 10.9497 12.6019 12 12.6019C12.9559 12.6019 13.5219 12.7494 13.834 12.9574C14.0812 13.1222 14.25 13.3779 14.25 13.926C14.25 14.3924 14.0614 14.6752 13.7289 14.8794C13.3512 15.1113 12.7581 15.25 12 15.25C11.3046 15.25 10.7077 15.0539 10.3052 14.7756C9.89966 14.4953 9.75 14.1826 9.75 13.926H8.25C8.25 14.8149 8.77191 15.5392 9.45218 16.0095C9.95415 16.3565 10.5748 16.5933 11.25 16.6946V17.5H12.75V16.7106C13.3895 16.6404 14.0033 16.4711 14.5137 16.1577C15.267 15.6952 15.75 14.941 15.75 13.926C15.75 12.9926 15.4188 12.2112 14.666 11.7094C13.9781 11.2507 13.0441 11.1019 12 11.1019C11.0503 11.1019 10.5493 10.9463 10.3004 10.7749C10.1121 10.6452 10 10.4617 10 10.0741C10 9.78857 10.1517 9.47434 10.5071 9.20629C10.8628 8.93796 11.3882 8.75 12 8.75C12.6118 8.75 13.1372 8.93796 13.4929 9.20629C13.8483 9.47434 14 9.78857 14 10.0741H15.5C15.5 9.2142 15.0361 8.49137 14.3962 8.00873C13.9369 7.66236 13.3693 7.4222 12.75 7.31432V6.5H11.25Z',
};

export const IconDollarCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-stroke-rounded IconDollarCircleStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDollarCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-duotone-rounded IconDollarCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-twotone-rounded IconDollarCircleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-solid-rounded IconDollarCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-bulk-rounded IconDollarCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDollarCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-stroke-sharp IconDollarCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-circle-solid-sharp IconDollarCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDollarCircle: TheIconSelfPack = {
  name: 'DollarCircle',
  StrokeRounded: IconDollarCircleStrokeRounded,
  DuotoneRounded: IconDollarCircleDuotoneRounded,
  TwotoneRounded: IconDollarCircleTwotoneRounded,
  SolidRounded: IconDollarCircleSolidRounded,
  BulkRounded: IconDollarCircleBulkRounded,
  StrokeSharp: IconDollarCircleStrokeSharp,
  SolidSharp: IconDollarCircleSolidSharp,
};