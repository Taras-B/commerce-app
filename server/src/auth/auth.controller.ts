import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.authService.findById(id);
  }

  @ApiResponse({
    status: 200,
    description: 'New tokens successfully created.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @Post('signup')
  async signUp(@Body() userDTO: RegisterDTO) {
    return this.authService.signUp(userDTO);
  }

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    return this.authService.login(userDTO);
  }
}
