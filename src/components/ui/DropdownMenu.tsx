import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuItemsProps,
} from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Button } from './Buttons';

type DropdownMenuProps = {
  children: React.ReactNode;
  buttonElement: React.ReactNode;
  disabled?: boolean;
};
const DropdownMenu = ({
  children,
  buttonElement,
  disabled,
}: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton disabled={disabled}>{buttonElement}</MenuButton>
      {children}
    </Menu>
  );
};

export const DropdownMenuItems = ({
  children,
  anchor = 'bottom end',
}: {
  children: React.ReactNode;
  anchor?: MenuItemsProps['anchor'];
}) => {
  return (
    <MenuItems
      anchor={anchor}
      className={
        'bg-white min-w-[10rem] shadow-paper3 rounded-[1rem] overflow-hidden'
      }
    >
      {children}
    </MenuItems>
  );
};

export const DropdownMenuItem = ({
  children,
  as = 'button',
}: {
  children: React.ReactNode;
  as?: 'link' | 'button';
}) => {
  return (
    <MenuItem
      as={as === 'link' ? 'a' : 'button'}
      className={
        'h-[2.5rem] w-full hover:bg-brand-gray-extra-light/50 flex items-center px-[1rem] text-[0.875rem] text-brand-gray-extra-dark'
      }
    >
      {children}
    </MenuItem>
  );
};

export default DropdownMenu;
