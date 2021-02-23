import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { AuthService } from './auth.service';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@User('_id') _id: string) {
    return this.authService.findById(_id);
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
  @ApiResponse({
    status: 200,
    description: 'New tokens successfully created.',
  })
  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    return this.authService.login(userDTO);
  }
}
