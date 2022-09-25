import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RoomHeader from '@/components/RoomHeader';
import useUsers from '@/hooks/useUser';
import { User } from '@generated/types';
import { getText } from '@/constants/localization';
import SideBar from '@/components/SideBar';
import Loader from '@components/Common/Loader';
import ChatLog from '@/components/ChatLog';
import useMessages from '@/hooks/useMessage';
import RoomInput from '@/components/RoomInput';

interface LocationState {
  userId: number;
  roomId: number;
  code: string;
  lang: string;
}

const Room: React.FC = () => {
  const location = useLocation<LocationState>();
  const { userId, roomId, code, lang } = location.state;
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(2);
  const { tokenErrorText } = getText(lang);

  try {
    const { data: usersData, loading: usersLoading } = useUsers({ roomId });
    const validateUsers = usersData.roomById.users.filter(
      (user: User) => !user.isDeleted,
    );

    const {
      data: messagesData,
      loading: messagesLoading,
      onLoadMore,
    } = useMessages({
      roomId,
      page: 1,
      id: userId,
    });

    if (messagesLoading || usersLoading) return <Loader />;

    return (
      <>
        <RoomHeader
          visible={visible}
          setVisible={setVisible}
          code={code}
          lang={lang}
          users={validateUsers}
        />
        <SideBar visible={visible} users={validateUsers} />

        <ChatLog
          messages={messagesData.allMessagesByPage.messages}
          page={page}
          setPage={setPage}
          onLoadMore={onLoadMore}
        />

        <RoomInput />
      </>
    );
  } catch (error) {
    alert(tokenErrorText);
    window.location.href = '/';
    return <div></div>;
  }
};

export default Room;
