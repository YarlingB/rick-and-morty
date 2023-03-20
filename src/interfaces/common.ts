import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ColorType, SizeType, VariantType } from 'types/common';
import { ICharacter } from './characters';

export interface IChildrenNode {
  children: ReactNode;
}
export interface IChildrenStyleProps {
  children: ReactNode;
  keyName: string;
  className?: string;
}

export interface IBannerProps {
  imgSource: string;
  children?: ReactNode;
}

export interface IRMButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  color?: ColorType;
  variant?: VariantType;
  disabled?: boolean;
  children: ReactNode;
}

export interface IRMCharactersWrapperProps {
  children: ReactNode;
  characters?: ICharacter[];
}
