import { Category } from '@application/entities/category.entity';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract update(category: Category): Promise<void>;
  abstract getAllCategoriesByType(type: string): Promise<Category[]>;
}
