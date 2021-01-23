import React from 'react';
import { GridItem, UnorderedList, useDisclosure } from '@chakra-ui/react';
import { AddGuildModal } from '../../modals/AddGuildModal';
import { GuildListItem } from '../../items/GuildListItem';
import { AddGuildIcon } from '../../sections/AddGuildIcon';
import { HomeIcon } from '../../sections/HomeIcon';

export const GuildList: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem gridColumn={1} gridRow={'1 / 4'} bg='#202225' overflowY='hidden'>
      <HomeIcon />
      <UnorderedList listStyleType='none' ml='0'>
        <GuildListItem />
      </UnorderedList>
      <AddGuildIcon onOpen={onOpen} />
      <AddGuildModal isOpen={isOpen} onClose={onClose} />
    </GridItem>
  );
};
