import type { IIconProps } from './types';

export default function IconChevron({ fill = '#006B56', className = '' }: IIconProps) {
  return (
    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6.9187 2L2 6.9187L6.9187 11.8374" stroke={fill} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>
  );
}