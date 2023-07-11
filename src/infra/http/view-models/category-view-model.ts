import { Category } from '@application/entities/category.entity';

export class CategoryViewModel {
  static toHTTP(category: Category) {
    return {
      id: category.id,
      name: category.name,
      type: category.type,
      createdAt: category.createdAt,
    };
  }
}
