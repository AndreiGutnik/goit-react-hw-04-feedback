import React from 'react';
import { NotificationTitle } from './Notification.styled';

export function Notification({ message }) {
  return (
    <>
      <NotificationTitle>{message}</NotificationTitle>
    </>
  );
}
