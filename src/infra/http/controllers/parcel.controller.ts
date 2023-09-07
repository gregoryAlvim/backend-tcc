import { Response } from 'express';
import { JwtGuard } from '@application/use-cases/auth/guards/jwt-auth.guard';
import { UseGuards, Controller, Body, Param, Patch, Res } from '@nestjs/common';
import { UpdateParcelById } from '@application/use-cases/parcel/update-parcel-by-id';
import { UpdateParcelBody } from '../dtos/parcel/update-parcel-body';

@UseGuards(JwtGuard)
@Controller('parcels')
export class ParcelController {
  constructor(private updateParcelById: UpdateParcelById) {}

  @Patch('update-parcel-by/:id')
  async update(
    @Param() param,
    @Body() bodyRequest: UpdateParcelBody,
    @Res()
    response: Response,
  ) {
    const parcel_uuid = param.id;

    await this.updateParcelById.execute({ parcel_uuid, ...bodyRequest });

    response.json({
      status: 201,
      message: 'Parcela atualizada com sucesso!',
    });
  }
}
