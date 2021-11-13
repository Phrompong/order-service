import { getModelForClass, prop } from "@typegoose/typegoose";

export class Banner {
  @prop()
  public name!: string;

  @prop()
  public images!: string;

  @prop()
  public remark!: string;
}

export const BannerModel = getModelForClass(Banner, {
  schemaOptions: { collection: "cltBanners" },
});
