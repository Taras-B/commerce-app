import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class RegisterDTO {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
}
