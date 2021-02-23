import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import { User, UserDocument } from './models/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).select('-password').exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async signUp(userDTO: RegisterDTO) {
    const { email, password, username } = userDTO;

    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new NotFoundException('User already exists');
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const createUser = new this.userModel({
      username,
      email,
      password: hashPassword,
    });
    const newUser = await createUser.save();

    const token = this.jwtService.sign({
      id: newUser._id,
      username: newUser.username,
    });
    const result = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      create: newUser.create,
    };
    return { access_token: token, ...result };
  }

  async login(userDTO: LoginDTO) {
    const { email, password } = userDTO;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User Not Found. Invalid login credentials.');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const result = {
        _id: user._id,
        username: user.username,
        email: user.email,
        create: user.create,
      };
      return {
        access_token: this.jwtService.sign({
          _id: user._id,
          username: user.username,
        }),
        ...result,
      };
    } else {
      throw new ForbiddenException('Incorrect password');
    }
  }
}
