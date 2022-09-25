import { useEffect } from 'react';
import { ALL_MESSAGE_BY_PAGE, NEW_MESSAGE } from '@queries/message.queries';
import { useQuery } from '@apollo/client';

interface VariablesType {
  roomId: number;
  page: number;
  id: number;
}

interface QueryReturnType {
  data: any;
  loading: boolean;
  onLoadMore: any;
}

const useMessages = ({ page }: VariablesType): QueryReturnType => {
  const { data, loading, subscribeToMore, fetchMore } = useQuery(
    ALL_MESSAGE_BY_PAGE,
    {
      variables: {
        page,
      },
    },
  );

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: NEW_MESSAGE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { newMessage } = subscriptionData.data;
        return {
          ...prev,
          allMessagesByPage: {
            ...prev.allMessagesByPage,
            messages: [...prev.allMessagesByPage.messages, newMessage],
          },
        };
      },
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const onLoadMore = (variables: { roomId: number; page: number }) => {
    fetchMore({
      variables,
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          allMessagesByPage: {
            ...prev.allMessagesByPage,
            messages: [
              ...fetchMoreResult.allMessagesByPage.messages,
              ...prev.allMessagesByPage.messages,
            ],
            nextPage: fetchMoreResult.allMessagesByPage.nextPage,
          },
        };
      },
    });
  };

  return { data, loading, onLoadMore };
};

export default useMessages;
