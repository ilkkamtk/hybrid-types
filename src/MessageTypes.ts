import { MediaItem, UserWithNoPassword } from './DBTypes';

type MessageResponse = {
  message: string;
};

type ErrorResponse = MessageResponse & {
  stack?: string;
};

// for auth server
type LoginResponse = MessageResponse & {
  token: string;
  message: string;
  user: UserWithNoPassword;
};

type UserResponse = MessageResponse & {
  user: UserWithNoPassword;
};

type UserDeleteResponse = MessageResponse & {
  user: { user_id: number };
};

type AvailableResponse = Partial<MessageResponse> & {
  available: boolean;
};

type BooleanResponse = MessageResponse & {
  success: boolean;
};

// for upload server
type UploadResponse = MessageResponse & {
  data: {
    filename: string;
    media_type: string;
    filesize: number;
  };
};

type MediaResponse = MessageResponse & { 
  media: MediaItem;
};

export type {
  MessageResponse,
  ErrorResponse,
  LoginResponse,
  UploadResponse,
  UserResponse,
  UserDeleteResponse,
  AvailableResponse,
  BooleanResponse,
  MediaResponse,
};
