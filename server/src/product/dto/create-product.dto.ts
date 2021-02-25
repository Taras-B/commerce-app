import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone X' })
  readonly name: string;

  @ApiProperty({ example: 100 })
  readonly price: number;

  @ApiProperty({
    example:
      'defaultLorem ipsum dolor sit met, consecrator advising elite, sed do elusion tempore incident ut laborer et dolors magna alicia. ',
  })
  readonly description: string;

  @ApiProperty({ example: 'example' })
  readonly picture: string;

  @ApiProperty({ example: '60379232938f520cb44f97e0' })
  readonly category: string;
  @ApiProperty({
    example: [{ title: 'title', description: 'some description' }],
  })
  readonly productInfo: [{ title: string; description: string }];
}
