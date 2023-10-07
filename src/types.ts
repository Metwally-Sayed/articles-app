export interface Userdata {
  userName: string;
  RoleName?: string;
  password?: string;
  email: string;
  DisplayName?: string;
  roleId?: number;
  isActive?: boolean;
}

export interface decodedJWT {
  foo: string;
  exp: number;
  iat: number;
}

export interface Articale {
  body: string;
  categoryId: number;
  categoryName: string;
  date: string;
  id: number;
  isActive: boolean;
  title: string;
  userId: number;
  writerName: string;
}

