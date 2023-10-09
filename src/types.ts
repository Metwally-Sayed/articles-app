export interface Userdata {
  DisplayName?: string | undefined;
  RoleName?: string;
  roleId?: number;
  isActive?: true;
  userName: string | undefined;
  password: string | undefined;
  email: string | undefined;
  RoleId?: number | undefined;
}

export interface decodedJWT {
  foo: string;
  exp: number;
  iat: number;
}

export interface Articale {
  categoryId: number;
  body?: string | undefined;
  categoryName?: string | undefined;
  date?: string | undefined;
  id?: number | undefined;
  isActive?: boolean | undefined;
  title?: string | undefined;
  userId?: number | undefined;
  writerName?: string | undefined;
}

export interface Category {
  id: number;
  isActive: boolean;
  name: string;
}
